import { FiUsers, FiLogIn } from 'react-icons/fi'

import { Illustration } from '../components/Illustration'

export function SignIn () {

  return (
    <div className='flex justify-between'>
      <Illustration />

      <div className='mr-60 pt-40 flex items-center flex-col w-full max-w-[363px]'>
        <h1 className='font-bold text-2xl text-brand-500'>Entre como participante</h1>
        <form className='w-full flex flex-col mt-6 gap-4 text-sm'>
          <input className='font-sans w-full border-2 rounded-lg border-slate-400 placeholder:text-slate-400 px-4 py-3' type="text" name='coderoom' placeholder='Código da sala' />
          <button className='w-full bg-blue-500 py-3 rounded-lg text-white flex items-center justify-center'>
            <FiLogIn strokeWidth={3} className='mr-3' />
            Entrar na sala
          </button>
        </form>
        <span className='w-full text-slate-400 my-10 flex items-center justify-center after:content-[""] after:w-full after:h-[1px] after:bg-slate-400 after:ml-2 before:content-[""] before:w-full before:h-[1px] before:bg-slate-400 before:mr-2'>
          ou
        </span>
        <div className='flex flex-col gap-6'>
          <h1 className='font-bold text-2xl text-brand-500'>Crie sua própria sala, de forma fácil</h1>
          <a className='w-full text-sm flex items-center justify-center font-bold bg-transparent py-[10px] rounded-lg border-2 border-blue-500 text-blue-500' href='/create-room'>
            <FiUsers strokeWidth={3} className='mr-3' />
            Criar sala
          </a>
        </div>
      </div>
    </div>
  )
}
