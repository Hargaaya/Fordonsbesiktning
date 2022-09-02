import React from "react";
import Searchbar from "./Searchbar.js";

function Sidebar(props) {
  return (
    <div className="sidebar">
      <Searchbar />
      {props.systems &&
        props.systems.map((elem, index) => <SidebarButton key={index} index={elem.id} text={elem.name} setScheme={props.setScheme} />)}
    </div>
  );
}

function SidebarButton({ index, text, setScheme }) {
  return (
    <div className="sidebar-button" onClick={() => setScheme(index)}>
      <p className="sidebar-button-text">
        <sup className="sidebar-button-number">{index}</sup>
        {text}
      </p>
    </div>
  );
}

export default Sidebar;
