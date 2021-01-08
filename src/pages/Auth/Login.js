import AuthLayOut from "../../components/LayOut/AuthLayout"
import 'bootstrap/dist/css/bootstrap.min.css';
import {useContext, useState} from "react"
import { Form, Button } from "react-bootstrap"
import { Link, Redirect } from "react-router-dom"
import Navbars from "../../components/Navbar/Navbar"
import api from "../../api/api"
import {AuthContext} from "../../App"

function Login() {
    const {login, user} = useContext(AuthContext)
    const [form, setForm] = useState({email:"", password :""})

    if(user) return (
        <Redirect to="/"></Redirect>
    )
    
    const onChangeForm = (event) => {
        const { name, value} = event.target 
        setForm ({
            ...form ,
            [name] :value,
        })
    }
    const onSubmitForm = async(event) => {
        event.preventDefault()
        const res = await api({
            url : "/employee/signin",
            method : "POST",
            data : form
        })
        console.log(res)
        if (res.success) {
            login(res.data)
        }
    }

    return (
        <AuthLayOut>
            <Navbars className="mb-4"></Navbars>
            <div className="container" >
                <Form className="Login" onSubmit={onSubmitForm}>
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