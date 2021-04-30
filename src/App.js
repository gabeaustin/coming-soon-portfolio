import "./App.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function App() {
  return (
    <div className="App">
      <div className="container col-md-12">
        <div className="mainPageDiv">
          <i className="fas fa-github"></i>
          <i className="fab fa-github"></i>
          <span className="orange">import</span>{" "}
          <span className="yellow">&#123;</span>
          <span className="white">ComingSoon</span>
          <span className="yellow">&#125;</span>{" "}
          <span className="orange">from</span>{" "}
          <span className="green">"gabeAustin"</span>
          <span className="grey">;</span>
        </div>
      </div>
      <footer className="mainPageFooter p-3 mt-auto fixed-bottom">
        <a href="https://www.linkedin.com/in/gabrielaustin/" target="_blank">
          <FaLinkedin className="white mainPageFooterIcons mx-4" />
        </a>
        <a href="https://github.com/gabeaustin" target="_blank">
          <FaGithub className="white mainPageFooterIcons mx-4" />
        </a>
      </footer>
    </div>
  );
}

export default App;
