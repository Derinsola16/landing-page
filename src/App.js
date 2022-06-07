import Layout from "./components/Layout";
import Landing from "./view/Landing";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
function App() {
  return (
    <BrowserRouter>
      <div>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Landing />} />
            <Route exact path="/home" element={<Home />} />
          </Routes>
        </Layout>
      </div>
    </BrowserRouter>
  );
}

export default App;
