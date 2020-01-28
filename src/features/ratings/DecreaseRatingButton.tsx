import React from "react";
import { useDispatch } from "react-redux";
import IconButton from "@material-ui/core/IconButton";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import { decreaseRating } from "./ratings.slice";

interface Props {
  onClick: (id: string) => void;
  id: string;
}

export function DecreaseRatingButton({ id, onClick }: Props) {
  return (
    <IconButton onClick={() => onClick(id)} aria-label="decrease rating">
      <ThumbDownIcon />
    </IconButton>
  );
}

interface ConnectedProps {
  id: string;
}

export default function ConnectedDecreaseRatingButton({ id }: ConnectedProps) {
  const dispatch = useDispatch();

  return (
    <DecreaseRatingButton
      id={id}
      onClick={id => dispatch(decreaseRating({ id }))}
    />
  );
}
