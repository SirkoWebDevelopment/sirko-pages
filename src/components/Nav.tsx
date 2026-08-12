export const Nav = () => {
  return (
    <header className="nav">
      <div className="nav__inner">
        <a href="#top" className="nav__brand">
          <span className="nav__mark">
            <span className="nav__mark-dot">
              <i className="nav__ear nav__ear--left" />
              <i className="nav__ear nav__ear--right" />
            </span>
          </span>
          <span className="nav__name">Sirko Dev Studio</span>
        </a>
        <nav className="nav__links">
          <a href="#portfolio" className="navlink">
            Portfolio
          </a>
          <a href="#story" className="navlink">
            Our Story
          </a>
          <a href="#contact" className="navlink navlink--cta">
            Start a project
          </a>
        </nav>
      </div>
    </header>
  )
}
