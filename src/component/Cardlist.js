import React from 'react'
import Card from './Card'

function Cardlist({robots}) {

  return (
    <div>{robots.map(robot => <Card key = {robot.id} id = {robot.id} name = {robot.name} email = {robot.email} /> )}</div>
  )
}

export default Cardlist