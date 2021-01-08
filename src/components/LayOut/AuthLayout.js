import "./authlayout.css"
import Navbars from "../../components/Navbar/Navbar"

function AuthLayOut ({children}) {
    return (
        <div className= "AuthLayOut">
            <Navbars></Navbars>
            {children}
        </div>
    )
}
export default AuthLayOut