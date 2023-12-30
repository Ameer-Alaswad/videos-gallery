
import { Box } from '@mui/material'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Header from './components/header'

function App() {

  return (
    <Box>
      <Router>
        <Routes>
          <Route path="/" element={ <Header /> } />
        </Routes>
      </Router>
    </Box>
  )
}

export default App
