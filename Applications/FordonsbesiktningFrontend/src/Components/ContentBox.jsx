import React from "react";
import ComponentDetails from "./ComponentDetails";

function ContentBox(props) {
  const scheme = React.useRef(null);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const schemeUrl = new URL("https://localhost:7125/api/subsystems/");
    function fetchScheme(id) {
      setIsLoading(true);
      fetch(schemeUrl + id)
        .then((res) => res.json())
        .catch((err) => console.error("something went wrong", err))
        .then((data) => {
          scheme.current = data;
          setIsLoading(false);
          // console.log(scheme.current);
        });
    }
    if (props.systemId) fetchScheme(props.systemId);
  }, [props.systemId]);

  if (isLoading) {
    return (
      <div className="content-box">
        <span className="loading">
          <i></i>
          <h5>Laddar...</h5>
        </span>
      </div>
    );
  } else {
    return (
      <div className="content-box">
        <Header type="big" index={props.systemId} title={scheme.current[0].name} />
        {scheme.current.map((elem, index) => (
          <Header type="small" key={index} index={elem.id} title={elem.name} systemDetails={elem.subsystems} />
        ))}
      </div>
    );
  }
}

function Header(props) {
  switch (props.type) {
    case "big":
      return (
        <div className="header header-big">
          <h3>
            {props.index} {props.title}
          </h3>
        </div>
      );
    case "small":
      return (
        <div className="header header-small">
          <h3>
            {props.index} {props.title}
          </h3>
          {props.systemDetails.map((elem, index) => (
            <DropdownHeader key={index} details={elem} />
          ))}
        </div>
      );
    default:
      return null;
  }
}
function DropdownHeader(props) {
  function dropElement(e) {
    e.currentTarget.children[1].style.transform += "rotateX(180deg)";

    let dropdown = e.currentTarget.nextElementSibling;

    if (dropdown.style.display === "block") {
      dropdown.style.display = "none";
    } else {
      dropdown.style.display = "block";
    }
  }

  return (
    <div className="header-dropdown">
      <span onClick={dropElement}>
        <h4>
          {props.details.id} {props.details.name}
        </h4>
        <i className="fa-solid fa-caret-down"></i>
      </span>
      <ComponentDetails componentInformation={props.details} />
    </div>
  );
}

export default ContentBox;
