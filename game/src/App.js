import React from 'react'
import Question from './Components/Question.js'

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
    this.increasePoints = this.increasePoints.bind(this)
    this.decreasePoints = this.decreasePoints.bind(this)
    this.resetPoints = this.resetPoints.bind(this)
    this.revealQuestion = this.revealQuestion.bind(this)
  }
  revealQuestion(){
    fetch('http://jservice.io/api/random')
    .then(response => {
      return response.json()
    }).then(json => this.setState({
      Question: json.Question
    }),
    error => console.log(error)
  )
}

increasePoints(){
  this.setState({
    score: this.state.score +1
  })
}

decreasePoints(){
  this.setState({
    score: this.state.score -1
  })
}

resetPoints(){
  this.setState({
    score: 0
  })
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
    <div>
      <button onclick={this.increasePoints}type='button'>Decrease</button>
      <button onclick={this.decreasePoints}type='button'>Increase</button>
      <button onclick={this.resetPoints}type='button'>Reset</button>
      </div>
    <h2>Let's Play!</h2>
    <div>
      <button onclick={this.revealQuestion}>Get Question</button>
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
