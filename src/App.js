import React, { useState }  from 'react'
import { Animated } from "react-animated-css";
import Wave from 'react-wavify'
import cardBg from './card-bg.svg'
import logo from './logo.png'
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

function FrontOne(props) {
  return (
    <Animated className={props.className} animationOut="fadeOutDown" animationIn="fadeInUp" isVisible={props.isVisible} animateOnMount={false} >
      <div className="center-container">
        <h1 style={{marginTop: 40, marginBottom: 16, lineHeight: "32px" }}>When I feel fine and have no symptoms <br />it's because the asthma has gone away.</h1>
        <p>Do you experience increased wheezing, coughing or chest tightness when exposed to smoke?</p>
      </div>
      <div className="center-container">
        <Button text='Myth' handleClick={props.handleClick}/> <Button text='Fact' handleClick={props.handleClick}/>
      </div>
    </Animated>
  )
}

function BackOne(props) {
  return (
    <Animated className={props.className} animationIn="fadeInDown" animationOut="fadeOutDownBig" isVisible={props.isVisible} animateOnMount={false} animationDuration={300}>
      <h1 style={{textAlign: 'center', fontWeight: '700'}}>MYTH</h1>
      <hr style={{backgroundColor: '#273744'}}/>
      <h1 style={{color: "#273744", lineHeight: "32px", fontWeight: '400'}}>Asthma is a chronic disease that can't be cured, only controlled.</h1>
    </Animated>
  )
}

function FrontTwo(props) {
  return (
    <Animated 
      className={props.className} 
      animationOutDelay={1000} 
      animationOut="fadeOutDown" 
      animationIn="bounceInUp" 
      isVisible={props.isVisible} 
      animateOnMount={false} 
      animationInDuration={2000}>
      <div className="center-container">
        <h1>Is smoke a trigger for your asthma symptoms?</h1>
        <p>Do you experience increased wheezing, coughing or chest tightness when exposed to smoke?</p>
      </div>
      <div className="center-container">
        <Button text='Yes' handleClick={props.handleClick} onMouseEnter={(e) => props.onMouseEnter} onMouseLeave={(e) => props.onMouseLeave}/> <Button text='No' handleClick={props.handleClick} onMouseEnter={(e) => props.onMouseEnter} onMouseLeave={(e) => props.onMouseLeave}/>
      </div>
    </Animated>
  )
}

function BackTwo(props) {
  return (
    <Animated 
      className={props.className} 
      animationIn="fadeIn" 
      isVisible={props.isVisible} 
      animationInDuration={1500} 
      animationInDelay={2000} 
      animateOnMount={false}>
      <div className="center-container">
        <h1>Almost 40 million U.S. adults still smoke.</h1>
        <p>But it's not too late to quit.</p>
        <Link text='Learn More' handleClick={props.handleClick}/>
      </div>
    </Animated>
  )
}

function FrontThree(props) {
  return (
    <Animated 
      className={props.className} 
      animationOutDelay={1000} 
      animationOut="fadeOutDown" 
      animationIn="bounceInUp" 
      isVisible={props.isVisible} 
      animateOnMount={false} 
      animationInDuration={2000}>
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

function BackThree(props) {
  return (
    <Animated 
      className={props.className} 
      animationIn="fadeIn" 
      isVisible={props.isVisible} 
      animationInDuration={1500} 
      animationInDelay={2000} 
      animateOnMount={false}>
      <div className="center-container">
        <h1>Almost 40 million U.S. adults still smoke.</h1>
        <p>But it's not too late to quit.</p>
        <Link text='Learn More' handleClick={props.handleClick}/>
      </div>
    </Animated>
  )
}

function CardOne(props) {
  return (
    <div className="card-container">
      <div className="card card-one" style={{backgroundImage: `url(${cardBg})`}}>
        <div className="card-logo">
          <img src={logo} alt="" />
        </div>
        <FrontOne className={`${props.transitioning ? 'hidden' : ''}`} isVisible={!props.transitioning} handleClick={props.handleClick} />
        <BackOne className={`${!props.transitioning ? 'hidden' : ''}`} isVisible={props.transitioning} handleClick={props.handleClick} />
        <div style={{position: "absolute", bottom: 50, textAlign: 'center'}}><p>Learn more about the facts and common misconceptions of asthma.</p>
        <Link text='Myth or Fact?' handleClick={props.handleClick}/>
        </div>
      </div>
    </div>
  )
}

function CardTwo(props) {
  const opacity = props.transitioning ? "1" : "0.7"
  return (
    <div className="card-container">
    <div className="card card-two">
      <h2>Symptoms Check</h2>
      <hr />
      <FrontTwo className={`${props.transitioning ? 'hidden' : ''}`} isVisible={!props.transitioning} handleClick={props.handleClick} onMouseEnter={(e) => props.handleButtonHover} onMouseLeave={(e) => props.handleButtonLeave}/>
      <BackTwo className={`${!props.transitioning ? 'hidden' : ''}`} isVisible={props.transitioning} handleClick={props.handleClick} />
      <div id="wave" className={`${props.transitioning ? "transition" : ""}`}>
        <Wave 
          className="waves"
          fill="#D4EFEE"
          opacity={opacity}
          paused={!props.hovered}
          options={{
            amplitude: 25,
            speed: 0.25,
            points: 3
          }}
        />
        <Wave 
          className="waves"
          fill="#D4EFEE"
          opacity="0.7"
          paused={!props.hovered}
          options={{
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

function CardThree(props) {
  const opacity = props.transitioning ? "1" : "0.7"
  return (
    <div className="card-container">
    <div className="card card-two">
      <h2>Symptoms Check</h2>
      <hr />
      <FrontThree className={`${props.transitioning ? 'hidden' : ''}`} isVisible={!props.transitioning} handleClick={props.handleClick} />
      <BackThree className={`${!props.transitioning ? 'hidden' : ''}`} isVisible={props.transitioning} handleClick={props.handleClick} />
      <div id="wave" className={`${props.transitioning ? "transition" : ""}`}>
        <Wave 
          className="waves"
          fill="#D4EFEE"
          opacity={opacity}
          paused={false}
          options={{
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
  const [isCardTwoTransitioned, transitionCardTwo] = useState(false)
  const [isCardThreeTransitioned, transitionCardThree] = useState(false)
  const [isButtonHovered, setButtonHoverState] = useState(false)

  const handleClickOne = el => {
    transitionCardOne(!isCardOneTransitioned)
  }

  const handleClickTwo = el => {
    transitionCardTwo(!isCardTwoTransitioned)
  }

  const handleClickThree = el => {
    transitionCardThree(!isCardThreeTransitioned)
  }

  const handleButtonHover = () => {
    setButtonHoverState(true)
  }

  const handleButtonLeave = () => {
    setButtonHoverState(false)
  }

  return (
    <main>
      <h1 className="title">Asthma Card Flip Examples</h1>
        <CardOne transitioning={isCardOneTransitioned} handleClick={e => handleClickOne(e)}/>
        {/* <CardTwo hovered={isButtonHovered} transitioning={isCardTwoTransitioned} handleClick={e => handleClickTwo(e)}/> */}
        <CardThree transitioning={isCardThreeTransitioned} handleClick={e => handleClickThree(e)}/>
    </main>
  )
}

export default App
