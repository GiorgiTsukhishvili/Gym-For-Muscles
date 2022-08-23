import React from "react";
import { Link } from "react-router-dom";

import { Button, Stack, Typography } from "@mui/material";

import { ExerciseCardProps } from "../utils/interfaces";

const ExerciseCard = ({ exercise }: { exercise: ExerciseCardProps }) => {
  return (
    <Link to={`/exercise/${exercise.id}`} className="exercise-card">
      <img src={exercise.gifUrl} loading="lazy" alt={exercise.name} />
      <Stack direction="row">
        <Button
          sx={{
            ml: "21px",
            color: "black",
            background: "#ffa9a9",
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize",
          }}
        >
          {exercise.bodyPart}
        </Button>
        <Button
          sx={{
            ml: "21px",
            color: "black",
            background: "#fcc757",
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize",
          }}
        >
          {exercise.target}
        </Button>
      </Stack>

      <Typography
        ml="21px"
        fontWeight="bold"
        color="black"
        mt="11px"
        pb="10px"
        textTransform="capitalize"
        fontSize="22px"
      >
        {exercise.name}
      </Typography>
    </Link>
  );
};

export default ExerciseCard;
