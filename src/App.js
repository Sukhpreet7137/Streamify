import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import {Box} from '@mui/material'
// How to import all components as one
import {Navbar,Feed,SearchFeed,VideoDetail,ChannelDetail} from './Components';
function App() {
  return (
    <BrowserRouter>
  {/* Box is just like Div(Container) and sx act as its prop */}
      <Box sx={{backgroundColor:'#000'}}>
         <Navbar/>
        <Routes>
          <Route path='/' exact element={<Feed/>}/>
          <Route path='/video/:id' element={<VideoDetail/>}/>
          <Route path='/channel/:id' exact element={<ChannelDetail/>}/>
          <Route path='/search/:searchTerm' exact element={<SearchFeed/>}/>
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
