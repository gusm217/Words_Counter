import { TextField, Typography } from "@material-ui/core";
import React from "react";

export default function TextComponent(){
  const [wordCount, setWordCount] = React.useState(0);

  const handleTextChange = (event) => {
    const res= event.target.value.split(' ');
    setWordCount(res.length);
  }
  return (
    <div>
      <TextField
        id="outlined-multiline-static"
        label=""
        multiline
        rows={4}
        defaultValue="Type your text here..."
        variant="outlined"
        onChange={handleTextChange}
      />
      <Typography variant="h3">Your counted words are: {wordCount}</Typography>
    </div>
  );
}
