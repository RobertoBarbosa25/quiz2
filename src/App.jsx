import { useState } from 'react'
import Quiz from './components/Quiz'
import TrabalhandoComImagens from './components/TrabalhandoComImagens'




function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    
      
      <Quiz/>
      

      <TrabalhandoComImagens/>

      
      
        
    </div>
    
    
    
  )
}

export default App
