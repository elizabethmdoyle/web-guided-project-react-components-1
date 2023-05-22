/*
💥💥💥 Rules of STATE 💥💥💥
  - We create a slice of state like this: `const [healthPoints, setHealthPoints] = useState(100)`
  - A component may have as may slices of state as it needs
  - A slice of state may contain a string, a number, a boolean, an array, an object...
  - We use slices of state to store information that changes as the user interacts with the app
  - State is used in the JSX interpolated inside curly brackets
  - We never tamper with state: `healthPoints++`, `healthPoints--` or `someState.push(item)` is FORBIDDEN
  - We use the dedicated "state updater" to schedule a state change: `setHealthPoints(healthPoints + 1)`
*/


import React, {useState} from 'react' 

function Playground(props) {
  const [count, setCount] = useState(0);
  const [spinnerOn, setSpinnerOn] = useState(false);
  const [weapon, setWeapon] = useState('scissors');
  /* const [count, setCount] = useState(0)
  is the same as:

  const state = useState(0)
  const count = state(0)
  const setCount = state(1)
  console.log(count)

  where state(1), pulls the function off of the useState object, and state(0) pulls the initial count

  state is immutable - cannot be changed directly, therefore whatever you set the useState variable to (ie count), cannot be mutated or changed directly like:
  count = count + 50 would throw an error
  */
  console.log(count)
  // setCount(count + 500)
  /*  mutating setCount is like creating a new instance of count as follows:
  const newCount = count
  newCount = newCount + 500
  console.log(newCount)
  */

  if (spinnerOn) {
    return (
      <div className='container'> 
      <h3>The spinner is {spinnerOn ? 'ON' : "OFF"}</h3>
      <button onClick={() => setSpinnerOn(false)}>Turn Spinner off</button>
      </div>
    )
  }
 
  return(
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count+1)} >Increment</button>
      <button onClick={() => setCount(count-1)} >Decrement</button>
      <h3>The spinner is {spinnerOn ? 'ON' : "OFF"}</h3>
      <button onClick={() => setSpinnerOn(!spinnerOn)}>Toggle Spinner</button>
      <h3>The current weapon is: {weapon}</h3>
      <button onClick={() => setWeapon('scissors')} >Pick Scissors</button>
      <button onClick={() => setWeapon('rock')} >Pick Rock</button>
      <button onClick={() => setWeapon('paper')} >Pick Paper</button>
    </div>
  )
}

 export default Playground