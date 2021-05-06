import React from "react"
import { Link } from 'gatsby'

export default function About() {
  return (
    <div style={{ color: `teal` }}>
      <h1>About VIM Game</h1>
      <p>This game was created out of spite. GLHF!</p>
      <Link to="/">Go back to the homepage</Link>
    </div>
  )
}