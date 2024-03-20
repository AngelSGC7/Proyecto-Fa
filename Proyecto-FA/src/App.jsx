import { BrowserRouter } from 'react-router-dom'
import RoutesIndex from './routes/RoutesIndex'
import Header from './components/Header/header'

function App() {
 

  return (
    <>
    <BrowserRouter>
    <Header/>
    <RoutesIndex/>
    </BrowserRouter>
    </>
  )
}

export default App
