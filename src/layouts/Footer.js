import React from "react"
import { Route } from "react-router-dom"
import "../styles/Footer.css"

const Footer = () => {
  return (
    <div className='footer'>
      <h2>Footer</h2>
      <Route
        path='/'
        exact
        render={(props) => (
          <p>
            You're on <span>home</span> page
          </p>
        )}
      />
      <Route
        path='/:page'
        exact
        render={(props) => {
          return (
            <p>
              You're on <span>{props.match.params.page}</span> page
            </p>
          )
        }}
      />

      <Route
        path='/:page/:idProduct'
        exact
        render={(props) => {
          return (
            <p>
              You're on{" "}
              <span>{`${props.match.params.page}/${props.match.params.idProduct}`}</span>{" "}
              page
            </p>
          )
        }}
      />
    </div>
  )
}

export default Footer
