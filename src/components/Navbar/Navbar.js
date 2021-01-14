import { Navbar, Nav, NavDropdown } from "react-bootstrap"
import { useContext } from "react"
import { Link } from "react-router-dom"
import "./Navbar.css"
import {AuthContext} from "../../App"
function Navbars() {
    const { user } = useContext(AuthContext)
    return (
        <Navbar bg="dark" expand="lg" variant="dark" style ={{ "padding-left": "10%", "padding-right": "10%" }} >
            <Navbar.Brand className="white"><Nav.Link><Link style ={{color:"#ffffff"}} to="/"> ITViec</Link></Nav.Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link className="white"><Link style ={{color:"#ffffff"}} to="/">Home</Link></Nav.Link>
                    <NavDropdown title="Top Companies" id="basic-nav-dropdown" className="white">
                        <NavDropdown.Item href="#action/3.1" >Vietnam Best IT Companies 2020</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2" >Company Reviews</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Best Job" id="basic-nav-dropdown" className="white">
                        <NavDropdown.Item href="#action/3.1" >My Account</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2" >Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3" >Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4" >Separated link</NavDropdown.Item>
                    </NavDropdown>
                    {
                        !user && (
                            <>
                                <Nav.Link className= "user">
                                    <Link style ={{color:"#ffffff"}} to="/login"> Login</Link>
                                </Nav.Link>
                            </>
                        )
                    }
                    {
                        user && (
                            <>
                                <NavDropdown title={user.email} id="basic-nav-dropdown" className="white user">
                                    <NavDropdown.Item href="#action/3.1" >My Account</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2" >Applied Jobs</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3" >Something</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4" >Sign Out</NavDropdown.Item>
                                </NavDropdown>
                            </>
                        )
                    }

                </Nav>

            </Navbar.Collapse>
        </Navbar>
    )
}
export default Navbars