import React, { useState } from 'react'

const Button = ({text, onClick}) => {
  return (
    <button onClick={onClick}>{text}</button>
  )
}
const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(7).fill(0)) //Array[0] to [6] created
  const [highestVote, setHighestVote] = useState(0)

  const handleNextAnecdote = () => {
    const prevSelected = selected
    let nextSelected = Math.floor(Math.random() * 7)
    while (nextSelected === prevSelected) {
      nextSelected = Math.floor(Math.random() * 7)
    }
    setSelected(nextSelected)
  }

  const handleVote = () => {
    const votesCopy = [...votes] 
    votesCopy[selected] += 1
    setVotes(votesCopy)
    // Check if selected is now highest voted
    if (votes[selected] >= votes[highestVote]) {
      setHighestVote(selected)
    }
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <div>{anecdotes[selected]}</div>
      <div>{`Has ${votes[selected]} votes`}</div>
      <Button text="Vote" onClick={handleVote}/>
      <Button text="Next anecdote" onClick={handleNextAnecdote}/>
      <h1>Anecdote with most votes</h1>
      <div>{anecdotes[highestVote]}</div>
      <div>{`Has ${votes[highestVote]} votes`}</div>
    </div>
  )
}

export default App