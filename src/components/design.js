function Sample() {
  return (
    <div className="design container planet">
      <h1>DONEC JUSTO EGET</h1>
      <h2>FELIS FACILISIS FERMENTUM</h2>
      <h3>ALIQUAM PORTTITOR MAURIS SIT AMET ORCI</h3>
      <h4>AENEAN DIGNISSIM PELLENTESQUE FELIS.</h4>
      <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus
        hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet
        vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin
        laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu
        nibh. Nullam mollis. Ut justo. Suspendisse potenti.Sed egestas, ante et
        vulputate volutpat, eros pede semper est, vitae luctus metus libero eu
        augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida
        id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper
        lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque
        euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu,
        dapibus eu, fermentum et, dapibus sed, urna. Morbi interdum mollis
        sapien. Sed ac risus. Phasellus lacinia, magna a ullamcorper laoreet,
        lectus arcu pulvinar risus, vitae facilisis libero dolor a purus. Sed
        vel lacus.
      </p>
      <Button number={1} text="BUTTON" active={false} />
    </div>
  );
}

function Button(props) {
  const className = props.className ? ` ${props.className}` : "";
  return (
    <button
      className={`button ${(props.active ? "b-on" : "b-off") + className}`}
      onClick={props.handler}
    >
      <h3 className="mr1">
        <span>0{props.number}</span>
        {props.text}
      </h3>
    </button>
  );
}

export { Sample, Button };
