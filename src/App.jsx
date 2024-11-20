
import Home from "../src/pages/Home";
import Destinations from "../src/pages/Destinations";
import DestinationDetails from "../src/pages/DestinationDetails"; // Import DestinationDetails

import Navbar from "../src/components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Authentication from "../src/pages/Authentication";
import Error404Page from "./pages/Error404Page";

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
            element={<DestinationDetails />}
          ></Route>
          <Route path="/authentication" element={<Authentication />}></Route>
          <Route path='/error404' element={<Error404Page />}></Route>
        </Routes>
      </Router>
    </main>
  );
};

export default App;
