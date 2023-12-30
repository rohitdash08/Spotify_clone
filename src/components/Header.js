import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import "./Header.css";
import { Avatar } from "@mui/material";
import { useDataLayerValue } from "../DataLayer";

function Header() {
  const [{ user }, dispatch] = useDataLayerValue();

  return (
    <div className="header">
      <div className="header__left">
        <SearchIcon />
        <input
          placeholder="Search for Artists, Songs, and Albums"
          type="text"
        />
      </div>

      <div className="header__right">
        <Avatar src={user?.images[0]?.url} alt={user} />
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  );
}

export default Header;
