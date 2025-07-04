import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../AuthContext";

function Application() {
  const {user} = useAuthContext()
 
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    program: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.fullName ||
      !formData.email ||
      !formData.program
    ) {
      alert("Ensure to fill out all fields.");
      return;
    }else{
        console.log("Application submitted:", formData);
        setSubmitted(true);
    }

    
  };

  if (submitted) {
    return (
      <div>
        <h3>Thank you for applying!</h3>
        <p>We have received your application.</p>
      </div>
    );
  }

   if (!user) {
    return (
        <>
      <h2>You need to Login or Register</h2>
      <Link to="/login">Login</Link>
      <br />
      <Link to="/register">Register</Link>

    </>
    );
  }

  return (
    <div >
      <h2>University Application</h2>
      <form onSubmit={handleSubmit}>
        <div >
          <label>
            Full Name:
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Email Address:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Program of Study:
            <select
              name="program"
              value={formData.program}
              onChange={handleChange}
              required
            >
              <option value="Choose Course">Choose Course</option>
              <option value="Business">Business</option>
              <option value="Chemical Engineering">Chemical Engineering</option>
              <option value="Civil Engineering">Civil Engineering</option>
              <option value="Mechanical Engineering">Mechanical Engineering</option>
              <option value="Education">Education</option>
              <option value="Medicine">Medicine</option>
            </select>
          </label>
        </div>
        <button type="submit">Submit Application</button>
      </form>
    </div>
  );
}

export default Application


