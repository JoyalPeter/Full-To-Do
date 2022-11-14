import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Additem from "./components/additem/AddItem";
import ProtectedRoute from "./service/Authentication/Authentication";
import SigninForm from "./pages/SignIn/SigninForm";
import NotFound from './pages/NotFound/NotFound';
import SignUp from './pages/SignUp/SignUp';

function App() {

  localStorage.setItem("SuperUser",1234)
  localStorage.setItem("Carestack",1234)

  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SigninForm/>} />
            <Route path="/signup" element={<SignUp/>} />
            <Route path="/AddItem/:User" element={<ProtectedRoute ><Additem/></ProtectedRoute>} />
            <Route path="/*" element={<NotFound/>} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
