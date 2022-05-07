import BackgroundVideo from "./video/video.mp4";
function Header({setTryingToLogin}) {
  const isTryingtoLogin = () =>{
    setTryingToLogin(prevTryingToLogin => prevTryingToLogin = true)
  }
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

        <button className="btn" style={{ cursor: "pointer" }} onClick = {()=> isTryingtoLogin()} >
          Log in
        </button>
      </div>

      <div className="headerbg"></div>
    </header>
  );
}
export default Header;
