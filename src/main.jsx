import { createRoot } from 'react-dom/client'

import App from './routes//home/App'
import { BrowserRouter, Routes, Route } from 'react-router'
import ListAccess from './routes//getlist/listAccess'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}/>  
      <Route path="access/:id" element={<ListAccess />}></Route>
    </Routes>
  </BrowserRouter>,
)
