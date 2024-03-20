import logo from '../assets/react.svg'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import '../styles/form.css'
import { loginUserServices } from '../services/useServices'

const AccountLogin = () => {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
  } = useForm()
  const onSubmit = async (data) => {
    try {
      const {status} = await loginUserServices(data)

      if (status === 200) {
        navigate('/Products')
      }
    } catch (error) {
      alert('Error al Iniciar Sesion')
      console.log(error)
    }}
  return (
    <main className='form-signin w-100 m-auto'>
      <form data-bitwarden-watching='1'>
        <img className='mb-4' src={logo} alt='' width='72' height='57' />
        <h1 className='h3 mb-3 fw-normal'>Login</h1>

        <div className='form-floating'>
          <input type='email' className='form-control' id='floatingInput' placeholder='name@example.com' />
          <label htmlFor='floatingInput'>Correo Electronico</label>
        </div>
        <div className='form-floating'>
          <input type='password' className='form-control' id='floatingPassword' placeholder='Password' />
          <label htmlFor='floatingPassword'>Contraseña</label>
        </div>

        <button className='btn btn-primary w-100 py-2' type='submit'>Login</button>
        <p className='mt-5 mb-3 text-body-secondary'>© 2017–2024</p>
      </form>
    </main>
  )
}

export default AccountLogin