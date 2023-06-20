// styles 
import './App.css'
// hooks
import { Routes, Route } from 'react-router-dom'
// components
import Form from './components/Form'
// pages
import Home from './pages/Home'
import Recipe from './pages/recipe/Recipe'
import ResultList from './pages/result-list/ResultList'
import NotFound from './pages/not-found/NotFound'

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} >
          <Route path='/' element={<Form />} />
          <Route path='/search/:searchTerm' element={<ResultList />} />
          <Route path='/area/:area' element={<ResultList />} />
          <Route path='/recipes/:id' element={<Recipe />} />
          <Route path='/not-found' element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
