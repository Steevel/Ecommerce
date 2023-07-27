import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const Cancel = () => {
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
        <h4>Unable to place order. Please try again!</h4>
        <Link to="/">
          <button style={{ padding: 10, marginTop: 20 }}>Go to Homepage</button>
        </Link>
      </div>
    </>
  );
};

export default Cancel;
