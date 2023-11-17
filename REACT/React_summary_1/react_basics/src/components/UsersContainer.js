
import React from 'react'
import User from './User';

export default function UsersContainer() {
  return (
    <div>
        <User firstname='Oleg' lastname='Petrov' age='20'/>
        <User firstname='Anton' lastname='Sidorov' age='34'/>
        <User firstname='Irina' lastname='Orlova' age='45'/>
    </div>

  )
}
