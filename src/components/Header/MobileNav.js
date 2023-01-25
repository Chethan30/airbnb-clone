import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import TuneIcon from "@mui/icons-material/Tune";

import "./MobileNav.css";

export default function MobileSearchBar() {
  return (
    <div className="mobile-search">
      <div className="left">
        <SearchIcon fontSize="small" />
      </div>
      <div className="middle">
        <div className="up">
          {" "}
          <strong>Anywhere</strong>
        </div>
        <div className="down">Anyweek . Add guests</div>
      </div>
      <div className="right">
        <TuneIcon fontSize="small" />
      </div>
    </div>
  );
}
