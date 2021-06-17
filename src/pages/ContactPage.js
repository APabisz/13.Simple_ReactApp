import React from "react"
import "../styles/ContactPage.css"
import { Prompt } from "react-router-dom"

class ContactPage extends React.Component {
  state = {
    value: "",
  }

  handleSubmitButton = (e) => {
    e.preventDefault()
    this.setState({
      value: "",
    })
  }
  handleTextareaChange = (e) => {
    this.setState({
      value: e.target.value,
    })
  }

  render() {
    return (
      <div className='contact'>
        <form onSubmit={this.handleSubmitButton}>
          <h3>Write to us</h3>
          <textarea
            placeholder='Your message...'
            value={this.state.value}
            onChange={this.handleTextareaChange}
          ></textarea>
          <button>Send</button>
        </form>
        <Prompt
          when={this.state.value.length > 0 ? true : false}
          message="You haven't sent your form. Are you sure you want to leave this page? Your message will be lost."
        />
      </div>
    )
  }
}

export default ContactPage
