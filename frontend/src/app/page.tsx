"use client";

import { useState } from 'react';

export default function Home() {
  const [walletConnected, setWalletConnected] = useState(false);
  const [address, setAddress] = useState("");
  const [balance, setBalance] = useState("0");

  const connectWallet = async () => {
    // Hackathon mockup: Connexión a Freighter / LOBSTR
    // En código real: await requestAccess();
    setAddress("GABCDEFGHIJKLMNOPQRSTUVWXYZ123456789");
    setWalletConnected(true);
    setBalance("15.5"); // Simulación de 15.5g de oro
  };

  const mintTokens = async () => {
    // 1. Llama al Oráculo: POST /api/rwa/validate-gold
    // 2. Obtiene MockEd25519AuditorSignature123456789
    // 3. Envía la tx de invoke al Smart Contract (Soroban)
    alert("Iniciando validación RWA (Proof of Reserves) y minteo en Soroban...");
  };

  return (
    <main className="flex-1 flex flex-col items-center justify-center p-8 text-center space-y-8 min-h-screen">
      <h1 className="text-5xl font-extrabold tracking-tight">
        Bienvenido a <span className="text-aurumGold">AURUM</span>
      </h1>
      <p className="text-xl max-w-2xl text-slate-300">
        Resguardá tus ahorros contra la inflación tokenizando oro físico real y auditable en la red Stellar.
      </p>
      
      {!walletConnected ? (
        <button 
          onClick={connectWallet}
          className="bg-aurumGold text-gray-900 font-bold py-3 px-8 rounded-full hover:bg-yellow-300 transition-colors shadow-lg"
        >
          Conectar Billetera (Freighter)
        </button>
      ) : (
        <div className="bg-gray-800 border border-gray-700 p-8 rounded-2xl flex flex-col items-center space-y-4 shadow-xl">
          <p className="text-sm font-mono text-gray-400 break-all">{address}</p>
          <div className="text-6xl font-bold text-aurumGold">{balance} <span className="text-2xl">$AUR</span></div>
          <p className="text-sm text-gray-500">Gramos de Oro Respaldado</p>
          
          <button 
            onClick={mintTokens}
            className="mt-6 bg-indigo-600 text-white font-bold py-3 px-8 rounded-full hover:bg-indigo-500 transition-colors shadow-md"
          >
            Verificar Reservas y Mintear
          </button>
        </div>
      )}
    </main>
  );
}
