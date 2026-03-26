# Contexto del Proyecto: AURUM (Tokenización de Oro RWA)

## Estado Actual y Objetivo
El objetivo es proveer la estructura y los esqueletos base ("MVP") para el proyecto AURUM en el marco de la Hackathon Vendimia Tech 2026. AURUM busca proteger contra la inflación local mediante la tokenización de oro físico usando la red Stellar, ofreciendo un token 100% respaldado ($AUR).

## Arquitectura y Componentes
1. **Contratos Inteligentes (Soroban/Rust)**: 
   - Implementa SEP-41 (`TokenInterface`).
   - Función de minteo crítica que requiere autorizaciones múltiples (Multisig) del administrador y del auditor de reservas (Oráculo RWA).
2. **Backend (Node.js/Express + TypeScript)**:
   - Actúa como servicio puente (Oráculo/Auditor).
   - Simula consulta de bóvedas (`POST /api/rwa/validate-gold`) para permitir procesos de minteo (Proof of Reserves).
3. **Frontend (Next.js/React)**:
   - Integración nativa con Freighter y LOBSTR.
   - Panel de control para que el usuario conecte la billetera y verifique el balance de su oro tokenizado.

## Directivas Core (User Rules)
- **Idioma**: Toda documentación (como esta) en ESPAÑOL. Todo el código fuente en INGLÉS.
- **Calidad de Código**: Strict Type Safety en TS (prohibido `any`). Aplicar principios SOLID y evitar código espagueti.
- **Convenciones Blockchain**: Para contratos Soroban, usar `i128` para balances, `Address` para identidades y NUNCA usar la librería `std` de Rust (no-std environment).

## Progreso de Tareas (Última Sesión)
- Esqueletos base de contratos, backend y frontend **completados**.
- Diagrama arquitectónico RWA documentado en el walkthrough artifact.

*Nota: Creado durante la fase de análisis inicial para establecer el contexto.*
