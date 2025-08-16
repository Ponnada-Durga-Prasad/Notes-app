import { Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Sidebar from "./components/Sidebar";
import Archive from "./components/Archive";
import Bin from "./components/Bin";
import Important from "./components/Important";
function App() {
  return (
    <>
      <Navbar />
      <main className="flex gap-3">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/archive" element={<Archive />} />
          <Route path="/bin" element={<Bin />} />
          <Route path="/important" element={<Important />} />
        </Routes>
      </main>
      {/* <Link to="/">Home</Link> */}
    </>
  );
}

export default App;
