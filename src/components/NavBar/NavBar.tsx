import "./NavBar.scss";

function NavBar() {


  return (
    <div className="navBar" >
      <div className="navBar__anchor">
        <a href="#">Profil</a>
        <a href="#sectionContainer__projectSection__white-projet--experience">Expériences</a>
        <a href="#sectionContainer__projectSection__white-projet--contact">Contact</a>
      </div>
    </div>
  );
}

export default NavBar;