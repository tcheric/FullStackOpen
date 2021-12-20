import React, { useState } from 'react'

const Button = ({text, onClick}) => {
  return (
    <button onClick={onClick}>{text}</button>
  )
}

const Stats = ({userFeedback}) => {
  console.log(userFeedback)
  const {good, neutral, bad, all, avg, pos} = userFeedback
  if (!good && !neutral && !bad) {
    return (
      <div>
        {"No feedback given"}
      </div>
    )
  } else {
    return (
      <div>
        <table>
          <tbody>
            <Stat type="good" count={good}/>
            <Stat type="neutral" count={neutral}/>
            <Stat type="bad" count={bad}/>
            <Stat type="all" count={all}/>
            <Stat type="avg" count={avg}/>
            <Stat type="pos" count={pos}/>
          </tbody>
        </table>
      </div>
    )
  }
}

const Stat = ({type, count}) => {
  if (type === "pos") {
    return (
      <tr>
        <td>{type}</td>
        <td>{count.toFixed(2)} %</td>
      </tr>
    )
  } else {
    return (
      <tr>
        <td>{type}</td>
        <td>{count}</td>
      </tr>
    )
  }
}

const handleGood = (userFeedback, setUserFeedback) => {
  const {good, bad, all} = userFeedback
  const newUF = {
    ...userFeedback,
    good: good + 1,
    all: all + 1,
    avg: (good + 1 - bad) / (all + 1),
    pos: 100 * (good + 1) / (all + 1)
  }
  setUserFeedback(newUF)
}

const handleNeutral = (userFeedback, setUserFeedback) => {
  const {good, neutral, bad, all} = userFeedback
  const newUF = {
    ...userFeedback,
    neutral: neutral + 1,
    all: all + 1,
    avg: (good - bad) / (all + 1),
    pos: 100 * good / (all + 1)
  }
  setUserFeedback(newUF)
}

const handleBad = (userFeedback, setUserFeedback) => {
  const {good, bad, all} = userFeedback
  const newUF = {
    ...userFeedback,
    bad: bad + 1,
    all: all + 1,
    avg: (good - bad - 1) / (all + 1),
    pos: 100 * good / (all + 1)
  }
  setUserFeedback(newUF)
}

const App = () => {
  // save clicks of each button to its own state
  const [userFeedback, setUserFeedback] = useState({
    good: 0, neutral: 0, bad: 0, all: 0, avg: 0, pos: 0
  })

  return (
    <div>
      <h1>give feedback</h1>
      <Button text="good" onClick={() => handleGood(userFeedback, setUserFeedback)}/>
      <Button text="neutral" onClick={() => handleNeutral(userFeedback, setUserFeedback)}/>
      <Button text="bad" onClick={() => handleBad(userFeedback, setUserFeedback)}/>
      <h1>statistics</h1>
      <Stats userFeedback={userFeedback}/>
    </div>
  )
}

export default App