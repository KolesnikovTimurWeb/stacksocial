import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Layout from "./components/Layout/Layout";
import Header from "./components/Header/Header";
import Stacks from "./pages/Stacks/Stacks";

function App() {
  return (
    <>
      <Header />
      <Layout>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/stacks" element={<Stacks />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
