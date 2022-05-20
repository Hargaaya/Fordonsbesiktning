import React from "react";
import Searchbar from "./Searchbar.js";

function Sidebar() {
  const schemeUrl = new URL("https://localhost:7125/api/");
  const [scheme, setScheme] = React.useState(null);

  function OnMount() {
    let localScheme = sessionStorage.getItem("scheme");

    if (localScheme != null) {
      let parsedLocalScheme = JSON.parse(localScheme);
      // move sorting out to Util??
      parsedLocalScheme.sort((a, b) => a.id - b.id);
      setScheme(parsedLocalScheme);
    } else {
      fetchScheme();
    }
  }

  function fetchScheme() {
    fetch(schemeUrl + "systems")
      .then((res) => res.json())
      .catch((err) => console.log(err))
      .then((data) => {
        sessionStorage.setItem("scheme", JSON.stringify(data));
        // move sorting out to Util??
        data.sort((a, b) => a.id - b.id);
        setScheme(data);
      });
  }

  React.useEffect(() => {
    OnMount();
  }, []);

  return (
    <div className="sidebar">
      <Searchbar />
      {scheme != null && scheme.map((elem, index) => <SidebarButton key={index} number={elem.id} text={elem.name} />)}
    </div>
  );
}

function SidebarButton({ number, text }) {
  return (
    <div className="sidebar-button">
      <p className="sidebar-button-text">
        <sup className="sidebar-button-number">{number}</sup>
        {text}
      </p>
    </div>
  );
}

export default Sidebar;
