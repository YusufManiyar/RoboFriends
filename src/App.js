import React, { useState, useEffect } from 'react'
import './App.css'
import Cardlist from './component/Cardlist'
import SearchBox from './component/SearchBox'
import Scroll from './component/Scroll'

function App() {

  const [searchField, setSearchField] = useState('')
  const [robots, setRobots] = useState([])
  const [filteredRobots, setfilteredRobots] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
      setRobots(users)
    })
  },[])

  useEffect(() => {
    setfilteredRobots(robots.filter(robot => robot.name.toLowerCase().includes(searchField.toLowerCase())))
  },[robots, searchField])

  function onSearchChange (event) {
    setSearchField(event.target.value)
  }

  return (
    <div className='tc'>
      <h1 className='f1'>Robo Friends</h1>
      <SearchBox onSearchChange = {onSearchChange}/>
      <Scroll>
        {robots && robots.length > 0 ?
        filteredRobots.length > 0 ?
        <Cardlist robots={filteredRobots}/>
        :
        <h1>Match not found</h1>
        :
        <h1>Loading...</h1>}
      </Scroll>
    </div>
  );
}

export default App;
