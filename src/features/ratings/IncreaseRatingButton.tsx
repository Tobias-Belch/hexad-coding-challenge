import React from "react";
import { useDispatch } from "react-redux";
import IconButton from "@material-ui/core/IconButton";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import { increaseRating } from "./ratings.slice";

interface Props {
  onClick: (id: string) => void;
  id: string;
}

export function IncreaseRatingButton({ id, onClick }: Props) {
  return (
    <IconButton onClick={() => onClick(id)} aria-label="decrease rating">
      <ThumbUpIcon />
    </IconButton>
  );
}

interface ConnectedProps {
  id: string;
}

export default function ConnectedIncreaseRatingButton({ id }: ConnectedProps) {
  const dispatch = useDispatch();

  return (
    <IncreaseRatingButton
      id={id}
      onClick={id => dispatch(increaseRating({ id }))}
    />
  );
}
