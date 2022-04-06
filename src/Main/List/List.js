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
  return (
    <MUList>
      <Slide direction="down">
        <ListItem>
          <ListItemAvatar>
            <Avatar>
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
    </MUList>
  );
};

export default List;
