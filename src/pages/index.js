import React from 'react';
import LogoGenerator from '../components/LogoGenerator';

export default function Home() {
  return (
    <main style={{textAlign:'center', padding:'2rem'}}>
      <h2>Welcome to CarScan Pro 🚗🔍</h2>
      <LogoGenerator />
      <p style={{marginTop:'1rem'}}>
        The first ever DIY auto app with an infinite living logo system.
      </p>
    </main>
  );
}
