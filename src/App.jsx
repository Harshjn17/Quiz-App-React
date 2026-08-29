import React, { useState } from 'react'
import Quiz from './components/Quiz'

const App = () => {

  const [isVisible, setisVisible] = useState(false)
  const [isHide, setisHide] = useState(true)

  const handleStartbtn = () => {
    setisVisible(!isVisible)
    setisHide(!isHide)

  }

  return (
    <div>
      {isHide && <button id='start-btn'
        onClick={handleStartbtn}>Start Quiz
      </button>}
      {isVisible && <Quiz />}
    </div>
  )
}

export default App