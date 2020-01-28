import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createSelector } from "reselect";
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
import { RootState } from "./store";
import { fetchFoods } from "../features/foods/foods.slice";

interface RatedFood {
  id: string;
  name: string;
  emoji: string;
  rating: number;
}

interface Props {
  error: string | null;
  foods: RatedFood[];
  isLoading: boolean;
}

export function App({ error = null, foods = [], isLoading = false }: Props) {
  return (
    <Container maxWidth="sm" style={{ height: "50%" }}>
      <Card elevation={3}>
        <CardContent>
          <Typography variant="h4">Food!</Typography>
          <List>
            {foods.map(({ id, emoji, name, rating }) => (
              <ListItem key={id}>
                <ListItemAvatar>
                  <Badge
                    color="secondary"
                    badgeContent={rating === 0 ? "0" : rating}
                  >
                    <Avatar>
                      <span role="img" aria-label={name}>
                        {emoji}
                      </span>
                    </Avatar>
                  </Badge>
                </ListItemAvatar>
                <ListItemText
                  primaryTypographyProps={{ variant: "h6" }}
                  primary={name}
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
            ))}
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

const getFoods = (state: RootState) => state.foods.foods;
const getRatings = (state: RootState) => state.ratings;

const getRankedFoods = createSelector(
  [getFoods, getRatings],
  (foods, ratings) => {
    const ratedFoods: RatedFood[] = [
      ...foods.map(food => ({ ...food, rating: ratings[food.id] || 0 }))
    ];
    ratedFoods.sort((a, b) => a.rating - b.rating);
    return ratedFoods;
  }
);

function ConnectedApp() {
  const dispatch = useDispatch();

  const error = useSelector((state: RootState) => state.foods.error);

  const isLoading = useSelector((state: RootState) => state.foods.isLoading);

  const rankedFoods: RatedFood[] = useSelector((state: RootState) =>
    getRankedFoods(state)
  ) as RatedFood[];

  useEffect(() => {
    dispatch(fetchFoods());
  }, [dispatch]);

  return <App foods={rankedFoods} error={error} isLoading={isLoading} />;
}

export default ConnectedApp;
