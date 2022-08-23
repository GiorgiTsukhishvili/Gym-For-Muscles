import { Dispatch, SetStateAction } from "react";

export interface Fetch {
  method: string;
  headers: {
    "X-RapidAPI-Key": string;
    "X-RapidAPI-Host": string;
  };
}

export interface ExerciseInt {
  bodyPart: string;
  equipment: string;
  gifUrl: string;
  id: string;
  name: string;
  target: string;
}

export interface ExercisesProps {
  bodyPart: string;
  setExercises: Dispatch<SetStateAction<ExerciseInt[]>>;
  setBodyPart: Dispatch<SetStateAction<string>>;
}

export interface HorizontalScrollbarProps {
  data: string[];
  bodyPart: string;
  setBodyPart: Dispatch<SetStateAction<string>>;
}

export interface BodyPartProps {
  item: string;
  bodyPart: string;
  setBodyPart: Dispatch<SetStateAction<string>>;
}

export interface ExercisesElementProps {
  bodyPart: string;
  setExercises: Dispatch<SetStateAction<ExerciseInt[]>>;
  exercises: ExerciseInt[];
}

export interface ExerciseCardProps {
  bodyPart: string;
  equipment: string;
  gifUrl: string;
  id: string;
  name: string;
  target: string;
}
