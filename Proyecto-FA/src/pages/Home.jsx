import { useAuthContext } from '../hooks/useAuthContext'
import { useState, useEffect } from 'react'
import { getMeUserServices } from '../services/useServices'

const Home = () => {
  const { userPayload } = useAuthContext()
  const [userData, setUserData] = useState({})
  const token = localStorage.getItem('token')

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await getMeUserServices(token)

        if (response.status === 200) {
          setUserData(response.data)
        }
      } catch (error) {
        console.log(error)
      }
    }

    fetchUserData()
  }, [token])

  if (!userPayload) {
    return (
      <>
        <div>Home</div>
      </>
    )
  }

  return (
    <>
      <h1>Home</h1>
      {userPayload.role === 'ADMIN'
        ? <p>Esta es una sección para administradores</p>
        : <p>Esta es una sección para customers</p>}

      {userPayload.role === 'ADMIN' && <h4>Bienvenido ADMIN</h4>}

      {userPayload.role === 'CUSTOMER' && <h4>Bienvenido CUSTOMER</h4>}
      {userData?.first_name && <p>Nombre: {userData.first_name}</p>}
      {userData?.last_name && <p>Apellido: {userData.last_name}</p>}
      {userData?.gender && <p>Genero: {userData.gender}</p>}
      {userData?.email && <p>Email: {userData.email}</p>}
      {userData?.role && <p>Role: {userData.role}</p>}
    </>
  )
}

export default Home