const MobileNavbar = ({ toggleMobileNav }) => {
  return (
    <div className="mobile-nav" id="mobile-nav">
      <div className="mobile-nav--header">
        <h1 className="logo">
          <i className="fas fa-headphones-alt"></i> Musicfy
        </h1>
        <div className="close--btn" onClick={toggleMobileNav}>
          <button>
            <i class="fas fa-times"></i>
          </button>
        </div>
      </div>
      <a className="mobile-navigation--item" href="/home">
        <i className="fas fa-home"></i> Home
      </a>
    </div>
  );
};

export default MobileNavbar;
