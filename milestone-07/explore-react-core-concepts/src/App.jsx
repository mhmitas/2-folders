import { useState } from 'react'
import './App.css'
import Todo from './todo'
import Actor from './Actor'
import Singer from './singer'


function App() {

  const actors = ['IronMan', 'Hulk', 'C.America', 'BatMan',]

  const singers = [
    { name: 'messi', age: 40 },
    { name: 'ronaldo', age: 40 },
    { name: 'maradona', age: 60 },
    { name: 'pele', age: 90 },
  ]


  return (
    <>
      <h1>I have new 2 friends racact and vite</h1>

      <Actor name={"SpiderMan"}></Actor>
      {
        actors.map(actor => <Actor name={actor}></Actor>)
      }

      {
        singers.map(singer => <Singer singer={singer}></Singer>)
      }


      {/* <Todo task="learn react" isDone="false"></Todo>
      <Todo task="core concepts" isDone="false"></Todo>
      <Todo task="JS" isDone="true"></Todo> */}
      {/* <Device name="laptop" price ="55"></Device>
      <Device name="mobile" price ="10"></Device>
      <Device name="watch" price ="3"></Device>
      <Person></Person>
      <Student grade="7" score="99" age="15"></Student>
      <Student grade="8" age="16"></Student>
      <Student grade="9" score="91" age="17"></Student>
      <Developer></Developer> */}
    </>
  )
}

function Device(props) {
  // console.log(props)
  return <h2>This is Device: {props.name}</h2>
}

function Person() {
  const age = 23;
  const person = { name: 'Mahim', age: 13 }
  return <h3>I am a {person.name}. with age: {age}</h3>
}

function Student({ score = 0, grade, age }) {
  console.log(score, grade)
  return (
    <div className='student'>
      <h3>This is a student</h3>
      <p>Grade: {grade}</p>
      <p>Score: {score}</p>
      <p>age: {age}</p>
    </div>
  )
}

function Developer() {
  const developerStyle = {
    margin: '20px',
    padding: '20px',
    border: '2px solid blue',
    borderRadius: '20px',
    backgroundColor: 'green'
  }
  return (
    <div style={developerStyle}>
      <h4>devo loper</h4>
      <p>coding</p>
    </div>
  )
}


export default App
