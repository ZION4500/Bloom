import Home from "./Pages/Home"
import Posts from "./Pages/Post"
import Cont from "./Pages/contact"
import About from "./Pages/about"
import Error from "./Pages/404"
import Login from "./components/Login"
import Register from "./components/Register"
import Forgot from "./components/Forgot"
import UpdatePassword from "./components/UpdatePassword"
import ResetPassword from "./components/ResetPassword"
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/" element={<Home />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/contact" element={<Cont />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot" element={<Forgot />} />
            <Route path="/updatepassword" element={<UpdatePassword />} />
            <Route path="/resetpassword/:token" element={<ResetPassword />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
