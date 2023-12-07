import React, { useState } from 'react';

const Greeting = ({name}) => {

  return (
    <div>
      <p>{username ? `Hello, ${username}!` : 'Hello, visitor!'}</p>
    </div>
  );
};

export default Greeting;