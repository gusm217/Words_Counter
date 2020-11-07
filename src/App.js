import './App.css';
import { Typography } from '@material-ui/core';
import TextComponent from './TextComponent';

function App() {
  return (
    <div className="App">
      <Typography variant="h2">Type your text to start counting words</Typography>
      <TextComponent></TextComponent>
    </div>
  );
}

export default App;