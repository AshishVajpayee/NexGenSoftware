import BackgroundVideo from "./video/video.mp4";
function Header() {
  return (
    <header>
      <video loop autoPlay muted>
        <source src={BackgroundVideo} type="video/mp4" />
      </video>
      <h1>Think Different</h1>
      <div className="row">
        <button className="btn" style={{ cursor: "pointer" }}>
          Sign Up
        </button>

        <button className="btn" style={{ cursor: "pointer" }}>
          Log in
        </button>
      </div>

      <div className="headerbg"></div>
    </header>
  );
}
export default Header;
