import React, {Component} from 'react'
// 有状态组件 
class Example extends Component {
  constructor(props) {
    super(props)
    this.state = { count: 0 }
  }
  componentDidMount() {
    console.log(`ComponentDidMount => you Click ${this.state.count} times`)
  }
  componentDidUpdate() {
    console.log(`ComponentDidUpdate => you Clicked ${this.state.count} times`)
  }
  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <button onClick={this.addCount.bind(this)}>Click me</button>
      </div>
    )
  }
  addCount() {
    this.setState({count: this.state.count + 1})
  }
}

export default Example
