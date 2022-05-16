import logoImg from '../assets/logo.svg'
import illustrationImg from '../assets/illustration.png'

export function Illustration () {
  return (
    <div className='flex flex-col'>
      <img className='w-40 ml-40 my-9' src={logoImg} alt='rocket.q' />
      <img className='w-[80%]' src={illustrationImg} alt='Illustration Image' />
    </div>
  )
}
