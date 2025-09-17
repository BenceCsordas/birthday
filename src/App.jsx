import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './components/Header'
import { Counter } from './components/Counter'
import { persons } from './data'
import { PersList } from './components/PersList'
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {

  const [pers, setPers] = useState(persons)
  

  return (
      <div className='container'>
      <Header/>
      
      <div className='app m-0 d-flex flex-column align-items-center'>
        
        <Counter count={pers.length}/>
        {pers.length != 0  && <PersList pers={pers} setPers={setPers}/>}
        
    </div></div>
  )
}

export default App
