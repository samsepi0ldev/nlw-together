import { FiCopy, FiUsers } from 'react-icons/fi'
import { IoMdLock } from 'react-icons/io'

import logoImg from '../assets/logo.svg'
import { Message } from '../components/Message'

const data = {
  ask: 'Oque é Typescript',
  read: true
}

export type AskType = typeof data

export function Main() {

  return (
    <div>
      <header className='px-40 py-9 flex justify-between'>
        <img className='w-40' src={logoImg} alt='rocket.q' />
        <div className='flex gap-2'>
          <button className='flex items-center gap-3 border-2 border-blue-500 py-3 px-4 rounded-lg text-blue-500'>
            #323234 <FiCopy strokeWidth={3} />
          </button>
          <button className='flex items-center gap-3 border-2 border-transparent bg-blue-500 py-3 px-4 rounded-lg text-white'>
          <FiUsers strokeWidth={3} /> Criar sala
          </button>
        </div>
      </header>
      <main className='px-40 mt-9'>
        <h1 className='font-bold text-2xl text-brand-500'>Faça sua pergunta</h1>
        <div className='border-2 border-slate-400 hover:border-blue-500 rounded-lg px-4 py-3 rounded-tl-none mt-9'>
          <input className='font-sans w-full outline-none' type='text' placeholder='O que você quer perguntar?' />
          <footer className='mt-12 flex items-center justify-between'>
            <span className='flex gap-2 items-center text-slate-400'>
              <IoMdLock />
              Esta pergunta é anonima
            </span>
            <button className='flex items-center gap-3 border-2 border-transparent bg-blue-500 py-2 px-6 rounded-lg text-white'>Enviar</button>
          </footer>
        </div>
        <div className='flex gap-2 flex-col mt-9'>
          <Message data={{ ...data, read: false }} />
          <Message data={data} />
          <Message data={{ ...data, read: false }} />
        </div>
      </main>
    </div>
  )
}
