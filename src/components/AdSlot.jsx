import { useEffect } from 'react';

export default function AdSlot(){
  useEffect(()=>{
    // Optional: add your AdSense script here later
    // const s = document.createElement('script');
    // s.async = true;
    // s.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXX';
    // s.crossOrigin = 'anonymous';
    // document.head.appendChild(s);
  },[]);
  return (
    <div style={{margin:'16px 0',padding:'12px',border:'1px dashed #aaa',textAlign:'center'}}>
      <small>Ad space (configure your AdSense ID)</small>
    </div>
  );
}
