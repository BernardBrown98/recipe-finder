// styles 
import './App.css'
// hooks
import { Routes, Route } from 'react-router-dom'
// pages
import Home from './pages/Home'
import Recipe from './pages/recipe/Recipe'
import ResultList from './pages/result-list/ResultList'
import NotFound from './pages/NotFound'
import Latest from './pages/Latest'

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} >
          <Route path='/' element={<Latest />} />
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
