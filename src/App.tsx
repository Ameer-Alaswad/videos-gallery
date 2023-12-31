
import { Box } from '@mui/material'
import './App.css'
import Header from './components/header'
import StandardImageList from './components/videos-studio'

function App() {

  return (
    <Box sx={ { height: "100vh" } }>
      <Header />
      <StandardImageList />
    </Box>
  )
}

export default App
