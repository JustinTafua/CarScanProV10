import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AdSlot from '../components/AdSlot';
import affiliates from '../config/affiliates.json';

export default function Home(){
  return (
    <main style={{fontFamily:'system-ui, -apple-system, Segoe UI, Roboto, sans-serif'}}>
      <Navbar/>
      <section style={{padding:'32px',textAlign:'center'}}>
        <h1 style={{fontSize:36,marginBottom:8}}>CarScan Pro</h1>
        <p style={{opacity:.8}}>DIY car repair helper. Scan parts, learn fixes, find replacements.</p>
        <a href="/scan" style={{display:'inline-block',marginTop:16,padding:'12px 16px',border:'1px solid #000',borderRadius:10,textDecoration:'none'}}>Open Scanner</a>
        <div style={{marginTop:12}}><a href="/pricing">Go Pro</a></div>
      </section>

      <section style={{padding:'16px 32px'}}>
        <h3>Popular Parts & Sellers</h3>
        <ul>
          {affiliates.parts.map((p,i)=>(
            <li key={i}><a href={p.url} target="_blank" rel="noreferrer">{p.name}</a></li>
          ))}
        </ul>
      </section>

      <section style={{padding:'0 32px'}}>
        <AdSlot/>
      </section>

      <Footer/>
    </main>
  );
}
