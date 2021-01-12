import "./App.css";

function App() {
  return (
    <div className="NavBar">
      <div>
        <a href="profile.html">
          <img className="Logo" src="logo-name.png" alt="GreenKPI logo"></img>
        </a>
      </div>
      <ul>
        <li>
          <a href="teams.html">Teams</a>
        </li>
        <li>
          <a href="live.html">Live</a>
        </li>
        <li>
          <a href="messages.html">Messages</a>
        </li>
      </ul>
      <div>
        <a href="profile.html">
          <img className="profilePic" src="profile.jpg" alt="profile"></img>
        </a>
      </div>
    </div>
  );
}

export default App;
