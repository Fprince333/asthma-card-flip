import React, { useState }  from 'react'
// import SmokeMachine from '@bijection/smoke'
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
    <React.Fragment>
      <h1>Is smoke a trigger for your asthma symptoms?</h1>
      <p>Do you experience increased wheezing, coughing or chest tightness when exposed to smoke?</p>
      <div>
        <Button text='Yes' handleClick={props.handleClick}/> <Button text='No' handleClick={props.handleClick}/>
      </div>
    </React.Fragment>
  )
}

function Back(props) {
  return (
    <React.Fragment>
      <h1>Almost 40 million U.S. adults still smoke.</h1>
      <p>But it's not too late to quit.</p>
      <Link text='Learn More' handleClick={props.handleClick}/>
    </React.Fragment>
  )
}

function Card(props) {
  const firstWaveHeight = props.transitioning ? 400 : 285
  const secondWaveHeight = props.transitioning ? 20 : 285

  return (
    <div className="card-container">
    <div id={props.id} className="card">
      <h2>Symptoms Check</h2>
      <hr />
      {props.transitioning ? <Back handleClick={props.handleClick} /> : <Front handleClick={props.handleClick} /> }
      <Wave 
        className={`wave ${props.transitioning && 'transitioning'}`}
        fill="#D4EFEE"
        opacity="0.7"
        paused={false}
        options={{
          height: 285,
          amplitude: 25,
          speed: 0.25,
          points: 3
        }}
      />
      <Wave 
        className={`wave ${props.transitioning && 'transitioning'}`}
        fill="#D4EFEE"
        opacity="0.7"
        paused={false}
        options={{
          height: 285,
          amplitude: 30,
          speed: 0.15,
          points: 3
        }}
      />
    </div>
    </div>
  )
}

function App() {
  const [isCardOneTransitioned, transitionCardOne] = useState(false)
  const [isCardTwoTransitioned, transitionCardTwo] = useState(false)
  const [isCardThreeTransitioned, transitionCardThree] = useState(false)

  const handleClick = el => {
    el.currentTarget.offsetParent.id === "one" && transitionCardOne(!isCardOneTransitioned)
    el.currentTarget.offsetParent.id === "two" && transitionCardTwo(!isCardTwoTransitioned)
    el.currentTarget.offsetParent.id === "three" && transitionCardThree(!isCardThreeTransitioned)
  }

  return (
    <main>
      <h1 className="title">Asthma Card Flip Examples</h1>
          <Card id="one" transitioning={isCardOneTransitioned} handleClick={e => handleClick(e)}/>
          <Card id="two" transitioning={isCardTwoTransitioned} handleClick={e => handleClick(e)}/>
          <Card id="three" transitioning={isCardThreeTransitioned} handleClick={e => handleClick(e)}/>
    </main>
  )
}

export default App
