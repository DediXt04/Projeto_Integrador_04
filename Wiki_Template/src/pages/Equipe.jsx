import React from 'react'

export default function Equipe() {
  const membros = [
    { nome: 'André Queiroz', funcao: 'Desenvolvedor / Game Designer', github: 'https://github.com/DediXt04' },
    // adicione mais membros aqui
  ]

  return (
    <div>
      <h2>Equipe</h2>
      <div className="row">
        {membros.map((m, i) => (
          <div key={i} className="col-md-4 mb-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{m.nome}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{m.funcao}</h6>
                <a href={m.github} className="card-link" target="_blank">GitHub</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
