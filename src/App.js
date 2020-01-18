import React, { useState, useEffect }  from 'react'
import Flippy, { FrontSide, BackSide } from 'react-flippy'
import SmokeMachine from '@bijection/smoke'
import waves from './waves.svg'
import arrow from './arrow.svg'
import './App.css'

function Button(props) {
  return (
    <button onClick={props.handleClick}>{props.text}</button>
  )
}

function Link(props) {
  return (
    <div className="link" onClick={props.handleClick}>{props.text} <img src={arrow} alt=""/></div>
  )
}

function Card(props) {
  return (
    <div id={props.id} className="card">
      <h2>Symptoms Check</h2>
      <hr />
      {props.type === 'front' && <React.Fragment><h1>Is smoke a trigger for your asthma symptoms?</h1><p>Do you experience increased wheezing, coughing or chest tightness when exposed to smoke?</p><div><Button text='Yes' handleClick={props.handleClick}/> <Button text='No' handleClick={props.handleClick}/></div></React.Fragment> }
      {props.type === 'back' && <React.Fragment><h1>Almost 40 million U.S. adults still smoke.</h1><p>But it's not too late to quit.</p><Link text='Learn More' handleClick={props.handleClick}/></React.Fragment> }
      <div className="waves">
        <img src={waves} alt=""/>
      </div>
    </div>
  )
}

function App() {
  const [isCardOneFlipped, toggleCardOneFlip] = useState(false)
  const [isCardTwoFlipped, toggleCardTwoFlip] = useState(false)
  const [isCardThreeFlipped, toggleCardThreeFlip] = useState(false)

  const handleClick = el => {
    el.currentTarget.offsetParent.id === "one" && toggleCardOneFlip(!isCardOneFlipped)
    el.currentTarget.offsetParent.id === "two" && toggleCardTwoFlip(!isCardTwoFlipped)
    el.currentTarget.offsetParent.id === "three" && toggleCardThreeFlip(!isCardThreeFlipped)
  }
  useEffect(() => {
    const canvas = document.getElementById('canvas')
    const ctx = canvas.getContext('2d')
    const party = SmokeMachine(ctx, [54, 16.8, 18.2])
    canvas.width = 1184
    canvas.height = 240
    party.addSmoke(600,500,100)
    party.addSmoke(500,600,20)
    party.start()
  })
  return (
    <main>
      <h1 className="title">Asthma Card Flip Examples</h1>
      <Flippy
        isFlipped={isCardOneFlipped}
        flipDirection="horizontal" // horizontal or vertical
        // ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
        // if you pass isFlipped prop component will be controlled component.
        // and other props, which will go to div
        // style={{ width: '200px', height: '200px' }} /// these are optional style, it is not necessary
      >
        <FrontSide>
          <Card id="one" type="front" handleClick={e => handleClick(e)}/>
        </FrontSide>
        <BackSide>
          <Card id="one" type="back" handleClick={e => handleClick(e)}/>
        </BackSide>
      </Flippy>
      <Flippy
        isFlipped={isCardTwoFlipped}
        flipDirection="vertical" // horizontal or vertical
        // ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
        // if you pass isFlipped prop component will be controlled component.
        // and other props, which will go to div
        // style={{ width: '200px', height: '200px' }} /// these are optional style, it is not necessary
      >
        <FrontSide>
          <Card id="two" type="front" handleClick={e => handleClick(e)}/>
        </FrontSide>
        <BackSide>
          <Card id="two" type="back" handleClick={e => handleClick(e)}/>
        </BackSide>
      </Flippy>
      <Flippy
        isFlipped={isCardThreeFlipped}
        flipDirection="horizontal" // horizontal or vertical
        // ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
        // if you pass isFlipped prop component will be controlled component.
        // and other props, which will go to div
        // style={{ width: '200px', height: '200px' }} /// these are optional style, it is not necessary
      >
        <FrontSide>
          <Card id="three" type="front" handleClick={e => handleClick(e)}/>
        </FrontSide>
        <BackSide>
          <Card id="three" type="back" handleClick={e => handleClick(e)}/>
          <canvas id="canvas"/>
        </BackSide>
      </Flippy>
    </main>
  )
}

export default App
