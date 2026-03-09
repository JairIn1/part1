import { useState } from 'react'

const Button = ({text, handleclick}) =>{
  return(
    <button onClick={handleclick}>
      {text}
    </button>
    )
}
  

const StatisticLine = (props) =>{
  return(
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  )
}

const Statistics = (props) =>{
  const total = props.good+props.bad+props.neutral
  const average = (props.good-props.bad)/total
  const positive = (props.good/total)*100
  
  if (total==0){
    return(
      <div>
        <h1>statistic</h1>
        <p>No feedback given</p>
      </div>
    )
  }
  return(
    <div>
      <h1>statistic</h1>
      <table>
        <tbody>
        <StatisticLine text='good' value={props.good}/>
        <StatisticLine text='neutral' value={props.neutral}/>
        <StatisticLine text='bad' value={props.bad}/>
        <StatisticLine text='total' value={total}/>
        <StatisticLine text='average' value={average}/>
        <StatisticLine text='positive' value={positive+' %'}/>
        </tbody>
      </table>

    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button text='good' handleclick={()=>{setGood(good+1)}}/> 
      <Button text='bad' handleclick={()=>{setBad(bad+1)}}/> 
      <Button text='neutral' handleclick={()=>{setNeutral(neutral+1)}}/> 
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App