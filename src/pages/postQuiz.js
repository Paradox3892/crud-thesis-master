import { Box, Container, Typography } from '@mui/material';
import { green } from '@mui/material/colors';

export default function PostQuiz() {
  const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
  });
  // Get the value of "some_key" in eg "https://example.com/?some_key=some_value"
  let score = params.score; // "some_value"

  let text = "";
  let scoreInt = parseInt(score);
  switch(true){
    case(scoreInt < 5):
      text = "Care to try again"
      break;

    case(scoreInt >= 5 && scoreInt < 7):
      text = "Almost there, want to try again?";
      break;
    
    case(scoreInt >= 7 && scoreInt < 10):
      text = "Great Job!";
      break;
    
    case(scoreInt === 10):
      text = "Perfect Score!";
      break;
    default:
  }
  
  return (
    <Box
      sx={{
        p: 2,
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Container
        sx={{
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: '15rem',
            fontWeight: 500,
            '&> span': {
              color: green[500],
            },
          }}
        >
          <span>{score}</span>/10
        </Typography>
        <Typography variant="h6">{text}</Typography>
      </Container>
    </Box>
  );
}
