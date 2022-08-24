import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import { exerciseOptions, fetchData } from "../utils/fetchData";

import ExerciseVideos from "../components/ExerciseVideos";
import Detail from "../components/Detail";
import SimilarExercises from "../components/SimilarExercises";

import { ExerciseDetailProps } from "../utils/interfaces";

const ExerciseDetail = () => {
  const [exercieseDetail, setExerciseDetail] = useState<ExerciseDetailProps>();

  const { id } = useParams();

  useEffect(() => {
    const fetchExercisesData = async () => {
      const exerciseDbUrl = "https://exercisedb.p.rapidapi.com";
      const youtubeSearchUrl =
        "https://youtube-search-and-download.p.rapidapi.com";

      const exerciseDetailData = await fetchData(
        `${exerciseDbUrl}/exercises/exercise/${id}`,
        exerciseOptions
      );

      setExerciseDetail(exerciseDetailData);
    };

    fetchExercisesData();
  }, [id]);

  return (
    <Box>
      {exercieseDetail ? <Detail exerciseDetail={exercieseDetail} /> : ""}
      <ExerciseVideos />
      <SimilarExercises />
    </Box>
  );
};

export default ExerciseDetail;
