import AuthLayOut from "../../components/LayOut/AuthLayout"
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState, useContext} from "react"
import { Form, Button } from "react-bootstrap"
import { Link, Redirect } from "react-router-dom"
import api from "../../api/api"
import {AuthContext} from "../../App"

function Register() {
    const [form, setForm] = useState({email:"", password :""})
    const {login, user} = useContext(AuthContext)

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
    const onChangeCheckbox = (event) => {
        const label = event.target.nextSibling.textContent
        setForm({
            ...form,
            checked: label,
        })
    }
    const onSubmitForm = async(event) => {
        event.preventDefault()
        console.log(form)
        let res 
        if (form.checked == "Employee") {
             res = await api({
                url : "/employee/signup",
                method : "POST",
                data : form
            })
        }
        else {
             res = await api({
                url : "/employer/signup",
                method : "POST",
                data : form
            })
        }
        console.log(res)
        if (res.success) {
            login(res.data)
        }
    }

    return (
        <AuthLayOut>
            <div className="container"  style={{"flex-direction" : "row" }} >
                <Form className="Register" onSubmit={onSubmitForm}>
                    <Form.Text className="heading">
                        Register and find your Job
                </Form.Text>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter your email" name="email" 
                        value= {form.email} onChange={onChangeForm}/>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" name="password" 
                        value= {form.password} onChange={onChangeForm}/>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" placeholder="Confirm password" name="confirmPassword" 
                        value= {form.confirmPassword} onChange={onChangeForm}/>
                    </Form.Group>
                    <div className ="role-checkbox" style ={{display:"flex", "justify-content": "space-between"}}>
                        <Form.Group controlId="formBasicCheckbox" onChange= {onChangeCheckbox}>
                            <Form.Check type="radio" label="Employee" name ="role" />
                        </Form.Group>
                        <Form.Group controlId="formBasicCheckbox" onChange= {onChangeCheckbox}>
                            <Form.Check type="radio" label="Employeer" name ="role" />
                        </Form.Group>
                    </div>
                    <div className="button-wrapper">
                        <Button className="button" variant="primary" type="submit" block>
                            Submit
                        </Button>
                    </div>
                    <div className="redirect-box mt-4">
                        Already have an account ? <Link to="/login"> Login </Link>
                    </div>
                </Form>
            </div>

        </AuthLayOut>
    )
}
export default Register