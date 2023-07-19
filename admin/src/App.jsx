import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Sidebar />
        <div className="other">other pages</div>
      </div>
    </>
  );
}

export default App;
