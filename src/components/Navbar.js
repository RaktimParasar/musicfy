const Navbar = ({ toggleMobileNav, handlelogout }) => {
  return (
    <header>
      <h1 className="logo">
        <i className="fas fa-headphones-alt"></i> Musicfy
      </h1>
      <nav className="navigation">
        <a className="navigation--item" href="/home">
          <i className="fas fa-home"></i> Home
        </a>
      </nav>
      <div className="menu-button" onClick={toggleMobileNav}>
        <button>
          <i class="fas fa-bars"></i>
        </button>
      </div>
      <a href="/" className="logout" onClick={handlelogout}>
        <i className="fas fa-sign-out-alt "></i> Logout
      </a>
    </header>
  );
};

export default Navbar;
