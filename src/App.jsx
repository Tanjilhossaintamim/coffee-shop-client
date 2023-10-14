import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="font-rancho">
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
