import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './lib/store/redux.ts'
import { BrowserRouter } from './lib/router/router-provider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter />
    </Provider>
  </StrictMode>,
)
