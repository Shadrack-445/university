import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"



const Register = ({register}) => {
const [email,setEmail] = useState("")
const [password,setPassword] = useState("")

const navigate = useNavigate();

const handlesubmit = (e) => {
    e.preventDefault();
    register(email,password);
    navigate("/Application");
}

    return(
        <div>
            <h2>Register</h2>
            <form onSubmit={handlesubmit}>
                <input type="email" 
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required/>
                <input type="password"
                placeholder="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required/>
                <button type="submit">Register</button>
            
            </form>
            <Link to="/Login">Already have an account? Go to login</Link>  
        </div>
    )
}
export default Register