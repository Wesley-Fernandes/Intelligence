"use client"
import Typewriter from 'typewriter-effect';
export default function Typefication() {
  /*Líder de Mercado em soluções de tecnologia para condomínios,
  administradoras e empresas.
  */
  return (
    <Typewriter
    options={{strings:['condomínios.', 'administradoras.', 'empresas.'], loop: true, autoStart: true}}/>
  )
}
