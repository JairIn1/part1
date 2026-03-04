const Header = (props) => {
  console.log(props)
  return <h1>{props.course}</h1>
}

const Part = (props) => {
  return <p>{props.name} {props.exercises}</p>
}

const Content = ({parts}) =>{
  return( 
    <div>
      {parts.map((value, index) => (
        <Part key={index} {... value}/>))}
    </div>
  )
}

const Total = ({parts}) => {
  let result = 0
  parts.forEach(value => {
    result += value.exercises
  })
  return <p>Number of exercises {result}</p>
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name}/>
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </div>
  )
}

export default App