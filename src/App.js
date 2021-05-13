import './App.css';
import { Router, useHistory } from "react-router-dom";
import Routes from "./Routes";
function App() {
  const history =useHistory();
  return (
    <div className="App">
        <Router history={history}>
          <Routes />
        </Router>
   
    </div>
  );
}

export default App;
