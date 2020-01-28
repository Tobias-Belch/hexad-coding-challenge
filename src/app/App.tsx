import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Badge from "@material-ui/core/Badge";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Container from "@material-ui/core/Container";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";

function App() {
  return (
    <Container maxWidth="sm">
      <Card elevation={3}>
        <CardContent>
          <Typography variant="h4">Food!</Typography>
          <List>
            <ListItem>
              <ListItemAvatar>
                <Badge color="secondary" badgeContent="34">
                  <Avatar>
                    <span role="img" aria-label="slice of pizza">
                      🍕
                    </span>
                  </Avatar>
                </Badge>
              </ListItemAvatar>
              <ListItemText
                primaryTypographyProps={{ variant: "h6" }}
                primary="Pizza"
              />
              <ListItemSecondaryAction>
                <IconButton aria-label="increase rating">
                  <ThumbUpIcon />
                </IconButton>
                <IconButton aria-label="decrease rating">
                  <ThumbDownIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          </List>
        </CardContent>
        <CardActions>
          <Button
            variant="contained"
            color="primary"
            startIcon={<PlayArrowIcon />}
          >
            Random Ratings
          </Button>
        </CardActions>
      </Card>
    </Container>
  );
}

export default App;
