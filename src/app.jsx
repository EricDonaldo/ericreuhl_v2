import { Routes,Route } from "react-router";
import Navbar from "./components/navbar";
import Home from "./routes/home";

export default function App() {
  return (
    <>
        <div className='min-h-screen flex flex-col bg-gray-50'>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />}/>
            </Routes>
        </div>
    </>
  );
}
