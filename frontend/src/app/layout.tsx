import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'AURUM | Oro Tokenizado en Stellar',
  description: 'Ahorro y pagos con oro físico tokenizado ($AUR) 100% auditable y on-chain.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="antialiased min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
