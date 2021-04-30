import "./App.css";
import { FaBeer } from "react-icons/fa";
// import Icons from "bootstrap-icons";

function App() {
  return (
    <div className="App">
      <div className="mainPageDivContainer container col-md-12">
        <div className="mainPageDiv m-auto">
          <i className="fas fa-github"></i>
          <i className="fab fa-github"></i>
          <FaBeer />
          <span className="orange">import</span>{" "}
          <span className="yellow">&#123;</span>
          <span className="white">ComingSoon</span>
          <span className="yellow">&#125;</span>{" "}
          <span className="orange">from</span>{" "}
          <span className="green">"gabeAustin"</span>
          <span className="grey">;</span>
        </div>
        <footer className="mainPageFooter p-3 mt-auto fixed-bottom">
          See this code on{" "}
          <a href="https://github.com/gabeaustin" target="_blank">
            Github
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
