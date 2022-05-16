import { FiUsers } from 'react-icons/fi'

import { Illustration } from '../components/Illustration'

export function SignUp () {

  return (
    <div className='flex justify-between'>
      <Illustration />

      <div className='mr-60 pt-40 flex items-center flex-col w-full max-w-[363px]'>
        <h1 className='font-bold text-2xl text-brand-500'>Entre como participante</h1>
        <form className='flex flex-col mt-6 gap-4 text-sm'>
          <input className='font-sans w-full border-2 rounded-lg focus:border-blue-500 focus:outline-none border-slate-400 placeholder:text-slate-400 px-4 py-3' type="password" name='coderoom' placeholder='Insira uma senha' />
          <button className='w-full bg-blue-500 py-3 rounded-lg text-white flex items-center justify-center'>
            <FiUsers strokeWidth={3} className='mr-3' />
            Criar sala
          </button>
        </form>
      </div>
    </div>
  )
}
