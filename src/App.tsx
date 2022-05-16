import { FiCopy, FiUsers, FiUser, FiCheck, FiTrash } from 'react-icons/fi'
import { IoMdLock } from 'react-icons/io'

import logoImg from './assets/logo.svg'
import { EmptyMessage } from './components/EmptyMessage'
import { Message } from './components/Message'
import { Routes } from './routes'

const data = {
  ask: 'Oque é Typescript',
  read: true
}

export type AskType = typeof data

function App() {
  return (
    <Routes />
  )
}

export default App
