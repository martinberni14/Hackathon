#![no_std]
use soroban_sdk::{contract, contractimpl, contracttype, Address, Env, Symbol};

#[contract]
pub struct AurumToken;

#[contracttype]
#[derive(Clone, Debug, Eq, PartialEq)]
pub enum DataKey {
    Admin,
    Auditor,
    Balance(Address),
    TotalSupply,
}

#[contractimpl]
impl AurumToken {
    /// Inicializa el contrato definiendo al Fideicomiso (Admin) y al Oráculo RWA (Auditor)
    pub fn initialize(env: Env, admin: Address, auditor: Address) {
        if env.storage().instance().has(&DataKey::Admin) {
            panic!("Contract already initialized");
        }
        env.storage().instance().set(&DataKey::Admin, &admin);
        env.storage().instance().set(&DataKey::Auditor, &auditor);
    }

    /// Emite nuevos tokens $AUR
    /// Requiere autorización (Multisig) del Fideicomiso y del Oráculo Backend tras validar el Proof of Reserves
    pub fn mint(env: Env, to: Address, amount: i128) {
        if amount <= 0 {
            panic!("Amount must be positive");
        }

        let admin: Address = env.storage().instance().get(&DataKey::Admin).unwrap();
        let auditor: Address = env.storage().instance().get(&DataKey::Auditor).unwrap();

        // [RWA Security]: Ambas partes deben firmar esta transacción para mintear oro digital
        admin.require_auth();
        auditor.require_auth();

        // Actualizar el balance del usuario final
        let mut balance = Self::get_balance(env.clone(), to.clone());
        balance += amount;
        env.storage().persistent().set(&DataKey::Balance(to.clone()), &balance);

        // Actualizar el suministro total de oro tokenizado
        let mut supply: i128 = env.storage().instance().get(&DataKey::TotalSupply).unwrap_or(0);
        supply += amount;
        env.storage().instance().set(&DataKey::TotalSupply, &supply);

        // Publicar evento en la red (SEP-41 compliance y transparencia)
        env.events().publish((Symbol::new(&env, "mint"), to), amount);
    }

    /// Obtiene el balance de $AUR de una cuenta en gramos de oro
    pub fn get_balance(env: Env, user: Address) -> i128 {
        env.storage().persistent().get(&DataKey::Balance(user)).unwrap_or(0)
    }
}
