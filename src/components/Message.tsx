import { Dialog } from '@headlessui/react'
import { useState } from 'react'
import { FiCheck, FiTrash, FiUser } from 'react-icons/fi'
import { AskType } from '../pages/main'

interface MessageProps {
  data: AskType
}

export function Message ({ data }: MessageProps) {
  const [isOpenModal, setIsOpenModal] = useState(false)
  return (
    <>
      <div
        className={`font-sans w-full ${
          data.read ? 'bg-slate-200' : 'bg-blue-200'
        } rounded-lg p-6 rounded-tl-none`}
      >
        <div className='flex items-center gap-4 text-brand-500'>
          <div
            className={`flex items-center justify-center text-2xl text-white w-12 h-12 rounded-full ${
              data.read ? 'bg-slate-400' : 'bg-blue-500'
            }`}
          >
            <FiUser />
          </div>
          <p>{data.ask}</p>
        </div>
        <footer>
          <div className='w-fit flex gap-6 text-slate-600 ml-auto'>
            <button className='font-normal flex gap-2 items-center'>
              <FiCheck className='text-blue-500' />
              {data.read ? 'Pergunta lida' : 'Marcar como lida'}
            </button>
            {!data.read ? (
              <button
                onClick={() => setIsOpenModal(true)}
                className='font-normal flex gap-2 items-center'
              >
                <FiTrash className='text-red-600' />
                Excluir
              </button>
            ) : null}
          </div>
        </footer>
      </div>

      <Dialog open={isOpenModal} onClose={() => setIsOpenModal(false)}>
        <div className='fixed top-0 left-0 bottom-0 right-0 bg-[#040911ce] flex items-center justify-center'>
          <Dialog.Panel className='flex flex-col justify-center items-center bg-white rounded-lg w-[590px] py-16'>
            <Dialog.Title className='text-2xl font-bold text-brand-500'>
              Excluir pergunta
            </Dialog.Title>
            <Dialog.Description className='text-base text-zinc-600 mt-3'>
              Tem certeza que você deseja excluir esta pergunta?
            </Dialog.Description>

            <input
              className='font-sans py-3 px-4 border-2 rounded-lg mt-6 mb-10 w-[300px]'
              type='password'
              placeholder='Insira o código da sala'
            />

            <div className='flex gap-2'>
              <button
                className='py-3 px-8 bg-zinc-200 text-zinc-800 rounded-lg'
                onClick={() => setIsOpenModal(false)}
              >
                Cancelar
              </button>
              <button
                className='py-3 px-8 bg-rose-600 text-zinc-100 rounded-lg'
                onClick={() => {}}
              >
                Sim, excluir
              </button>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  )
}
