import * as React from "react"
import { RefObject, useRef } from "react"
import type { HeadFC, PageProps } from "gatsby"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import ScrollToTop from "../components/scrollToTop"
import Landing from "../components/sections/Landing"
import AboutMe from "../components/sections/AboutMe"
import Portfolio from "../components/sections/Portfolio"
import Contact from "../components/sections/Contact/Contact"
import SectionsStrings from "../utils/enums"
import "./index.css"

const IndexPage: React.FC<PageProps> = () => {
  const portfolio = useRef<HTMLDivElement>(null);
  const aboutMe = useRef<HTMLDivElement>(null);
  const contact = useRef<HTMLDivElement>(null);

  const scrollToSection = (element: SectionsStrings) => {
    let elementRef: RefObject<HTMLDivElement> | null

    switch (element) {
      case "PORTFOLIO":
        elementRef = portfolio
        break;
      case "ABOUT":
        elementRef = aboutMe
        break;
      case "CONTACT":
        elementRef = contact
        break;
      default:
        elementRef = null
        break;
    }
  
    window.scrollTo({
      top: elementRef?.current?.offsetTop ?? 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <Navbar scrollToSection={scrollToSection}/>
      <main className="site-container">
        <ScrollToTop/>
        <Landing/>
        <div ref={portfolio}>
          <Portfolio/>
        </div>
        <div ref={aboutMe}>
          <AboutMe/>
        </div>
        <div ref={contact}>
          <Contact/>
        </div>
        <Footer/>
      </main>
    </div>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Olivia Olaya</title>
