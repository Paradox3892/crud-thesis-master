import React, { useRef, useState, useEffect } from 'react';
import {
  Box,
  Button,
  LinearProgress,
  Paper,
  Switch,
  Typography,
} from '@mui/material';
import { deepPurple, grey, teal, green, red } from '@mui/material/colors';
import '../index.css';
// Handpose imports
// eslint-disable-next-line
import * as tf from '@tensorflow/tfjs';
import * as handpose from '@tensorflow-models/handpose';
import Webcam from 'react-webcam';
import { drawHand } from '../utilities/utilities';
import * as fp from 'fingerpose';

import { images, questions } from '../utilities/assets';
import { history } from '../utilities/history';

export default function Quiz() {
  // VARIABLES
  // Style
  const videoComponentHeight = 300;
  const [showSkeleton, setShowSkeleton] = useState(true);
  const showSkeletonChange = (e) => {
    setShowSkeleton(e.target.checked);
  };
  // Build Model
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  const [emoji, setEmoji] = useState(null);
  const [selectedGesture, setSelectedGesture] = useState(0);
  const [finalAnswer, setFinalAnswer] = useState(0);
  // Fingerposes
  // const gestureVictory = fp.Gestures.Victory;
  // const gestureThumbsUp = fp.Gestures.ThumbsUpGesture;
  const gestureThumbsDown = new fp.GestureDescription('thumbs_down');
  gestureThumbsDown.addCurl(fp.Finger.Thumb, fp.FingerCurl.NoCurl);
  gestureThumbsDown.addDirection(
    fp.Finger.Thumb,
    fp.FingerDirection.VerticalDown,
    1.0
  );
  gestureThumbsDown.addDirection(
    fp.Finger.Thumb,
    fp.FingerDirection.DiagonalDownLeft,
    0.9
  );
  gestureThumbsDown.addDirection(
    fp.Finger.Thumb,
    fp.FingerDirection.DiagonalDownRight,
    0.9
  );

  for (let finger of [
    fp.Finger.Index,
    fp.Finger.Middle,
    fp.Finger.Ring,
    fp.Finger.Pinky,
  ]) {
    gestureThumbsDown.addCurl(finger, fp.FingerCurl.FullCurl, 1.0);
    gestureThumbsDown.addCurl(finger, fp.FingerCurl.HalfCurl, 0.9);
  }
  const gestureOpenPalm = new fp.GestureDescription('open_palm');
  for (let finger of [
    fp.Finger.Thumb,
    fp.Finger.Index,
    fp.Finger.Middle,
    fp.Finger.Ring,
    fp.Finger.Pinky,
  ]) {
    gestureOpenPalm.addCurl(finger, fp.FingerCurl.NoCurl, 1.0);
    gestureOpenPalm.addCurl(finger, fp.FingerCurl.HalfCurl, 0.9);
    gestureOpenPalm.addDirection(finger, fp.FingerDirection.VerticalUp, 1.0);
    gestureOpenPalm.addDirection(
      finger,
      fp.FingerDirection.DiagonalUpRight,
      0.9
    );
    gestureOpenPalm.addDirection(
      finger,
      fp.FingerDirection.DiagonalUpLeft,
      0.9
    );
  }
  const gestureOkay = new fp.GestureDescription('okay');
  gestureOkay.addCurl(fp.Finger.Thumb, fp.FingerCurl.HalfCurl);
  gestureOkay.addDirection(fp.Finger.Thumb, fp.FingerDirection.VerticalUp, 0.9);
  gestureOkay.addDirection(
    fp.Finger.Thumb,
    fp.FingerDirection.DiagonalUpRight,
    0.9
  );
  gestureOkay.addDirection(
    fp.Finger.Thumb,
    fp.FingerDirection.DiagonalUpLeft,
    0.9
  );
  //okSign index
  gestureOkay.addCurl(fp.Finger.Index, fp.FingerCurl.HalfCurl);
  gestureOkay.addDirection(
    fp.Finger.Index,
    fp.FingerDirection.VerticalDown,
    0.9
  );
  gestureOkay.addDirection(
    fp.Finger.Index,
    fp.FingerDirection.DiagonalUpRight,
    0.9
  );
  gestureOkay.addDirection(
    fp.Finger.Index,
    fp.FingerDirection.DiagonalUpLeft,
    1.0
  );
  //okSign middle
  gestureOkay.addDirection(fp.Finger.Middle, fp.FingerCurl.NoCurl);
  gestureOkay.addDirection(
    fp.Finger.Middle,
    fp.FingerDirection.VerticalUp,
    1.0
  );
  gestureOkay.addDirection(
    fp.Finger.Middle,
    fp.FingerDirection.DiagonalUpLeft,
    0.9
  );
  gestureOkay.addDirection(
    fp.Finger.Middle,
    fp.FingerDirection.DiagonalUpRight,
    0.9
  );
  //okaySign ring
  gestureOkay.addDirection(fp.Finger.Ring, fp.FingerCurl.NoCurl);
  gestureOkay.addDirection(fp.Finger.Ring, fp.FingerDirection.VerticalUp, 1.0);
  gestureOkay.addDirection(
    fp.Finger.Ring,
    fp.FingerDirection.DiagonalUpLeft,
    0.9
  );
  gestureOkay.addDirection(
    fp.Finger.Ring,
    fp.FingerDirection.DiagonalUpRight,
    0.9
  );
  //okaySign pinky
  gestureOkay.addDirection(fp.Finger.Pinky, fp.FingerCurl.NoCurl);
  gestureOkay.addDirection(fp.Finger.Pinky, fp.FingerDirection.VerticalUp, 1.0);
  gestureOkay.addDirection(
    fp.Finger.Pinky,
    fp.FingerDirection.DiagonalUpLeft,
    0.9
  );
  gestureOkay.addDirection(
    fp.Finger.Pinky,
    fp.FingerDirection.DiagonalUpRight,
    0.9
  );
  const gestureILoveYou = new fp.GestureDescription('i_love_you');
  gestureILoveYou.addCurl(fp.Finger.Thumb, fp.FingerCurl.NoCurl);
  gestureILoveYou.addDirection(
    fp.Finger.Thumb,
    fp.FingerDirection.VerticalUp,
    1.0
  );
  gestureILoveYou.addDirection(
    fp.Finger.Thumb,
    fp.FingerDirection.DiagonalUpLeft,
    0.9
  );
  gestureILoveYou.addDirection(
    fp.Finger.Thumb,
    fp.FingerDirection.DiagonalUpRight,
    0.9
  );
  //ILY index
  gestureILoveYou.addCurl(fp.Finger.Index, fp.FingerCurl.NoCurl);
  gestureILoveYou.addDirection(
    fp.Finger.Index,
    fp.FingerDirection.VerticalUp,
    1.0
  );
  gestureILoveYou.addDirection(
    fp.Finger.Index,
    fp.FingerDirection.DiagonalUpLeft,
    0.9
  );
  gestureILoveYou.addDirection(
    fp.Finger.Index,
    fp.FingerDirection.DiagonalUpRight,
    0.9
  );
  //ILY middle
  gestureILoveYou.addCurl(fp.Finger.Middle, fp.FingerCurl.FullCurl);
  gestureILoveYou.addDirection(
    fp.Finger.Middle,
    fp.FingerDirection.VerticalUp,
    1.0
  );
  gestureILoveYou.addCurl(fp.Finger.Middle, fp.FingerCurl.FullCurl);
  gestureILoveYou.addDirection(
    fp.Finger.Middle,
    fp.FingerDirection.DiagonalUpRight,
    0.9
  );
  gestureILoveYou.addCurl(fp.Finger.Middle, fp.FingerCurl.FullCurl);
  gestureILoveYou.addDirection(
    fp.Finger.Middle,
    fp.FingerDirection.DiagonalUpLeft,
    0.9
  );
  //ILY ring
  gestureILoveYou.addCurl(fp.Finger.Ring, fp.FingerCurl.NoCurl);
  gestureILoveYou.addDirection(
    fp.Finger.Ring,
    fp.FingerDirection.VerticalUp,
    1.0
  );
  gestureILoveYou.addDirection(
    fp.Finger.Ring,
    fp.FingerDirection.DiagonalUpLeft,
    0.9
  );
  gestureILoveYou.addDirection(
    fp.Finger.Ring,
    fp.FingerDirection.DiagonalUpRight,
    0.9
  );
  //ILY pinky
  gestureILoveYou.addCurl(fp.Finger.Pinky, fp.FingerCurl.NoCurl);
  gestureILoveYou.addDirection(
    fp.Finger.Pinky,
    fp.FingerDirection.VerticalUp,
    1.0
  );
  gestureILoveYou.addDirection(
    fp.Finger.Pinky,
    fp.FingerDirection.DiagonalUpRight,
    0.9
  );
  gestureILoveYou.addDirection(
    fp.Finger.Pinky,
    fp.FingerDirection.DiagonalUpLeft,
    0.9
  );
  const gestureRockAndRoll = new fp.GestureDescription('rock_and_roll');

  gestureRockAndRoll.addCurl(fp.Finger.Thumb, fp.FingerCurl.FullCurl);
  gestureRockAndRoll.addDirection(
    fp.Finger.Thumb,
    fp.FingerDirection.VerticalUp,
    1.0
  );
  gestureRockAndRoll.addDirection(
    fp.Finger.Thumb,
    fp.FingerDirection.DiagonalUpLeft,
    0.9
  );
  gestureRockAndRoll.addDirection(
    fp.Finger.Thumb,
    fp.FingerDirection.DiagonalUpRight,
    0.9
  );

  gestureRockAndRoll.addDirection(
    fp.Finger.Thumb,
    fp.FingerDirection.VerticalUp,
    1.0
  );
  gestureRockAndRoll.addDirection(
    fp.Finger.Thumb,
    fp.FingerDirection.DiagonalUpLeft,
    0.9
  );
  gestureRockAndRoll.addDirection(
    fp.Finger.Thumb,
    fp.FingerDirection.DiagonalUpRight,
    0.9
  );

  //rr index
  gestureRockAndRoll.addCurl(fp.Finger.Index, fp.FingerCurl.NoCurl);
  gestureRockAndRoll.addDirection(
    fp.Finger.Index,
    fp.FingerDirection.VerticalUp,
    1.0
  );
  gestureRockAndRoll.addDirection(
    fp.Finger.Index,
    fp.FingerDirection.DiagonalUpLeft,
    0.9
  );
  gestureRockAndRoll.addDirection(
    fp.Finger.Index,
    fp.FingerDirection.DiagonalUpRight,
    0.9
  );
  //rr middleFinger
  gestureRockAndRoll.addCurl(fp.Finger.Middle, fp.FingerCurl.FullCurl);
  gestureRockAndRoll.addDirection(
    fp.Finger.Middle,
    fp.FingerDirection.VerticalUp,
    1.0
  );
  gestureRockAndRoll.addDirection(
    fp.Finger.Middle,
    fp.FingerDirection.DiagonalUpLeft,
    0.9
  );
  gestureRockAndRoll.addDirection(
    fp.Finger.Middle,
    fp.FingerDirection.DiagonalUpRight,
    0.9
  );
  // rr ringFinger
  gestureRockAndRoll.addCurl(fp.Finger.Ring, fp.FingerCurl.FullCurl);
  gestureRockAndRoll.addDirection(
    fp.Finger.Ring,
    fp.FingerDirection.VerticalUp,
    1.0
  );
  gestureRockAndRoll.addDirection(
    fp.Finger.Ring,
    fp.FingerDirection.DiagonalUpLeft,
    0.9
  );
  gestureRockAndRoll.addDirection(
    fp.Finger.Ring,
    fp.FingerDirection.DiagonalUpRight,
    0.9
  );
  //rr pinkyFinger
  gestureRockAndRoll.addCurl(fp.Finger.Pinky, fp.FingerCurl.NoCurl);
  gestureRockAndRoll.addDirection(
    fp.Finger.Pinky,
    fp.FingerDirection.VerticalUp,
    1.0
  );
  gestureRockAndRoll.addDirection(
    fp.Finger.Pinky,
    fp.FingerDirection.DiagonalUpLeft,
    0.9
  );
  gestureRockAndRoll.addDirection(
    fp.Finger.Pinky,
    fp.FingerDirection.DiagonalUpRight,
    0.9
  );

  gestureRockAndRoll.addDirection(
    fp.Finger.Pinky,
    fp.FingerDirection.VerticalUp,
    1.0
  );
  gestureRockAndRoll.addDirection(
    fp.Finger.Pinky,
    fp.FingerDirection.DiagonalUpLeft,
    0.9
  );
  gestureRockAndRoll.addDirection(
    fp.Finger.Pinky,
    fp.FingerDirection.DiagonalUpRight,
    0.9
  );
  const gestureTelephone = new fp.GestureDescription('telephone');
  gestureTelephone.addCurl(fp.Finger.Thumb, fp.FingerCurl.NoCurl);
  //telephone pinkyFinger
  gestureTelephone.addCurl(fp.Finger.Pinky, fp.FingerCurl.NoCurl);
  //telephone index, middle, ring
  for (let finger of [fp.Finger.Index, fp.Finger.Middle, fp.Finger.Ring]) {
    gestureTelephone.addCurl(finger, fp.FingerCurl.FullCurl, 1.0);
    gestureTelephone.addCurl(finger, fp.FingerCurl.HalfCurl, 0.9);
  }
  // Questions
  const [questionNumber, setQuestionNumber] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(0);
  const [showSelectedAnswer, setShowSelectedAnswer] = useState(false);
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);

  const [checkingAnswer, setCheckingAnswer] = useState(false);

  // FUNCTIONS
  // Model
  const detect = async (net) => {
    // Check data is available
    if (
      typeof webcamRef.current !== 'undefined' &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    ) {
      // Get Video Properties
      const video = webcamRef.current.video;
      const videoWidth = webcamRef.current.video.videoWidth;
      const videoHeight = webcamRef.current.video.videoHeight;

      // Set video width
      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;

      // Set canvas height and width
      canvasRef.current.width = videoWidth;
      canvasRef.current.height = videoHeight;

      // Make Detections
      const hand = await net.estimateHands(video);
      // console.log(hand);

      ///////// NEW STUFF ADDED GESTURE HANDLING
      var returnValue = 0;
      if (hand.length > 0) {
        const GE = new fp.GestureEstimator([
          // fp.Gestures.Victory,
          fp.Gestures.ThumbsUpGesture,
          gestureThumbsDown,
          gestureOpenPalm,
          gestureOkay,
          gestureILoveYou,
          gestureRockAndRoll,
          gestureTelephone,
          // constant name
        ]);
        // console.log(GE);
        const gesture = await GE.estimate(hand[0].landmarks, 4);
        // console.log(gesture);
        if (gesture.gestures && gesture.gestures.length > 0) {
          // console.log(gesture.gestures);

          const confidence = gesture.gestures.map(
            (prediction) => prediction.score
          );
          var maxConfidence = confidence.indexOf(
            Math.max.apply(null, confidence)
          );
          var maxConfidenceValue = gesture.gestures[maxConfidence].name;
          // console.log(gesture.gestures);
          // console.log(gesture.gestures[maxConfidence].name);
          setEmoji(maxConfidenceValue);
          // console.log(emoji);
          console.log('Max Confidence: ', maxConfidenceValue);

          if (maxConfidenceValue === 'open_palm') {
            returnValue = 1;
          } else if (maxConfidenceValue === 'thumbs_up') {
            returnValue = 2;
          } else if (maxConfidenceValue === 'okay') {
            returnValue = 3;
          } else if (maxConfidenceValue === 'i_love_you') {
            returnValue = 4;
          } else {
            returnValue = 0;
          }
        }
      } else {
        setEmoji(null);
      }

      ///////// NEW STUFF ADDED GESTURE HANDLING

      // Draw mesh
      const ctx = canvasRef.current.getContext('2d');
      drawHand(hand, ctx);

      return returnValue;
    }
  };
  function runHandpose(net) {
    console.log('Handpose model loaded.');
    setInterval(() => {
      detect(net).then((result) => {
        setSelectedGesture(result);
      });
    }, 1000);
  }
  function getFinalAnswer(answer) {
    if (answer !== 0) {
      // new Promise((res) => setTimeout(res, 3000)).then(() => {
      //   console.log(selectedAnswer, answer);
      //   if (selectedAnswer === answer) {
      //     if (selectedGesture === answer) {
      //       setFinalAnswer(selectedGesture);
      //     } else {
      //       setFinalAnswer(0);
      //     }
      //   }
      // });
      setTimeout(() => {
        console.log(selectedAnswer, answer);
        if (selectedAnswer === answer) {
          if (selectedGesture === answer) {
            setFinalAnswer(selectedGesture);
          } else {
            setFinalAnswer(0);
          }
        }
      }, 3000);
    }
  }
  function incQuestionNumber() {
    if (questionNumber < questions.length - 1) {
      setQuestionNumber(questionNumber + 1);
    } else {
      history.push({ pathname: '/post-quiz', search: `?score=${score}` });
      history.go(0);
    }
  }

  function checkCorrectAnswer() {
    const answerOption = questions[questionNumber]?.answerOptions?.[finalAnswer - 1];
    if (answerOption && answerOption.isCorrect) {
      setScore(score + 1);
    }
    setShowCorrectAnswer(true);
    setTimeout(() => {
      setShowCorrectAnswer(false);
      incQuestionNumber();
      setSelectedAnswer(0);
      setFinalAnswer(0);
    }, 3000);
  }
  

  // EFFECTS

  useEffect(() => {
    handpose.load().then((result) => {
      runHandpose(result);
    });
  }, []);

  useEffect(() => {
    if (selectedGesture !== 0) {
      setShowSelectedAnswer(true);
      setSelectedAnswer(selectedGesture);
    } else {
      setShowSelectedAnswer(false);
      setSelectedAnswer(selectedGesture);
    }
  }, [selectedGesture]);

  useEffect(() => {
    if (selectedAnswer !== 0) {
      getFinalAnswer(selectedAnswer);
    }
  }, [selectedAnswer]);

  useEffect(() => {
    if (finalAnswer !== 0) {
      checkCorrectAnswer();
    }
  }, [finalAnswer]);
  console.log('Selected Answer: ', selectedAnswer);

  return (
    <Box
      sx={{
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'flex-top',
        }}
      >
        <Box>
          <Box
            sx={{
              my: 1,
              gap: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
            }}
          >
            <Typography>Show skeleton</Typography>
            <Switch
              size="small"
              checked={showSkeleton}
              onChange={showSkeletonChange}
            />
          </Box>
          <Box
            sx={{
              height: `${videoComponentHeight}px`,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'relative',
            }}
          >
            <Webcam
              ref={webcamRef}
              style={{
                height: `${videoComponentHeight}px`,
                width: 'auto',
                boxShadow: `0 4px 8px -4px rgba(0, 0, 0, 0.75)`,
                borderRadius: '10px',
                boxSizing: 'border-box',
                zIndex: 1,
              }}
            />
            <canvas
              ref={canvasRef}
              style={{
                height: `${videoComponentHeight}px`,
                width: 'auto',
                zIndex: 2,
                position: 'absolute',
                display: showSkeleton ? 'block' : 'none',
              }}
            />

            {emoji && (
              <Box
                sx={{
                  right: '15px',
                  bottom: '15px',
                  background: teal[700],
                  borderRadius: '10px',
                  position: 'absolute',
                  aspectRatio: '1/1',
                  transition: 'all 0.5s ease',
                  zIndex: 3,
                }}
              >
                <img
                  src={images[emoji]}
                  style={{
                    height: `${videoComponentHeight / 3}px`,
                    width: 'auto',
                  }}
                />
              </Box>
            )}
          </Box>
        </Box>
      </Box>
      <Box sx={{ mt: 8, display: 'flex', justifyContent: 'space-between' }}>
        <Box sx={{ flexGrow: 1 }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant="h3" sx={{ color: teal[300] }}>
              Question {questionNumber + 1}
            </Typography>
            <Typography variant="h5" sx={{ color: grey[300] }}>
              /{questions.length}
            </Typography>
          </Box>
          <LinearProgress
            variant="determinate"
            value={((questionNumber + 1) / questions.length) * 100}
            sx={{ background: teal[50], color: teal[400] }}
            color="inherit"
          />
        </Box>
        <Box
          sx={{
            flexGrow: 8,
            display: 'flex',
            justifyContent: 'flex-end',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography variant="h5" sx={{ color: grey[300] }}>
              Score:
            </Typography>
            <Typography variant="h3" sx={{ color: teal[300] }}>
              {score}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ mt: 4 }}>
          <Typography variant="h3">
            {questions[questionNumber].questionText}
          </Typography>
        </Box>
        <Box
          sx={{ mt: 4, flexGrow: 1, display: 'flex', flexDirection: 'column' }}
        >
          {questions[questionNumber].answerOptions.map((option, index) => (
            <Paper
              key={index}
              sx={{
                mb: 1,
                p: 2,
                background: showCorrectAnswer
                  ? option.isCorrect
                    ? green[700]
                    : red[700]
                  : showSelectedAnswer
                  ? selectedGesture - 1 === index
                    ? deepPurple[700]
                    : deepPurple[500]
                  : deepPurple[500],
                color: grey[50],
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Typography
                variant="h2"
                sx={{ mr: 2, width: '2ch', textAlign: 'center' }}
              >
                {option.symbol}
              </Typography>
              <Typography variant="h5">{option.answerText}</Typography>
            </Paper>
          ))}
        </Box>
        <Box sx={{ mt: 2, display: 'flex', justifyContent: 'flex-end' }}>
          <Button
            onClick={() => {
              incQuestionNumber();
            }}
            size="large"
            sx={{
              background: grey[200],
              color: teal[400],
              '&:hover': {
                background: grey[300],
              },
            }}
          >
            <Typography variant="h6">Skip question</Typography>
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
