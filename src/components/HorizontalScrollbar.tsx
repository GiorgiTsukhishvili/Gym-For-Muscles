import React from "react";

import { Box } from "@mui/material";
import { v4 as uuid } from "uuid";

import { HorizontalScrollbarProps } from "../utils/interfaces";

import BodyPart from "./BodyPart";

const HorizontalScrollbar = ({
  data,
  bodyPart,
  setBodyPart,
}: HorizontalScrollbarProps) => {
  return (
    <div
      style={{
        display: "flex",
        maxWidth: "800px",
        overflowX: "auto",
        whiteSpace: "nowrap",
        overflowY: "hidden",
      }}
    >
      {data.map((item) => (
        <Box key={uuid()} itemID={item} title={item}>
          <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart} />
        </Box>
      ))}
    </div>
  );
};

export default HorizontalScrollbar;
