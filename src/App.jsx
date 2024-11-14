import Home from "./pages/Home";
import Destinations from "./pages/Destinations";
import DestinationDetails from "./pages/DestinationDetails"; // Import DestinationDetails
import Navbar from "../src/components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <main className="w-full min-h-screen bg-neutral-100">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/destinations" element={<Destinations />}></Route>
          <Route path="/destinations/:id" element={<DestinationDetails />}></Route> {/* Add dynamic route */}
        </Routes>
      </Router>
    </main>
  );
};

export default App;
