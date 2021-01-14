import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from "react-router-dom"
import Home from "./pages/Home/Home"
import Login from "./pages/Auth/Login"
import Register from "./pages/Auth/Register"
import { useState, createContext, useEffect } from "react"
import DetailCompany from './pages/User/DetailCompany';
import DetailEmployee from './pages/User/DetailEmployee';
import DetailJob from './pages/Job/DetailJob';
import api from "./api/api"
export const AuthContext = createContext()

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true)


  const login = ({user,token}) => {
    localStorage.setItem("token", token)
    setUser(user)
  }
  const logout = () => {
    localStorage.clear();
    setUser(null)
  }
  const verifyAuth = async () => {
    try {
      const res = await api({
        url: "employee/verify",
        method :"GET"
      })
      if (res.success) {
        console.log(res)
        setUser(res.data);
        setLoading(false);
      }
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.log('error', err);
    }
  }
  useEffect(() => {
    const token = localStorage.getItem("token")
    if (token) {
      verifyAuth()
    }
    else {
      setLoading(false);
      console.log("Khong co token")
    }
  },[]);

  if (loading) return <div>Loading...</div>
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
          <Route path="/employee/" exact>
            <DetailEmployee></DetailEmployee>
          </Route>
          <Route path="/job/" exact>
            <DetailJob></DetailJob>
          </Route>
        </Switch>
      </div>
    </AuthContext.Provider>
  )
}

export default App;
