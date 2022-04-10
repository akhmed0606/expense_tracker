import { useContext } from "react";
import {
  List as MUList,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Slide,
} from "@material-ui/core";
import { Delete, MoneyOff } from "@material-ui/icons";
import { ExpenseTrackerContext } from "../../context/context";
import useStyles from "./styles";

const List = () => {
  const globalState = useContext(ExpenseTrackerContext)

  console.log(globalState)
  
  const classes = useStyles();
  const transaction = [{id:1, type: 'Income', category:'Bisiness', amount:50, data: 'Thursday Apr 7'},
  {id:2, type: 'Expense', category:'Bisiness', amount:550, data: 'Thursday Apr 17'},
  {id:3, type: 'Income', category:'Salary', amount:150, data: 'Thursday Apr 10'}]
  return (
    <MUList dense={false} className={classes.list}>
        {transaction.map((transaction) => (
            <Slide direction="down" in mountOnEnter unmountOnExit key ={transaction.id}>
            <ListItem>
              <ListItemAvatar>
                <Avatar className={transaction.type === 'Income' ? classes.avatarIncome : classes.avatarExpense}>
                  <MoneyOff />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={transaction.category} secondary={`$${transaction.amount} - ${transaction.date}`} />
              <ListItemSecondaryAction>
                <IconButton edge="end" aria-aria-label="delete">
                  <Delete />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          </Slide>
        ))}
      
    </MUList>
  );
};

export default List;
