import { useState } from "react";
import { Link } from "react-router-dom";

function Application() {
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
        <h2>Thank you for applying!</h2>
        <p>We have received your application.</p>
      </div>
    );
  }

   if (!user) {
    return (
        <>
      <h2>You need to Login or Register</h2>
      <Link to="/Login">Login</Link>
      <Link to="/Register">Register</Link>

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
              <option value="">Select a program</option>
              <option value="Computer Science">Computer Science</option>
              <option value="Business Administration">Business Administration</option>
              <option value="Engineering">Engineering</option>
              <option value="Psychology">Psychology</option>
            </select>
          </label>
        </div>
        <button type="submit">Submit Application</button>
      </form>
    </div>
  );
}

export default Application


