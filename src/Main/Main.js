import { Card, CardHeader,CardContent,Typography,Grid,Divider} from '@material-ui/core'
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
      </CardContent>
   </Card>
  )
}

export default Main