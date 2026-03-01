import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {

  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/");
  };

  return (
    <div style={{ padding: 40 }}>
      <h1>Dashboard</h1>
      <p>Insurance modules will appear here.</p>

      <button onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}
