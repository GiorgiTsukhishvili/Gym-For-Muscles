import React from "react";
import { ExercisesElementProps } from "../utils/interfaces";
import ExerciseCard from "./ExerciseCard";

import Pagination from "@mui/material/Pagination";
import { Box, Stack, Typography } from "@mui/material";

import { exerciseOptions, fetchData } from "../utils/fetchData";

const Exercises = ({
  setExercises,
  bodyPart,
  exercises,
}: ExercisesElementProps) => {
  return (
    <Box id="execises" sx={{ mt: { lg: "110px" } }} mt="50px" p="20px">
      <Typography variant="h3" mb="46px">
        Showing Results
      </Typography>

      <Stack
        direction="row"
        flexWrap="wrap"
        justifyContent="center"
        sx={{ gap: { lg: "110px", xs: "50px" } }}
      >
        {exercises.map((exercise, i) => (
          <ExerciseCard key={i} exercise={exercise} />
        ))}
      </Stack>
    </Box>
  );
};

export default Exercises;
