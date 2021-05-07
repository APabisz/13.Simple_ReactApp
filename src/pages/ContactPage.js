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
          <h3>Napisz do nas</h3>
          <textarea
            placeholder='Wpisz wiadomość...'
            value={this.state.value}
            onChange={this.handleTextareaChange}
          ></textarea>
          <button>Wyślij</button>
        </form>
        <Prompt
          when={this.state.value.length > 0 ? true : false}
          message='Masz niewypełniony formularz. Czy na pewno chcesz opuścić tę stronę?'
        />
      </div>
    )
  }
}

export default ContactPage
