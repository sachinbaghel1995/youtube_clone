import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { Box } from '@mui/material';
import VideoDetail from './components/VideoDetail';
import Feed from './components/Feed';
import ChannelDetail from './components/ChannelDetail';
import SearchFeed from './components/SearchFeed';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
    <Box sx={{backgroundColor:"#000"}}>
      <Navbar/>
       <Routes>
        <Route path='/' exact element={<Feed/>}></Route>
        <Route path='/video/:id' exact element={<VideoDetail/>}></Route>
        <Route path='/channel/:id' exact element={<ChannelDetail/>}></Route>
        <Route path='/search/:searchTerm' exact element={<SearchFeed/>}></Route>
       </Routes>
    </Box>
    </BrowserRouter>
  )
    
  
}

export default App;
