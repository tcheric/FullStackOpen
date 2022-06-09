const Header = ({ course }) => <h1>{course}</h1>

const Total = ({ sum }) => <p><b>Number of exercises {sum}</b></p>

const Part = ({ part }) => {
  console.log(part.name);
  
  return (
    <p>
      {part.name} {part.exercises}
    </p>
  )
}

const Content = ({ parts }) => 
  <>
    {parts.map(p => 
      <Part key={p.id} part={p} />
    )}    
  </>

const Course = ({course}) => {
  console.log(course);
  const exercisesSum = course.parts.reduce((accumulator, object) => {
    return accumulator + object.exercises
  }, 0)

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total sum={exercisesSum} />
    </div>
  )
}

export default Course