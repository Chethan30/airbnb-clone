import React from "react";
import logo from "../../assets/airbnb-logo.png";
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
// import MenuIcon from "@mui/icons-material/Menu";
// import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "./NavBar.css";
import ProfileMenu from "./ProfileMenu";
import BottomNav from "../Footer/BottomNav";
import MobileSearchBar from "./MobileNav";
import Filter from "../Filter/Filter";

function NavBar() {
  return (
    <>
      <div className="navbar">
        <img src={logo} alt="Airbnb" className="airbnb-logo" />
        <div className="search-bar">
          <div className="search-bar-text ">Anywhere</div>
          <div className="search-bar-text ">Any week</div>
          <div className="search-bar-text spl">Add guests</div>
          <div className="search-bar-icon">
            <SearchIcon className="search-icon" fontSize="small" />
          </div>
        </div>
        <div className="profile-bar">
          <div className="your-home">Airbnb your home</div>
          <div className="globe">
            <LanguageIcon fontSize="small" />
          </div>
          <ProfileMenu />
        </div>
        <MobileSearchBar />

        <BottomNav />
      </div>
      <Filter />
    </>
  );
}

export default NavBar;
