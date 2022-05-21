import React from "react";
import Searchbar from "./Searchbar.js";

function Sidebar(props) {
  const [systems, setSystems] = React.useState(null);

  React.useEffect(() => {
    const systemsUrl = new URL("https://localhost:7125/api/");

    function fetchSystems() {
      fetch(systemsUrl + "systems")
        .then((res) => res.json())
        .catch((err) => console.log(err))
        .then((data) => {
          sessionStorage.setItem("systems", JSON.stringify(data));
          // move sorting out to Util??
          data.sort((a, b) => a.id - b.id);
          setSystems(data);
        });
    }

    function OnMount() {
      let localSystems = sessionStorage.getItem("systems");

      if (localSystems != null) {
        let parsedLocalSystems = JSON.parse(localSystems);
        // move sorting out to Util??
        parsedLocalSystems.sort((a, b) => a.id - b.id);
        setSystems(parsedLocalSystems);
      } else {
        fetchSystems();
      }
    }

    OnMount();
  }, []);

  return (
    <div className="sidebar">
      <Searchbar />
      {systems && systems.map((elem, index) => <SidebarButton key={index} index={elem.id} text={elem.name} setScheme={props.setScheme} />)}
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
