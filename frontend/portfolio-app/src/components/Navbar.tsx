import './Navbar.css';

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-content">
          <div className="logo">Meu Portfólio</div>
          <ul className="nav-links">
            <li><a href="#home">Início</a></li>
            <li><a href="#projects">Projetos</a></li>
            <li><a href="#skills">Habilidades</a></li>
            <li><a href="#experience">Experiência</a></li>
            <li><a href="#contact">Contato</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}; 