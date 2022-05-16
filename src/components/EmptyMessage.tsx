import commentImg from '../assets/comment.svg'

export function EmptyMessage () {
  return (
    <div className='w-[277px] text-center flex items-center justify-center flex-col mx-auto mt-12'>
      <img className='w-[149px]' src={commentImg} alt='Comment image' />
      <h1 className='text-lg font-semibold text-brand-500'>
        Nenhuma pergunta por aqui...
      </h1>
      <p className='mt-3 text-sm text-zinc-500 font-sans'>
        Faça sua primeira pergunta e envie o código dessa sala para outras
        pessoas!
      </p>
    </div>
  )
}
