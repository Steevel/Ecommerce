import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const Success = () => {
  return (
    <>
      <Navbar />
      <div
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1>Success</h1>
        <Link to="/">
          <button style={{ padding: 10, marginTop: 20 }}>Go to Homepage</button>
        </Link>
      </div>
    </>
  );
};

export default Success;
