import AuthLayOut from "../../components/LayOut/AuthLayout"
import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext, useState } from "react"
import { Form, Button } from "react-bootstrap"
import { Link, Redirect } from "react-router-dom"
import api from "../../api/api"
import { AuthContext } from "../../App"

function Login() {
    const { login, user } = useContext(AuthContext)
    console.log(user)
    const [form, setForm] = useState({ email: "", password: "", checked: "" })

    if (user) return (
        <Redirect to="/"></Redirect>
    )
    const onChangeCheckbox = (event) => {
        const label = event.target.nextSibling.textContent
        setForm({
            ...form,
            checked: label,
        })
    }
    const onChangeForm = (event) => {
        const { name, value } = event.target
        setForm({
            ...form,
            [name]: value,
        })
    }

    const onSubmitForm = async (event) => {
        event.preventDefault()
        console.log(form)
        let res
        if (form.checked == "Employee") {
            res = await api({
                url: "/employee/signin",
                method: "POST",
                data: form
            })
        }
        else {
            res = await api({
                url: "/employer/signin",
                method: "POST",
                data: form
            })
        }
        if (res.success) {
            login(res.data)
        }
    }

    return (
        <AuthLayOut>
            <div className="container" style={{ "flex-direction": "row" }} >
                <Form className="Login" onSubmit={onSubmitForm}>
                    <Form.Text className="heading">
                        Login and find your Job
                </Form.Text>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter your email" name="email"
                            value={form.email} onChange={onChangeForm} />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" name="password"
                            value={form.password} onChange={onChangeForm} />
                    </Form.Group>
                    <div className="role-checkbox" style={{ display: "flex", "justify-content": "space-between" }}>
                        <Form.Group controlId="formBasicCheckbox" onChange={onChangeCheckbox}>
                            <Form.Check type="radio" label="Employee" name="role" />
                        </Form.Group>
                        <Form.Group controlId="formBasicCheckbox" onChange={onChangeCheckbox}>
                            <Form.Check type="radio" label="Employeer" name="role" />
                        </Form.Group>
                    </div>
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