import './globals.css';
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <nav className="card" style={{margin:16, display:'flex', gap:12}}>
          <a href="/home">Home</a>
          <a href="/clients">Clients</a>
          <a href="/ask">Ask ENOVA</a>
          <a href="/settings">Settings</a>
        </nav>
        <main style={{padding:16}}>{children}</main>
      </body>
    </html>
  );
}
