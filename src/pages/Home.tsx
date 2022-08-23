import React, { useState } from "react";

import Exercises from "../components/Exercises";
import SearchExercises from "../components/SearchExercises";
import HeroBanner from "../components/HeroBanner";

import { Box } from "@mui/material";

import { ExerciseInt } from "../utils/interfaces";

const Home: React.FC = () => {
  const [exercises, setExercises] = useState<ExerciseInt[]>([]);
  const [bodyPart, setBodyPart] = useState<string>("all");

  return (
    <Box>
      <HeroBanner />
      <SearchExercises
        setBodyPart={setBodyPart}
        setExercises={setExercises}
        bodyPart={bodyPart}
      />
      <Exercises
        setBodyPart={setBodyPart}
        setExercises={setExercises}
        bodyPart={bodyPart}
      />
    </Box>
  );
};

export default Home;
