import sofia from "../assets/sofia.jpg";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="profile--details">
        <img className="profile--img" src={sofia} alt="Profile of user" />
        <h3 className="username">Sofia Doe</h3>
        <p className="useremail">sofiadoe@gmail.com</p>
      </div>
      <div className="navbar">
        <ul>
          <li className="nav__list">
            <i class="fas fa-house-user nav__logo nav__active"></i>
            <a className="navbar__link nav__active" href="##">
              Home
            </a>
          </li>
          <li className="nav__list">
            <i class="fas fa-sign-out-alt nav__logo"></i>
            <a className="navbar__link" href="##">
              Logout
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
