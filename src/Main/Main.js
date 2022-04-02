import { Card, CardHeader,CardContent,Typography,Grid,Divider} from '@material-ui/core'
import Form from './Form/Form'
import useStyles from './styles'

const Main = () => {
  const classes = useStyles()
  return (
   <Card className={classes.root}>
     <CardHeader title='Expense Tracker' subheader='Speechly' />
      <CardContent>
        <Typography align='center' variant='h5'>Total Balanse</Typography>
        <Typography variant='subtitle1'>
          Say something
          </Typography>
          <Divider />
          <Form />
      </CardContent>
      <CardContent className={classes.cardContent}>
        <Grid container spacing={2}>
          <Grid>
          List will be here
          </Grid>
        </Grid>
      </CardContent>
   </Card>
  )
}

export default Main