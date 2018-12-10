import React from 'react'
import styled from 'styled-components'

const Container = styled.div([], {
  display: 'flex',
  alignItems: 'center'
})

const Refresh = styled.button([], {
  background:
    '#FFF url(https://cbwconline.com/IMG/Codepen/Blue%20Refresh.svg) center/28px no-repeat',
  height: '40px',
  width: '40px',
  margin: '10px auto',
  borderRadius: '50%',
  border: 'none',
  boxShadow: '0px 5px 15px rgba(#000, .3)'
})

const Slot = styled.h1([], {
  margin: '10px',
  fontSize: '3em',
  border: '#ffffff solid 2px',
  borderRadius: '12px',
  padding: '13px'
})

export class SlotMachine extends React.Component {
  constructor() {
    super()
    this.state = {
      draw: Array.from({ length: 4 }, getRandomSlotValue)
    }
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
        <Refresh onClick={this.drawAgain} />
      </div>
    )
  }
}

function getRandomSlotValue() {
  return Math.floor(Math.random() * (9 + 1))
}
