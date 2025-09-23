export default function Navbar(){
  return (
    <nav style={{display:'flex',justifyContent:'space-between',padding:'12px',borderBottom:'1px solid #eee'}}>
      <a href="/" style={{fontWeight:700,textDecoration:'none'}}>CarScan Pro</a>
      <div style={{display:'flex',gap:12}}>
        <a href="/scan">Scan</a>
        <a href="/pricing">Pro</a>
        <a href="/feedback">Feedback</a>
      </div>
    </nav>
  );
}
