import { TextField, Typography,Grid,FormControl,Button,InputLabel,MenuItem,Select } from "@material-ui/core"
import { useState,useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';

const Form = () => {
  const classes = useStyles();
  const [formData, setFormData] = useState()
  const [open, setOpen] = useState(false);
  
  return (
    <Grid container spacing={2}>
    <Snackbar />
    <Grid item xs={12}>
      <Typography align="center" variant="subtitle2" gutterBottom>
       {/* {isSpeaking ? <BigTranscript /> : 'Start adding transactions'}  */}
      </Typography>
    </Grid>
    </Grid>
  )
}

export default Form