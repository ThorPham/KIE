import Home from "./pages/Home.js";
import Upload from "./pages/Upload.js";
import { BrowserRouter as Router, Routes, Route, HashRouter } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <HashRouter basename="/">
        <Routes>
          <Route path="/" element={<Home/>}>
          </Route>
          <Route path="/upload" element={<Upload/>}>
          </Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
