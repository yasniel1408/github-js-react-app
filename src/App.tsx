import {useEffect, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import {sayHello} from "@yasniel1408/github-js-lib"
import {HelloWorld} from "@yasniel1408/hello-world/index.ts"

function App() {
  const [count, setCount] = useState(0)

useEffect(() => {
    sayHello();
},[])

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
        <HelloWorld>
            <h1>Vite + React</h1>
        </HelloWorld>
        <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
