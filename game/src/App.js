import React from 'react'
import './App.css'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      baseURL: 'http://jservice.io/api/random',
      score: '0',
      category: '',
      points: '',
      answer: ''
    }
    this.getQuestion = this.getQuestion.bind(this)
    // this.increasePoints = this.increasePoints.bind(this)
    // this.decreasePoints = this.decreasePoints.bind(this)
    // this.resetPoints = this.resetPoints.bind(this)
    // this.revealQuestion = this.revealQuestion.bind(this)
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
    <title></title>
    </header>
    <body>
    <h1>Welcome to Jeopardy!</h1>
    <h2>Score: {this.state.score}</h2>
      <button onclick={this.increasePoints}type='button'>Decrease</button>
      <button onclick={this.decreasePoints}type='button'>Increase</button>
      <button onclick={this.resetPoints}type='button'>Reset</button>
    <h2>Let's Play!</h2>
    <div>
      <button onclick={this.getQuestion}>Get Question</button>
      <h2>Category: {this.state.category}</h2>
      <h2>Points: {this.state.points}</h2>
      <h2>Answer: {this.state.answer}</h2>
      <button onclick={this.revealQuestion}>Click to Reveal Question</button>
    </div>
    </body>
    </>
    )
  }
}
export default App
