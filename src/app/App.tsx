import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createSelector } from "reselect";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import { Alert, AlertTitle } from "@material-ui/lab";
import { RootState } from "./store";
import LoadingScreen from "./components/LoadingScreen";
import RatedFoodList, { RatedFood } from "./components/RatedFoodList";
import { fetchFoods } from "../features/foods/foods.slice";

interface Props {
  error: string | null;
  foods: RatedFood[];
  isLoading: boolean;
}

export function App({ error = null, foods = [], isLoading = false }: Props) {
  return (
    <>
      <Container maxWidth="sm" style={{ height: "50%" }}>
        <Card elevation={3}>
          <CardContent>
            <Typography variant="h4">Food!</Typography>
            {error != null ? (
              <Alert severity="error">
                <AlertTitle>Error</AlertTitle>
                {error}
              </Alert>
            ) : (
              <RatedFoodList foods={foods} />
            )}
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
      <LoadingScreen open={isLoading} />
    </>
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
    ratedFoods.sort((a, b) => b.rating - a.rating);
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
