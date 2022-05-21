import "./index.css";
import React from "react";
import Sidebar from "./Components/Sidebar.js";
import ContentBox from "./Components/ContentBox.js";

function App() {
  const [currSystem, setCurrSystem] = React.useState(null);
  const setScheme = (id) => {
    console.log("The Id is: " + id);
    setCurrSystem(id);
  };

  return (
    <div className="App">
      <Sidebar setScheme={setScheme} />
      {currSystem && <ContentBox systemId={currSystem} />}
    </div>
  );
}

export default App;
