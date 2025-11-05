import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <div className="p-5 mb-4 bg-light rounded-3">
        <div className="container-fluid py-5">
          <h1 className="display-5 fw-bold">Nome do Jogo (provisório)</h1>
          <p className="col-md-8 fs-4">Breve descrição do jogo.</p>
          <Link to="/sobre" className="btn btn-primary btn-lg">Saiba mais</Link>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6">
          <h3>Sobre o projeto</h3>
          <p>Resumo curto do objetivo do jogo e o que o torna diferente.</p>
        </div>
        <div className="col-md-6">
          <h3>Devlog recente</h3>
          <p>Últimas atualizações rápidas com links para a página Devlog.</p>
        </div>
      </div>
    </div>
  )
}
