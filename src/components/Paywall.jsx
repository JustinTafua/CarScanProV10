export default function Paywall(){
  return (
    <section style={{padding:'16px',border:'1px solid #ddd',borderRadius:12,background:'#fafafa'}}>
      <h3>Go Pro</h3>
      <ul>
        <li>Higher-accuracy scans</li>
        <li>Faster recognition</li>
        <li>No ads</li>
        <li>Priority support</li>
      </ul>
      <a href="/feedback" style={{display:'inline-block',padding:'10px 16px',border:'1px solid #000',borderRadius:8,marginTop:8,textDecoration:'none'}}>Contact to Upgrade</a>
    </section>
  );
}
