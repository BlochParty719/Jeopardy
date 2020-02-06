import React from 'react'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      baseURL: 'http://jservice.io/api/random',
      category: '',
      points: '',
      answer: '',
      question: '',
      score: '0',
      show: false
    }
    this.increasePoints = this.increasePoints.bind(this)
    this.decreasePoints = this.decreasePoints.bind(this)
    this.toggleAnswer = this.toggleAnswer.bind(this)
    this.revealQuestion = this.revealQuestion.bind(this)
  }

  increasePoints(){
    this.setState({
      score: this.state.score + this.state.points
    })
  }

  decreasePoints(){
    this.setState({
      score: this.state.score - this.state.points
    })
  }

  toggleAnswer(){
    this.setState({
      show: !this.state.answer
    })
  }

  revealQuestion(){
    fetch('http://jservice.io/api/random')
    .then(response => {
      return response.json()
    }).then(json => this.setState({
      Question: json[0].question,
      Answer: json[0].answer,
      Category: json[0].category,
      Points: json[0].points
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
    <button onclick={this.toggleAnswer}>Click to Reveal Question</button>
    {(this.state.answer)
      ? <h2><answer answer={this.state.answer}/></h2>
      :null
    }
    </div>
    </body>
    </>
  )
}
}
export default App
