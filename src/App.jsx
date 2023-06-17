import { Routes, Route } from 'react-router-dom'
// styles 
import './App.css'
// components
import Form from './components/Form'
// pages
import Home from './pages/Home'
import Recipe from './pages/recipe/Recipe'
import ResultList from './components/ResultList'
import NotFound from './pages/not-found/NotFound'

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} >
          <Route path='/' element={<Form />} />
          <Route path='/:searchTerm' element={<ResultList />} />
          <Route path='/recipes/:id' element={<Recipe />} />
          <Route path='/not-found' element={<NotFound />} />
        </Route>

      </Routes>
    </div>
  )
}

export default App
