import { useEffect, useState } from 'react';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavItemClick = () => {
    setMenuOpen(false); // close menu on link click
  };

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <h2 className="header-logo">PF.</h2>

      <ul className={`nav-links ${menuOpen ? 'show' : ''}`} id="navLinks">
        <li><a href="#home" className="nav-item" onClick={handleNavItemClick}>Home</a></li>
        <li><a href="#about" className="nav-item" onClick={handleNavItemClick}>About</a></li>
        <li><a href="#skills" className="nav-item" onClick={handleNavItemClick}>Skills</a></li>
        <li><a href="#projects" className="nav-item" onClick={handleNavItemClick}>Projects</a></li>
        <li><a href="#contact" className="nav-item" onClick={handleNavItemClick}>Contact</a></li>
      </ul>

      <a href="#" className="primary-btn nav-btn">Hire me</a>

      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <span className={`material-symbols-outlined burgermenu ${menuOpen ? 'active' : ''}`}>
          menu
        </span>
      </div>
    </header>
  );
}

export default Header;
