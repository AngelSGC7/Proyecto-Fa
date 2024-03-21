import { BrowserRouter } from 'react-router-dom'
import RoutesIndex from './routes/RoutesIndex'
import Header from './components/Header/header'
import { AuthProvider } from './context/AuthContext'

function App() {
 

  return (
    <>
    <AuthProvider>
    <BrowserRouter>
    <Header/>
    <RoutesIndex/>
    </BrowserRouter>
    </AuthProvider>
    </>
  )
}

export default App
