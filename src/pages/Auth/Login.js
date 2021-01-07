import AuthLayOut from "../../components/LayOut/AuthLayout"
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from "react"
import { Form, Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import Navbars from "../../components/Navbar/Navbar"

function Login() {
    const [form, setForm] = useState({email: "", password :""})
    
    const onChangeForm = (event) => {
        const { name, value} = event.target 
        setForm ({
            ...form ,
            [name] :value,
        })
    }
    const onSubmitForm = () => {
        

    }

    return (
        <AuthLayOut>
            <Navbars className="mb-4"></Navbars>
            <div className="container" >
                <Form className="Login">
                    <Form.Text className="heading">
                        Login and find your Job
                </Form.Text>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter your email" name="email" value= {form.email} onChange={onChangeForm}/>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" name="password" value= {form.password} onChange={onChangeForm}/>
                    </Form.Group>
                    <div className="button-wrapper">
                        <Button className="button" variant="primary" type="submit" block>
                            Submit
                        </Button>
                    </div>
                    <div className="redirect-box mt-4">
                        Don't have account ? <Link to="/register"> Register </Link>
                    </div>
                </Form>
            </div>

        </AuthLayOut>
    )
}
export default Login