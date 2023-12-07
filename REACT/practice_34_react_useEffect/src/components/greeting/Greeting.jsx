import { useEffect, useState } from "react"

export default function Greeting( {name} ) {

  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() =>{
    console.log('The Greeting component had been rendered!')

    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      console.log('The Greeting component will be unmounted!');

      if (intervalId) {
        clearInterval(intervalId);
      }
    }
  }, [])

  return (
    <div>
      <p>{currentTime}</p>
      <p>{`Current date: ${currentTime.toLocaleDateString()}`}</p>
      <p>{`Hello, ${!name ? 'visitor' : name}`}</p>
    </div>
    
  )
}