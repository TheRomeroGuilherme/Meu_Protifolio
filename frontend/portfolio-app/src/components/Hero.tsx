import './Hero.css';

export const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            Olá, sou <span className="highlight">Seu Nome</span>
          </h1>
          <h2 className="hero-subtitle">Desenvolvedor Full Stack</h2>
          <p className="hero-description">
            Especializado em criar soluções web modernas e eficientes com 
            React, TypeScript, C# .NET e muito mais.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">Ver Projetos</a>
            <a href="#contact" className="btn btn-secondary">Entre em Contato</a>
          </div>
        </div>
      </div>
    </section>
  );
};