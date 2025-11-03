import React from 'react'

function Footer() {
  return (
    <footer className="bg-light text-center py-4 mt-5">
      <div className="container">
        <small>© {new Date().getFullYear()} Wiki-Game • Projeto da faculdade</small>
      </div>
    </footer>
  )
}

export default Footer
