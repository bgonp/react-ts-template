import { useState } from 'react'

import styles from './App.module.css'

import Yeah from '../../../assets/images/yeah.svg'

export const App = () => {
  const [count, setCount] = useState(0)

  return (
    <div className={styles.container}>
      <h1>Sentiment Analysis</h1>
      <button onClick={() => setCount(count + 1)}>
        <Yeah fill="#FFF" />
      </button>
      <h3>{count}</h3>
    </div>
  )
}

export default App
