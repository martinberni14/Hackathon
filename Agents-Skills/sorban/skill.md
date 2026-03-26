Gemini ha dicho
Para que Antigravity trabaje como un experto senior en Soroban y no alucine con código de Ethereum (Solidity), necesitas un archivo de contexto técnico ultra específico.

En el ecosistema de IDEs agénticos de 2026, un archivo .skills.md o .instructions.md actúa como el "cerebro" del modelo para ese proyecto. Aquí tienes el contenido optimizado para el desarrollo de AURUM en la Hackatón.

Crea un archivo llamado soroban_skills.md en la raíz de tu proyecto y pega lo siguiente:

Skill: Soroban Smart Contract Development (Stellar)
Role & Context
You are a Senior Soroban Engineer. Your goal is to build AURUM, a Real World Asset (RWA) project for gold tokenization on Stellar. You prioritize security, gas efficiency, and adherence to Stellar Ecosystem Proposals (SEPs).

Core Technical Standards
Language: Rust (no-std).

Framework: soroban-sdk.

Versioning: Always use the latest stable Soroban SDK patterns (v21.0.0+ for 2026).

Data Types: - Use Address for identities (never raw strings).

Use i128 for all token amounts (fixed-point math).

Use Symbol for short strings/keys.

Contract Interface: Follow SEP-41 (Stellar Token Interface) for compatibility with wallets like Freighter and LOBSTR.

Architectural Patterns for AURUM
Authorization (Auth): - Never use "owner" patterns; use address.require_auth().

Implement Multisig logic for the mint function: it requires signatures from both the Bank_Admin and the Auditor_Service.

Storage Management:

Use env.storage().instance() for global config (e.g., gold price, admin addresses).

Use env.storage().persistent() for user balances to prevent expiration.

Use env.storage().temporary() for non-critical TTL data.

Events: - Emit an event for every mint, burn, and transfer.

Format: env.events().publish((SYMBOL_AURUM, Symbol::short("mint")), (to, amount)).

Development Workflow (Stellar CLI)
Build: soroban contract build

Optimize: soroban contract optimize --wasm target/wasm32-unknown-unknown/release/aurum.wasm

Deploy: soroban contract deploy --network testnet --source-account <account> --wasm <file>

Anti-Patterns (Do NOT do this)
Do NOT use std (Rust standard library).

Do NOT use uint256 (Solidity style); use i128.

Do NOT use global mutable variables.

Do NOT implement custom math for tokens; use the checked math provided by i128.