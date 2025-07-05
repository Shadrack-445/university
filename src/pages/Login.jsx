import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuthContext } from "../AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [role, setRole] = useState("Student")
  
  const navigate = useNavigate();
  const { login } = useAuthContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      await login(email, password);

      if (role === "Student") {
        navigate("/Application");
      } else if (role === "University") {
        navigate("/University");
      } else {
        alert("Choose your role!")
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
    <br />
    <br />
    <br />
    <div style={{background:"beige", borderRadius:30}}>
      <h2>Login</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                required
              >
                <option value="Select Role">Select Role</option>
                <option value="Student">Student</option>
                <option value="University">University</option>
              </select>
        <button type="submit">Login</button>
      </form>
      <Link to="/Register">Don't have an account? Register</Link>
    </div>
    </>
  );
};

export default Login;
