import { TextField, Typography,Grid,FormControl,Button,InputLabel,MenuItem,Select } from "@material-ui/core"
import { useState,useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import useStyles from './styles'

const Form = () => {
  const classes = useStyles();
  const [formData, setFormData] = useState()
  const [open, setOpen] = useState(false);
  
  return (
    <Grid container spacing={2}>

    <Grid item xs={12}>
      <Typography align="center" variant="subtitle2" gutterBottom>
      
      </Typography>
    </Grid>
      <Grid item xs={6}>
       <FormControl fullWidth>
         <InputLabel>Type</InputLabel>
         <Select>
           <MenuItem value='Income'>Income</MenuItem>
           <MenuItem value='Expense'>Expense</MenuItem>
         </Select>
       </FormControl>
       </Grid>
       <Grid item xs={6}>
          <FormControl>
            <InputLabel>Category</InputLabel>
            <Select>
              {/* map values here */}
              <MenuItem value='Income'>Business</MenuItem>
           <MenuItem value='Expense'>Salary</MenuItem>
            </Select>
          </FormControl>
       </Grid>
     <Grid item xs={6}>
     <TextField fullWidth type='number' label='Amount'/>
     </Grid>
     <Grid item xs={6}>
     <TextField fullWidth type='date' label=''/>
     </Grid>
     <Button className={classes.button} variant='outlined' color='primary' fullWidth>Add</Button>
    </Grid>
  )
}

export default Form