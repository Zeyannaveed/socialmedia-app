
import { Route,Routes } from 'react-router-dom'
import Loginpage from './scenes/loginpage/Loginpage'
import Signup from './scenes/signup/Signup'
import Homepage from './scenes/hompage/Homepage'
import './App.css'
import Navbar from './scenes/navbar/Navbar'

import { useSelector } from 'react-redux'
function App() {
 const mode = useSelector((state)=>state.mode)
  return (
    <>
        <div className={mode}>
      <div className='bg-gray-50 dark:bg-black '>
        <Navbar/>

<Routes>
  <Route path="/signup" element={<Signup/>}/>
  <Route path="/" element={<Loginpage/>}/>
<Route path="/home" element={<Homepage/>}/>

</Routes>
</div> 
</div>
    </>
  )
}

export default App
