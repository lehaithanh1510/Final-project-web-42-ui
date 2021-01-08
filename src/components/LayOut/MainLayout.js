import "./mainlayout.css"
import Navbars from "../../components/Navbar/Navbar"
function MainLayOut ({children}) {
    return (
        <div className= "MainLayOut">
            <Navbars></Navbars>
            <div className = "main-content">
                <div className ="container"> 
                   {children}
                </div>
              
            </div>
            
        </div>
    )
}
export default MainLayOut