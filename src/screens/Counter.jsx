import React,{useState} from 'react'
import "../styles/Counter.css"
import Button from '../Components/Button'

const Counter = () => {
  const [count,setCount] = useState(0)
  return (
    <div className='app--counter'>
      <div>
        <div className='app--counter-info'>
            {count}
        </div>
        <div className="app--counter-btns">
          <Button styles="btn--increment" setCount={setCount} count={count} type="inc" name="Increment"/>
          <Button styles="btn--decrement" setCount={setCount} count={count} type="dec" name="Decrement"/>
        </div>
      </div>
    </div>
  )
}

export default Counter