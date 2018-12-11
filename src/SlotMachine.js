import React from 'react'
import styled from 'styled-components'

const Container = styled.div([], {
  display: 'flex',
  alignItems: 'center'
})

const Slot = styled.h1([], {
  userSelect: 'none',
  margin: '10px',
  fontSize: '5.5em',
  border: '#ffffff solid 5px',
  borderRadius: '20px',
  padding: '20px',
  margin: '0 30px'
})

export class SlotMachine extends React.Component {
  constructor() {
    super()
    this.state = {
      draw: Array.from({ length: 4 }, getRandomSlotValue)
    }
  }

  componentWillMount() {
    this.interval = setInterval(this.drawAgain, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  drawAgain = () => {
    const draw = Array.from({ length: 4 }, getRandomSlotValue)
    this.setState({ draw })
  }

  render() {
    return (
      <div>
        <Container>
          {this.state.draw.map((v, i) => (
            <Slot key={i}>{v}</Slot>
          ))}
        </Container>
      </div>
    )
  }
}

function getRandomSlotValue() {
  return Math.floor(Math.random() * (9 + 1))
}
