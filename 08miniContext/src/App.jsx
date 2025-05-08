import './App.css'
import Login from './components/login'
import Profile from './components/profile'
import UserContext from './context/UserContext'

function App() {

  return (
    <UserContext.Provider> 
     <h1>React with chai</h1>
    <Login/>
    <Profile/>

    </UserContext.Provider>
  )
}

export default App
