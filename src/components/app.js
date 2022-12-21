import { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navigation from "./nav";
import Planet from "./planet";
import data from "../data.json";

const [TABLET, MOBILE] = [1100, 650];

function App() {
  const [device, setDevice] = useState("desktop");

  useEffect(() => {
    window.addEventListener("resize", manageDevice);
    manageDevice();
    preloadAssets();
    window.scrollTo(0, 0);
    return () => {
      window.removeEventListener("resize", manageDevice);
    };
  }, []);

  function manageDevice() {
    const screenWidth = window.innerWidth;
    if (screenWidth <= MOBILE && device != "mobile") {
      setDevice("mobile");
    } else if (
      screenWidth > MOBILE &&
      screenWidth <= TABLET &&
      device != "tablet"
    ) {
      setDevice("tablet");
    } else if (screenWidth > TABLET && device != "desktop") {
      setDevice("desktop");
    }
  }

  function preloadAssets() {
    let png = [];
    let svg = [
      "background-stars",
      "icon-chevron",
      "icon-hamburger",
      "icon-source",
    ];
    for (let i = 0; i < data.length; i++) {
      const planetName = data[i].name.toLowerCase();
      png.push(`geology-${planetName}`);
      svg.push(`planet-${planetName}`);
      svg.push(`planet-${planetName}-internal`);
    }
    png.forEach((path) => {
      let link = document.createElement("link");
      link.rel = "preload";
      link.as = "image";
      link.href = `/assets/${path}.png`;
      document.head.appendChild(link);
    });
    svg.forEach((path) => {
      let link = document.createElement("link");
      link.rel = "preload";
      link.as = "image";
      link.href = `/assets/${path}.svg`;
      document.head.appendChild(link);
    });
  }

  return (
    <div className="app">
      <Navigation device={device} />
      <Routes>
        <Route exact path="/" element={<Navigate to="/earth" />} />
        {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => {
          const planet = data[i];
          return (
            <Route
              path={`/${planet.name.toLocaleLowerCase()}`}
              element={<Planet planet={planet} device={device} />}
              key={i}
            />
          );
        })}
      </Routes>
    </div>
  );
}

export default App;
