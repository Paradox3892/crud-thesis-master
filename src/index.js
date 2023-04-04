import { Box } from '@mui/material';
import React, { useRef, useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// Handpose imports
import * as tf from '@tensorflow/tfjs';
import * as handpose from '@tensorflow-models/handpose';
import Webcam from 'react-webcam';
import { drawHand } from './utilities/utilities';
import * as fp from 'fingerpose';
import victory from './assets/victory.png';
import thumbs_up from './assets/thumbsup.png';
import thumbs_down from './assets/thumbsdown.png';
import open_palm from './assets/openpalm.png';
import okay_sign from './assets/okay.png';
import ily_gesture from './assets/iloveyou.png';
import rockandroll_sign from './assets/rockandroll.png';
import telephone_gesture from './assets/telephone.png';

// Utilities
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { history } from './utilities/history';
// Components
import { Container } from '@mui/system';
import Header from './components/header';
// Pages
import PostQuiz from './pages/postQuiz';
import Quiz from './pages/quiz';
import Login from './pages/login';
import NotFound from './pages/notFound';

// Colors
import { grey } from '@mui/material/colors';

function App() {
  const currentPage = window.location.pathname;
  if (currentPage === '/') {
    history.push('/quiz');
    history.go(0);
  }
  return (
    <Box
      sx={{
        minHeight: '100vh',
        minWidth: '100vw',
        background: '#2f3848',
        color: grey[50],
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Header />
      <Container sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <BrowserRouter>
          <Routes>
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/post-quiz" element={<PostQuiz />} />
            <Route path="/login" element={<Login />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </Box>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
