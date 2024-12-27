import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Layout from "./components/Layout/Layout";
import Header from "./components/Header/Header";
import Stacks from "./pages/Stacks/Stacks";
import Login from "./pages/Login/Login";
import Registration from "./pages/Registration/Registration";
import CreateStack from "./pages/CreateStack/CreateStack";

function App() {
  return (
    <>
      <Header />
      <Layout>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/stacks" element={<Stacks />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/create-stack" element={<CreateStack />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
