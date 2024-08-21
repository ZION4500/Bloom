import Header from "../components/Header"
import Team from "../components/team"
import Footer from "../components/Footer"

export default function About() {
  return (
    <>
    <Header />
    <Team />
    <div className = "md:hidden block">
      <Footer></Footer>
    </div>
    </>
  )
}

