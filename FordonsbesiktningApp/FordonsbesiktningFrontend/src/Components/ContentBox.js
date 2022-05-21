import React from "react";

function ContentBox(props) {
  const scheme = React.useRef(null);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const schemeUrl = new URL("https://localhost:7125/api/subsystems/");
    function fetchScheme(id) {
      setIsLoading(true);
      fetch(schemeUrl + id)
        .then((res) => res.json())
        .catch((err) => console.log(err))
        .then((data) => {
          scheme.current = data;
          setIsLoading(false);
          console.log(scheme.current);
        });
    }
    if (props.systemId) fetchScheme(props.systemId);
    console.log(props.systemId);
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
        <Header type="small" />
      </div>
    );
  }
}

function Header(props) {
  switch (props.type) {
    case "big":
      return (
        <div className="header-big">
          <h3>
            {props.index} {props.title}
          </h3>
        </div>
      );
    case "small":
      return (
        <div className="header-small">
          <h3>
            {props.index} {props.title}
          </h3>
        </div>
      );
    default:
      return null;
  }
}

export default ContentBox;
