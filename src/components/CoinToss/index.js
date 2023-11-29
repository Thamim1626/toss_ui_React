import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {
    head: 0,
    tail: 0,
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
    total: 0,
  }

  onClick = () => {
    const randomtoss = Math.floor(Math.random() * 2)
    if (randomtoss === 0) {
      this.setState(prevState => ({
        head: prevState.head + 1,
        total: prevState.total + 1,
      }))
      this.setState({
        imgUrl: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
      })
    } else {
      this.setState(prevState => ({
        tail: prevState.head + 1,
        total: prevState.total + 1,
      }))
      this.setState({
        imgUrl: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
      })
    }
  }

  render() {
    const {head, tail, imgUrl, total} = this.state
    return (
      <div className="container">
        <div className="card">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="des">Heads (or) Tails</p>
          <img src={imgUrl} alt="toss result" className="coin-img" />
          <button className="toss-button" onClick={this.onClick} type="button">
            Toss Coin
          </button>
          <div className="result">
            <p className="result">Total: {total}</p>
            <p className="result">heads: {head}</p>
            <p className="result">Tails: {tail}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
