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
import useStyles from "./styles";

const List = () => {
  const classes = useStyles();
  const transaction = [{id:1, type: 'Income', category:'Bisiness'}]
  return (
    <MUList dense={false} className={classes.list}>
        {transaction.map((transaction) => (
            <Slide direction="down">
            <ListItem>
              <ListItemAvatar>
                <Avatar className={transaction.type === 'Income' ? classes.avatarIncome : classes.avatarExpense}>
                  <MoneyOff />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary />
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
