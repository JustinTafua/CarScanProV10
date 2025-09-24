import React from 'react';

export default function LogosPage() {
  // List of logo files (expand this list as you add more)
  const logos = [
    "/logos/carscanpro-test.svg",
    "/logos/carscanpro-1.svg",
    "/logos/carscanpro-2.svg",
    "/logos/carscanpro-3.svg"
    // Add more as needed...
  ];

  return (
    <main style={{textAlign: 'center', padding: '2rem'}}>
      <h2>CarScan Pro Logo Gallery</h2>
      <p>Curated logo variations for merch, identity, and fun 🚗🔍</p>
      <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem', marginTop:'2rem'}}>
        {logos.map((logo, idx) => (
          <div key={idx} style={{border: '1px solid #ddd', padding: '1rem', borderRadius:'8px'}}>
            <img src={logo} alt={`CarScan Pro Logo ${idx+1}`} width="150"/>
            <p style={{fontSize:'0.8em', marginTop:'0.5rem'}}>{logo.split('/').pop()}</p>
          </div>
        ))}
      </div>
      <small style={{display:'block', marginTop:'2rem', opacity:0.5}}>
        © Justin Tafua • CarScan Pro
      </small>
    </main>
  );
}
