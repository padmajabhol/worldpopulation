import "./App.css";
import countries from "./data/countries";
import Top10Population from './CountryPop';
import WorldPopulation from "./WorldPop";

const Header = () => (
  <div className="App-header">
    <h1>WORLD POPULATION</h1>
    <sub>Ten most populated countries</sub>
    <Top10Population countries={countries} />
  </div>
);

const App = () => (
  <>
    <Header />
  </>
);

export default App;
