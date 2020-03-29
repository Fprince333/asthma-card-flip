import React, { useState }  from 'react'
import { Animated } from "react-animated-css";
import Wave from 'react-wavify'
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

function Front(props) {
  return (
    <Animated className={props.className} animationOutDelay={1000} animationOut="fadeOutDown" animationIn="bounceInUp" isVisible={props.isVisible} animateOnMount={false} animationInDuration={2000}>
      <div className="center-container">
        <h1>Is smoke a trigger for your asthma symptoms?</h1>
        <p>Do you experience increased wheezing, coughing or chest tightness when exposed to smoke?</p>
      </div>
      <div className="center-container">
        <Button text='Yes' handleClick={props.handleClick}/> <Button text='No' handleClick={props.handleClick}/>
      </div>
    </Animated>
  )
}

function Back(props) {
  return (
    <Animated className={props.className} animationIn="fadeInDown" isVisible={props.isVisible} animationInDuration={1500} animationInDelay={2000} animateOnMount={false}>
      <h1>Almost 40 million U.S. adults still smoke.</h1>
      <p>But it's not too late to quit.</p>
      <Link text='Learn More' handleClick={props.handleClick}/>
    </Animated>
  )
}

function Card(props) {
  const opacity = props.transitioning ? "1" : "0.7"
  return (
    <div className="card-container">
    <div id={props.id} className="card">
      <h2>Symptoms Check</h2>
      <hr />
      <Front className={`${props.transitioning ? 'hidden' : ''}`} isVisible={!props.transitioning} handleClick={props.handleClick} />
      <Back className={`${!props.transitioning ? 'hidden' : ''}`} isVisible={props.transitioning} handleClick={props.handleClick} />
      <div id="wave" className={`${props.transitioning ? "transition" : ""}`}>
        <Wave 
          className="waves"
          fill="#D4EFEE"
          opacity={opacity}
          paused={false}
          options={{
            // height: 285,
            amplitude: 25,
            speed: 0.25,
            points: 3
          }}
        />
        <Wave 
          className="waves"
          fill="#D4EFEE"
          opacity="0.7"
          paused={false}
          options={{
            // height: 285,
            amplitude: 30,
            speed: 0.15,
            points: 3
          }}
        />
      </div>
    </div>
    </div>
  )
}

function App() {
  const [isCardOneTransitioned, transitionCardOne] = useState(false)

  const handleClick = el => {
    transitionCardOne(!isCardOneTransitioned)
  }

  return (
    <main>
      <h1 className="title">Asthma Card Flip Examples</h1>
          <Card transitioning={isCardOneTransitioned} handleClick={e => handleClick(e)}/>
    </main>
  )
}

export default App
