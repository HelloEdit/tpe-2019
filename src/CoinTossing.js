import React from 'react'
import styled from 'styled-components'

const Container = styled.div([], {
  display: 'flex',
  alignItems: 'center',
  userSelect: 'none'
})

const pics = {
  head: 'https://www.chards.co.uk/media/blog/46/1995onepoundrev500.png',
  tail: 'https://www.chards.co.uk/media/blog/46/1997onepoundrev500.png'
}

export class CoinTossing extends React.Component {
  constructor() {
    super()
    this.state = {
      actual: getRandomBoolean()
    }
  }

  componentWillMount() {
    this.interval = setInterval(this.rollAgain, 2000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  rollAgain = () => {
    this.setState({ actual: getRandomBoolean() })
  }

  render() {
    return (
      <div>
        <Container>
          <img src={this.state.actual ? pics.tail : pics.head} />
        </Container>
        <code />
      </div>
    )
  }
}

const getRandomBoolean = () => Math.random() < 0.5
