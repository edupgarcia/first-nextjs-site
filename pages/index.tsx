import React from "react";
import { useState } from 'react';
import Link from 'next/link';

function Index() {
  return (
    <div>
      <h1>My First Next.js Page</h1>
      <Contador />
      <Link href="/sobre">
        <a>Sobre</a> 
      </Link>
      <br/>
      <Link href="/tempo">
        <a>Tempo</a>
      </Link>
    </div>
    
  );
}

function Contador() {
  const [contador, setContador] = useState(1);

  function adicionarContador() {
    setContador(contador + 1);
  }

  return (
    <div>
    <div>{contador}</div> 
    <button onClick={adicionarContador}>Adicionar</button>
    </div>
  )
}

export default Index;
