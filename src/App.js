import React, {useState} from 'react';
import Style from './App.scss'

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import {Box, Grid} from "@mui/material";


import Board from '../src/components/leaderboard/Board';
import Navbar from './components/base/navbar/Navbar';
import './assets/style.css';

export default function App() {
  
  let [darkMode, setDarkMode] = useState(false);

  function handleClick() {
     setDarkMode(!darkMode);
  }

  return (
    <Router>
    <Box className={darkMode ? Style.dark : Style.light}>
    <Grid container display={'flex'} flexDirection={'column'} minHeight={'100vh'}
          justifyContent={'space-between'}>
       <Grid item>
          <Navbar darkMode={darkMode} handleClick={handleClick}/>
       </Grid>
       <Grid item flexGrow={1}>
          <Routes>
            <Route path="/board" component={Board}/>
            <Route path="/" component={Board}/>
          </Routes>
       </Grid>
       <Grid item>
          <Box component={'footer'} display={'flex'} flexDirection={'column'} alignItems={'center'}
               py={'1.5rem'} sx={{opacity: 0.7}} width={'100%'}>
             <p>Created by <a href={'https://github.com/Andrew-Vasili/'}>Andrew Vasili</a></p>
             <p>&copy; 2022</p>
          </Box>
       </Grid>
    </Grid>
 </Box>
 </Router>

  );
}


