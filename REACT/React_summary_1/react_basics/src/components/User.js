
import React from 'react'

export default function User({firstname, lastname, age}) {
  return (
    <div>
        <p>Name: {firstname}</p>
        <p>Lastname: {lastname}</p>
        <p>Age: {age}</p>
    </div>
  )
}