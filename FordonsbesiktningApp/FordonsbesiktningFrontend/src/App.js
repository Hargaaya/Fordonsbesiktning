import "./index.css";
import React from "react";
import Sidebar from "./Components/Sidebar.js";
import ContentBox from "./Components/ContentBox.js";

function App() {
  const [currSystem, setCurrSystem] = React.useState(null);
  const systems = [
    {
      id: 1,
      name: "Stomme",
    },
    {
      id: 2,
      name: "Hjulsystem",
    },
    {
      id: 3,
      name: "Drivsystem",
    },
    {
      id: 4,
      name: "Bromssystem",
    },
    {
      id: 5,
      name: "Styrsystem",
    },
    {
      id: 6,
      name: "Karosseri",
    },
    {
      id: 7,
      name: "Kommunikation",
    },
    {
      id: 8,
      name: "Instrumentering",
    },
    {
      id: 9,
      name: "Övrigt",
    },
    {
      id: 30,
      name: "Miljökontroll",
    },
  ];

  const setScheme = (id) => {
    setCurrSystem(id);
  };

  return (
    <div className="App">
      <Sidebar setScheme={setScheme} systems={systems} />
      {currSystem && <ContentBox systemId={currSystem} />}
    </div>
  );
}

export default App;
