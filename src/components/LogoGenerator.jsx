import React, { useMemo } from 'react';

export default function LogoGenerator() {
  // Base car states
  const carStates = [
    "normal Skyline R32",
    "hood removed, engine visible",
    "engine hoist lifting motor",
    "front bumper removed, intercooler showing",
    "car jacked up, wheel missing",
    "open trunk with tools"
  ];

  // Colors + effects
  const colors = ["bright blue", "midnight black", "neon green", "candy red", "silver", "white"];
  const effects = ["glow", "shadow", "metallic", "retro", "stealth", "carbon fiber accent"];
  const backgrounds = ["white", "gradient", "garage scene", "smoke", "track outline"];

  // Pick random combos
  const logo = useMemo(() => {
    const car = carStates[Math.floor(Math.random() * carStates.length)];
    const color = colors[Math.floor(Math.random() * colors.length)];
    const effect = effects[Math.floor(Math.random() * effects.length)];
    const bg = backgrounds[Math.floor(Math.random() * backgrounds.length)];
    return { car, color, effect, bg };
  }, []);

  return (
    <div style={{textAlign:'center', padding:'1rem'}}>
      <h1 style={{fontFamily:'sans-serif'}}>
        CarScan <span style={{color:'dodgerblue'}}>Pr<span style={{border:'2px solid black', borderRadius:'50%', padding:'0 4px'}}>o</span></span>
      </h1>
      <p>
        Variation: {logo.color} {logo.car} with {logo.effect} on {logo.bg} background
      </p>
      <small style={{opacity:0.4, fontSize:'0.7em'}}>
        © Justin Tafua • CarScan Pro
      </small>
    </div>
  );
}
