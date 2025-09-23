import { useEffect, useRef, useState } from 'react';
import * as mobilenet from '@tensorflow-models/mobilenet';
import * as tf from '@tensorflow/tfjs';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Onboarding from '../components/Onboarding';
import ResultCard from '../components/ResultCard';

export default function Scan(){
  const videoRef = useRef(null);
  const [status,setStatus] = useState('Preparing camera…');
  const [best,setBest] = useState(null);

  useEffect(()=>{
    let timer;
    async function start(){
      try{
        if(!navigator.mediaDevices?.getUserMedia){
          setStatus('Camera not supported on this device.');
          return;
        }
        const stream = await navigator.mediaDevices.getUserMedia({video:true});
        videoRef.current.srcObject = stream;
        await videoRef.current.play();
        setStatus('Loading AI model…');
        const model = await mobilenet.load();
        setStatus('Scanning…');
        timer = setInterval(async ()=>{
          try {
            const preds = await model.classify(videoRef.current);
            if (preds?.length) setBest(preds[0]);
          } catch {}
        }, 1800);
      }catch(e){
        setStatus('Please allow camera access to use the scanner.');
      }
    }
    start();
    return ()=>{ if(timer) clearInterval(timer); };
  },[]);

  return (
    <main style={{fontFamily:'system-ui'}}>
      <Onboarding/>
      <Navbar/>
      <section style={{padding:'16px',textAlign:'center'}}>
        <h1>CarScan Camera</h1>
        <video ref={videoRef} width="320" autoPlay muted playsInline
               style={{border:'1px solid #ccc',borderRadius:12}}/>
        <p style={{marginTop:8,opacity:.85}}>{status}</p>
        <ResultCard prediction={best}/>
      </section>
      <Footer/>
    </main>
  );
}
