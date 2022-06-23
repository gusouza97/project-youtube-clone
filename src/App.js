import { createTheme, ThemeProvider } from '@mui/material/styles';
import Home from './Home';

function App() {

  const theme = createTheme({
    palette: {
      primary: {
        main: '#f44336'
      },
      secondary: {
        main: '#3f51b5'
      }
    },
    spacing: 4
  });

  return (
    <ThemeProvider theme={theme}>
        <Home/>
    </ThemeProvider>
  );
}

export default App;
