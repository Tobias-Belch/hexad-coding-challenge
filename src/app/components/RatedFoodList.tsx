import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Badge from "@material-ui/core/Badge";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import DecreaseRatingButton from "../../features/ratings/DecreaseRatingButton";
import IncreaseRatingButton from "../../features/ratings/IncreaseRatingButton";

export interface RatedFood {
  id: string;
  name: string;
  emoji: string;
  rating: number;
}

interface Props {
  foods: RatedFood[];
}

export default function RatedFoodList({ foods }: Props) {
  return (
    <List>
      {foods.map(({ id, emoji, name, rating }) => (
        <ListItem key={id}>
          <ListItemAvatar>
            <Badge color="secondary" badgeContent={rating === 0 ? "0" : rating}>
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
            <IncreaseRatingButton id={id} />
            <DecreaseRatingButton id={id} />
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>
  );
}
