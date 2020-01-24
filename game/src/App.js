import React from 'react'
import './App.css'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      baseURL: 'http://jservice.io/api/random',
      category: '',
      points: '',
      answer: ''
    }
    this.getQuestion = this.getCategory.bind(this)
    this.increasePoints = this.increasePoints.bind(this)
    this.decreasePoints = this.decreasePoints.bind(this)
    this.resetPoints = this.resetPoints.bind(this)
  }
  getQuestion(){
    fetch('http://jservice.io/api/random')
  .then(response => {
    return response.json()
  }).then(json => this.setState({
    category: json.category,
    points: json.points,
    answer: json.answer
  }),
    error => console.log(error)
  )
}

render () {
  return(
    <>
    <header>
    </header>
    <body>
    <h1>Welcome to Jeopardy!</h1>
    <h2>Score: {this.state.points}</h2>
      <button onclick={this.increasePoints}type='button'>Decrease</button>
      <button onclick={this.decreasePoints}type='button'>Increase</button>
      <button onclick={this.resetPoints}type='button'>Reset</button>
    <div>
    <h1>Answer: {this.state.question}</h1>
    <button onclick={this.getQuestion}> </button>
    </div>
    </body>
    </>
  )
}
}
export default App
