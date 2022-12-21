import { useState } from "react";
import { Link } from "react-router-dom";
import data from "../data.json";

export default function Navigation(props) {
  const [onMenu, handleMenu] = useState(false);
  return (
    <nav
      className={`nav ${props.device == "mobile" && onMenu ? "nav-menu" : ""}`}
    >
      <div className="navbar">
        <div className="n-container container">
          <header className="n-header">
            <h2 className="title">THE PLANETS</h2>
            {props.device == "mobile" ? (
              onMenu ? (
                <button className="nh-btn inactive">
                  <img src="/assets/icon-hamburger.svg" />
                </button>
              ) : (
                <button className="nh-btn" onClick={() => handleMenu(true)}>
                  <img src="/assets/icon-hamburger.svg" />
                </button>
              )
            ) : null}
          </header>
          {props.device != "mobile" ? <Menu device={props.device} /> : null}
        </div>
      </div>
      {onMenu && props.device == "mobile" ? (
        <Menu device={props.device} close={() => handleMenu(false)} />
      ) : null}
    </nav>
  );
}

function Menu(props) {
  if (props.device != "mobile") {
    return (
      <div className="menu ">
        {data.map((planet, index) => (
          <MenuEntry
            device={props.device}
            name={planet.name}
            isLast={index == data.length - 1}
            key={index}
          />
        ))}
      </div>
    );
  }
  return (
    <div className="menu">
      <div className="container m15">
        {data.map((planet, index) => (
          <MenuEntry
            device={props.device}
            name={planet.name}
            close={props.close}
            isLast={index == data.length - 1}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}

function MenuEntry(props) {
  if (props.device != "mobile") {
    return (
      <div className={`m-entry me-${props.name.toLowerCase()}`}>
        <Link to={`/${props.name.toLowerCase()}`}>
          <h4>{props.name.toUpperCase()}</h4>
        </Link>
      </div>
    );
  }
  return (
    <Link
      className={`me-${props.name.toLowerCase()}`}
      to={`/${props.name.toLowerCase()}`}
      onClick={props.close}
    >
      <div className={`me-mobile ${props.isLast ? "mem-last" : ""}`}>
        <h3 className="mr15">{props.name.toUpperCase()}</h3>
        <img src="/assets/icon-chevron.svg" />
      </div>
    </Link>
  );
}
