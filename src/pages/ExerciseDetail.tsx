import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import { exerciseOptions, fetchData, youtubeOptions } from "../utils/fetchData";

import ExerciseVideos from "../components/ExerciseVideos";
import Detail from "../components/Detail";

import { ExerciseDetailProps, YoutubeData } from "../utils/interfaces";

const ExerciseDetail = () => {
  const [exercieseDetail, setExerciseDetail] = useState<ExerciseDetailProps>();
  const [exerciseVideos, setExerciseVideos] = useState<YoutubeData[]>([]);

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

      const exerciseVideoData = await fetchData(
        `${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`,
        youtubeOptions
      );

      setExerciseVideos(exerciseVideoData.contents);
    };

    fetchExercisesData();
  }, [id]);

  return (
    <Box>
      {exercieseDetail ? <Detail exerciseDetail={exercieseDetail} /> : ""}
      {exercieseDetail ? (
        <ExerciseVideos
          exerciseVideos={exerciseVideos}
          name={exercieseDetail.name}
        />
      ) : (
        ""
      )}
    </Box>
  );
};

export default ExerciseDetail;
