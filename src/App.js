import './App.css';
import { Switch, Route } from "react-router-dom"
import Home from "./pages/Home/Home"
function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <Home></Home>
        </Route>
      </Switch>

    </div>
  )
}

export default App;
