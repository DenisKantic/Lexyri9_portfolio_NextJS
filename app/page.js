import Navigation from "./components/Navigation"
import Main from "./components/Main"
import AboutMe from "./components/AboutMe"

export default function Home() {
  return (
   <div className="bg-[#000D2E] min-h-[100vh]">
    <Navigation />
    <Main />
    <AboutMe />
   </div>
  )
}
