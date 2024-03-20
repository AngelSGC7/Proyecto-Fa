import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import logo from '../assets/react.svg'
import '../styles/form.css'
import { registerUserServices } from '../services/useServices.js'

const AccountSignup = () => {
    const navigate = useNavigate()
    const {
      register,
      handleSubmit,
      watch,
      formState: { errors },
    } = useForm()
  
    const onSubmit = async (data) => {
      try {
        const {status} = await registerUserServices(data)
  
        if (status === 201) {
          navigate('/AccountLogin')
        }
      } catch (error) {
        alert('Error al registrar el usuario')
        console.log(error)
      }
    }
  
    return (
      <main className='form-signin w-100 m-auto'>
        <form onSubmit={handleSubmit(onSubmit)} data-bitwarden-watching='1'>
          <img className='mb-4' src={logo} alt='' width='72' height='57' />
          <div className='form-floating'>
            <input
              type='text'
              className='form-control'
              id='first_name'
              placeholder='Name'
              {...register('first_name', { required: true })}
            />
            <label htmlFor='first_name'>Nombre</label>
          </div>
          <div className='form-floating'>
            <input
              type='text'
              className='form-control'
              id='last_name'
              placeholder='Last name'
              {...register('last_name', { required: true })}
            />
            <label htmlFor='last_name'>Apellido</label>
          </div>
          <div className='form-floating'>
            <select
              className='form-select'
              id='gender'
              name='gender'
              {...register('gender', { required: true })}
            >
              <option value=''>Seleccione...</option>
              <option value='M'>Hombre</option>
              <option value='F'>Mujer</option>
            </select>
            <label htmlFor='gender'>Genero</label>
          </div>
          <div className='form-floating'>
            <input
              type='email'
              className='form-control'
              id='email'
              name='email'
              placeholder='name@example.com'
              {...register('email', { required: true })}
            />
            <label htmlFor='email'>Email address</label>
          </div>
          <div className='form-floating'>
            <input
              type='password'
              className='form-control'
              id='password'
              name='password'
              placeholder='Password'
              {...register('password', { required: true })}
            />
            <label htmlFor='password'>Contraseña</label>
          </div>
          <div className='form-floating'>
            <select
              className='form-select'
              id='role'
              name='role'
              {...register('role', { required: true })}
            >
              <option value=''>Escoja...</option>
              <option value='ADMIN'>Admin</option>
              <option value='CUSTOMER'>Cliente</option>
            </select>
            <label htmlFor='role'>Rol</label>
          </div>
          <button className='w-100 btn btn-lg btn-primary' type='submit'>
            Sign up
          </button>
          <p className='mt-5 mb-3 text-muted'>© 2017–2022</p>
        </form>
      </main>
    )
  }
export default AccountSignup