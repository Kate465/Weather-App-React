import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <Weather />
      <p>
        Open source code by{" "}
        <a
          href="https://github.com/Kate465/Weather-App-React"
          target="_blank"
          rel="noreferrer"
        >
          Katego{" "}
        </a>
        from SheCodes
      </p>
    </div>
  );
}

export default App;
