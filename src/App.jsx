// Componente principal de la aplicación
import { useState } from 'react'
import { ListaClientes } from './componets/ListaClientes'
import './App.css'

function App() {
  return (
    <>
      <center><h1>Unos animalitos</h1></center>
      {/* Renderizamos la lista de clientes */}
      <ListaClientes/>
    </>
  )
}

export default App