import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from "react-router-dom"
import Home from "./pages/Home/Home"
import Login from "./pages/Auth/Login"
function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <Home></Home>
        </Route>
        <Route path="/login" exact>
          <Login></Login>
        </Route> 
        <Route path="/register" exact> </Route>
      </Switch>

    </div>
  )
}

export default App;
