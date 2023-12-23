import Navigation from "./components/Navigation"
import Main from "./components/Main"
import AboutMe from "./components/AboutMe"
import Social from "./components/Social"
import Content from "./components/Content"

export default function Home() {
  return (
   <div className="bg-[#000D2E] min-h-[100vh]">
    <Navigation />
    <Main />
    <AboutMe />
    <Social />
    <Content />
   </div>
  )
}
