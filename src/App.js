import React, { Component } from 'react'

/// Modifica el componente para que se puedan agregar tareas

class App extends Component {
  constructor () {
    super()
    this.state = {
      task: '',
      tasks: ['Sacar la ropa', 'Hacer la cama', 'Leer un rato']
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleText = this.handleText.bind(this)
  }
  render() {
    return (
      <div className='wrapper'>
        <div className='list'>
          <h3>Por hacer:</h3>
          <ul className='todo'>
            {this.state.tasks.map(element => {
              return <li key={element}>{element}</li>
            })}
          </ul>
          <form
            onSubmit={this.handleSubmit}
          >
            <input
              type='text'
              id='new-task'
              onChange={this.handleText}
              value={this.state.task}
              placeholder='Ingresa una tarea y oprime Enter'
              required
            />
          </form>
        </div>
      </div>
    )
  }
  handleText (event) {
    this.setState({task: event.target.value})
  }
  handleSubmit (event) {
    event.preventDefault()
    if (this.state.task !== '') {
      this.setState({
        tasks: this.state.tasks.concat(this.state.task),
        task: ''
      })
    }
  }
}

export default App
