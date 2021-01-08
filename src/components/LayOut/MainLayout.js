import "./mainlayout.css"

function MainLayOut ({children}) {
    return (
        <div className= "MainLayOut">
            <div className = "container">
               {children}
            </div>
            
        </div>
    )
}
export default MainLayOut