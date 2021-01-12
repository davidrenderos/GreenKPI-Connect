import "./App.css";

function App() {
  return (
    <div className="navbar">
      <a href="index.html">
        <img src="logo-name.png" alt="Logo" className="logo"></img>
      </a>
      <div className="nav">
        <ul>
          <li>
            <a href="teams.html">Teams</a>
          </li>
          <li>
            <a href="messages.html">Messages</a>
          </li>
          <li>
            <a href="live.html">Live</a>
          </li>
        </ul>
      </div>
      <a href="index.html">
        <img src="profile.jpg" alt="profile" className="profile"></img>
      </a>
    </div>
  );
}

export default App;
