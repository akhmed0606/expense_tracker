import  Details  from './Components/Details/Details'
import { Grid } from '@material-ui/core'

function App() {
  return (
    <div>
    <Grid container spacing={0} alignItems='center' justifyContent='center' style={{height: '100vh'}}>
   <Grid item sm={12} xs={5}>
      <Details />
   </Grid>
    </Grid>
    </div>
  );
}

export default App;
