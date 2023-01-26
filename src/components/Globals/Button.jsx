import React from "react"
import {Link} from "react-router-dom"

function Button() {

  return (
    <Link to={{ pathname: "https://www.google.com/" }}><a >Client</a></Link>
  )
}

export default Button