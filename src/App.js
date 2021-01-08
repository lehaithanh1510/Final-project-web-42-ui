import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from "react-router-dom"
import Home from "./pages/Home/Home"
import Login from "./pages/Auth/Login"
import Register from "./pages/Auth/Register"
import { useState, createContext } from "react"
import DetailCompany from './pages/User/DetailCompany';
export const AuthContext = createContext()

function App() {
  const login = ({user,token}) => {
    localStorage.setItem("token", token)
    setUser(user)
  }
  const logout = () => {
    localStorage.removeItem("token")
    setUser(null)
  }
  const [user, setUser] = useState(null)
  return (
    <AuthContext.Provider value = {{user, login, logout}}>
      <div className="App">
        <Switch>
          <Route path="/" exact>
            <Home></Home>
          </Route>
          <Route path="/login" exact>
            <Login></Login>
          </Route>
          <Route path="/register" exact>
            <Register></Register>
          </Route>
          <Route path="/company/" exact>
            <DetailCompany></DetailCompany>
          </Route>
        </Switch>
      </div>
    </AuthContext.Provider>
  )
}

export default App;
