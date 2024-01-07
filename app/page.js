import Navigation from "./components/Navigation"
import Main from "./components/Main"
import AboutMe from "./components/AboutMe"
import Social from "./components/Social"
import ShopPreview from "./components/ShopPreview"
import Contact from "./components/Contact"
import Footer from "./components/Footer"


export default function Home() {
  return (
    
   <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#000D2E] via-[#021d62] to-[#000D2E]
    min-h-[100vh] overflow-hidden scroll-smooth">

    <Navigation/>
    <Main />
    <AboutMe />
    <Social />
    <ShopPreview />
    <Contact />
    <Footer />
   </div>
  )
}
