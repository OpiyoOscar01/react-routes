import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux';
import {store} from './redux/store'
import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query';
import './index.css'
import App from './App'

const queryClient=new QueryClient();

createRoot(document.getElementById('root')).render(
 <StrictMode>
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>  
      <App />
    </Provider>
  </QueryClientProvider>
  </StrictMode>,
)
