import Home from "./pages/Home";
import Destinations from "./pages/Destinations";
import DestinationDetail from "./pages/DestinationDetail"; // Import DestinationDetails
import Navbar from "../src/components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Authentication from "./pages/Authentication";

const App = () => {
  return (
    <main className="w-full min-h-screen bg-neutral-100">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/destinations" element={<Destinations />}></Route>
          <Route
            path="/destinations/:id"
            element={<DestinationDetail />}
          ></Route>
          <Route path="/authentication" element={<Authentication />}></Route>
        </Routes>
      </Router>
    </main>
  );
};

export default App;
