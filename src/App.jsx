import Home from "./Pages/Home"
import Posts from "./Pages/Post"
import Cont from "./Pages/contact"
import {BrowserRouter,Routes, Route} from 'react-router-dom'

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="posts" element={<Posts/>} />
          <Route path="contact" element={<Cont/>} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
