import { TextField, Typography } from "@material-ui/core";
import React from "react";
import './TextField-container.css';

export default function TextComponent(){
  const [wordCount, setWordCount] = React.useState(0);

  const handleTextChange = (event) => {
    const res = event.target.value
    setWordCount (res.split(/[^a-z]/).filter((str) => str !== '').length);    
  }
  
  

  return (
    <div className="TextField-container">
      <TextField className='TextField-input'
        id="outlined-multiline-static"
        label="Your text"
        multiline
        rows={8}
        variant="outlined"
        onChange={handleTextChange}
      />
      <Typography variant="h3" style={{ marginTop: '100px'}}>Your counted words are: {wordCount}</Typography>
    </div>
  );
}
