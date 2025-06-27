import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"



const Login = ({login}) => {
const [email,setEmail] = useState("")
const [password,setPassword] = useState("")
const [error,setError] = useState("")
const navigate = useNavigate();

const handlesubmit = (e) => {
    e.preventDefault();
    const success = login(email,password);
    if(success){
        setError("")
        navigate("/Application");
    }else{
        setError("Invalid email or password")
    }
    
}

    return(
        <div>
            <h2>Login</h2>
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
                <button type="submit">Login</button>
            
            </form>
            <Link to="/Register">Don't have an account? Go to Register</Link>  
        </div>
    )
}
export default Login