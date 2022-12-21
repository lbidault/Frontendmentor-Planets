import { useState } from "react";
import { Button } from "./design";

const TOPICS_IMAGE = ["planet", "internal", "geology"];
const TOPICS_CONTENT = ["overview", "structure", "geology"];

export default function Planet(props) {
  const [topic, selectTopic] = useState(0);
  const TopicNav = () => {
    if (props.device != "mobile") {
      return (
        <div className={`pm-buttons pm-${props.planet.name.toLowerCase()}`}>
          <Button
            number={1}
            className="m05"
            text="OVERVIEW"
            active={topic == 0}
            handler={() => selectTopic(0)}
          />
          <Button
            number={2}
            className="m05"
            text="INTERNAL STRUCTURE"
            active={topic == 1}
            handler={() => selectTopic(1)}
          />
          <Button
            number={3}
            className="m05"
            text="SURFACE GEOLOGY"
            active={topic == 2}
            handler={() => selectTopic(2)}
          />
        </div>
      );
    }
    return (
      <div className={`pm-mobile pm-${props.planet.name.toLowerCase()}`}>
        <div className="container">
          <button
            className={`pmm-btn ${topic == 0 ? "pmmb-active" : ""}`}
            onClick={() => selectTopic(0)}
          >
            <h3 className="">OVERVIEW</h3>
          </button>
          <button
            className={`pmm-btn ${topic == 1 ? "pmmb-active" : ""}`}
            onClick={() => selectTopic(1)}
          >
            <h3 className="">STRUCTURE</h3>
          </button>
          <button
            className={`pmm-btn ${topic == 2 ? "pmmb-active" : ""}`}
            onClick={() => selectTopic(2)}
          >
            <h3 className="">SURFACE</h3>
          </button>
        </div>
      </div>
    );
  };
  return (
    <main className="planet">
      {props.device == "mobile" ? <TopicNav /> : null}
      <div className="container m2">
        <div className="p-main">
          <div className="pm-img">
            <Image topic={topic} device={props.device} planet={props.planet} />
          </div>
          <div className="pm-topic">
            <div className="pmt-content">
              <h1 className="m1">{props.planet.name.toUpperCase()}</h1>
              <p className="pmtc-desc m1">
                {props.planet[TOPICS_CONTENT[topic]].content}
              </p>
              <p className="pmtc-source m1">
                <span>Source: </span>
                <a href={props.planet[TOPICS_CONTENT[topic]].source}>
                  Wikipedia <img src="/assets/icon-source.svg" />
                </a>
              </p>
            </div>
            {props.device != "mobile" ? <TopicNav /> : null}
          </div>
        </div>
        <Stat
          device={props.device}
          rotation={props.planet.rotation}
          revolution={props.planet.revolution}
          radius={props.planet.radius}
          temp={props.planet.temperature}
        />
      </div>
    </main>
  );
}

function Image(props) {
  if (props.topic == 2) {
    return (
      <div className="img">
        <div className="i-container">
          <img className="i-main" src={props.planet.images[TOPICS_IMAGE[0]]} />
          <img
            className="i-geology"
            src={props.planet.images[TOPICS_IMAGE[props.topic]]}
          />
        </div>
      </div>
    );
  }
  return (
    <div className="img">
      <div className="i-container">
        <img
          className="i-main"
          src={props.planet.images[TOPICS_IMAGE[props.topic]]}
        />
      </div>
    </div>
  );
}

function Stat(props) {
  const Entry = (props) => {
    return (
      <div className="s-entry m025">
        <h4 className="m0">{props.name.toUpperCase()}</h4>
        <h2 className="m025">{props.stat.toUpperCase()}</h2>
      </div>
    );
  };
  return (
    <div className="stat">
      <Entry name="rotation time" stat={props.rotation} />
      <Entry name="revolution time" stat={props.revolution} />
      <Entry name="radius" stat={props.radius} />
      <Entry name="average temp." stat={props.temp} />
    </div>
  );
}
