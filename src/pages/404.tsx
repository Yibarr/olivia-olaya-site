import * as React from "react"
import { Link, HeadFC, PageProps } from "gatsby"
import Navbar from "../components/navbar"
import "./index.css"

const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}

const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <main className="not-found-container">
        <h1 style={headingStyles}>Page not found</h1>
        <p style={paragraphStyles}>
          Sorry 😔, we couldn’t find what you were looking for.
          <Link to="/">Go home</Link>.
        </p>
    </main>
  )
}

export default NotFoundPage

export const Head: HeadFC = () => <title>Not found</title>
