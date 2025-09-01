
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top navbar-dark">
      <div className="container">
        {/* Text Logo - Use this if you don't have a graphic logo */}
        {/* <a className="navbar-brand logo-text page-scroll" href="index.html">Gemdev</a> */}

        {/* Image Logo */}
        <a className="navbar-brand logo-image" href="index.html">
          <img src="/src/assets/logo.svg" alt="alternative" />
        </a>

        <button
          className="navbar-toggler p-0 border-0"
          type="button"
          data-toggle="offcanvas"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="navbar-collapse offcanvas-collapse" id="navbarsExampleDefault">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link page-scroll" href="#details">
                Details <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link page-scroll" href="#features">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link page-scroll" href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link page-scroll" href="#contact">
                Contact
              </a>
            </li>
          </ul>

          <span className="nav-item social-icons">
            <span className="fa-stack">
              <a href="#your-link">
                <i className="fas fa-circle fa-stack-2x"></i>
                <i className="fab fa-facebook-f fa-stack-1x"></i>
              </a>
            </span>
            <span className="fa-stack">
              <a href="#your-link">
                <i className="fas fa-circle fa-stack-2x"></i>
                <i className="fab fa-twitter fa-stack-1x"></i>
              </a>
            </span>
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
