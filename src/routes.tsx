import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom'

import { SignIn, SignUp, Main } from './pages'

export function Routes () {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/create-room' element={<SignUp />} />
        <Route path='/' element={<Main />} />
      </Switch>
    </BrowserRouter>
  )
}
