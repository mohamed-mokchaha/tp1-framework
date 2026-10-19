import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Image from './assets/images.jpg'
const nom="hamma mokchaha";
const email="xxxxxxXxx@gmail.com";
const tel="+216 56589878";
const fill="génie logiciel et systéme d'information";
const ann="2026/2027";
const grp="GLSI 2";
const img= Image
function App() {
  return (
    <div>
      <img src={img}></img>
      <h1>Fiche étudiant</h1>
      <p>nom & prénom : {nom} </p>
      <p>email : {email} </p>
      <p>teléphone : {tel} </p>
      <p>Filliére : {fill} </p>
      <p>année : {ann} </p>
      <p>groupe : {grp} </p>
      <button>contacter</button>
    </div>


  );
}

export default App
