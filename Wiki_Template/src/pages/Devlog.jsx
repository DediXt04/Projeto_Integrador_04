import React from 'react'

export default function Devlog() {
  const entradas = [
    { data: '2025-11-01', titulo: 'Protótipo inicial', texto: 'Criei o protótipo da mecânica de troca de dimensão ao pular.' },
    { data: '2025-11-10', titulo: 'Arte base', texto: 'Sprites 32x32 prontos para o personagem.' },
  ]

  return (
    <div>
      <h2>Devlog</h2>
      {entradas.map((e, i) => (
        <div key={i} className="mb-4">
          <h5>{e.titulo} <small className="text-muted">— {e.data}</small></h5>
          <p>{e.texto}</p>
        </div>
      ))}
    </div>
  )
}
