import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import DevOps from "./pages/DevOps";
import WebDevelopment from "./pages/WebDevelopment";



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/DevOps" element={<DevOps />} />
        <Route path="/WebDevelopment" element={<WebDevelopment />} />
      </Routes>
    </div>
  );
}

export default App;
