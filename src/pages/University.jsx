import { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

const University = () => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSubmissions = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "submissions"));
        const subs = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setApplications(subs);
      } catch (error) {
        console.error("Error fetching submissions", error);
        alert("Something went wrong");
      } 
        setLoading(false);
    
    };

    fetchSubmissions();
  }, []);

  if (loading) {
    return <p>Loading submissions...</p>;
  }

  return (
    <div>
      <h2 style={{textDecoration:"underline", marginTop:30}}>University Dashboard</h2>
      <h3 style={{textDecoration:"underline"}}>Student Applications</h3>
      {applications.length === 0 ? (
        <p>No applications submitted yet.</p>
      ) : (
        <ul>
          {applications.map((sub) => (
            <li key={sub.id}>
              <strong>{sub.fullName}</strong> <br />
              Email: {sub.email} <br />
              Program: {sub.program}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default University;
