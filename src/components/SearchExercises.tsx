import React, { useState } from "react";

import { Box, Button, Stack, TextField, Typography } from "@mui/material";

const SearchExercises: React.FC = () => {
  const [search, setSearch] = useState<string>("");

  const handleSearch = async () => {
    if (search) {
      // const exerciseData = await fetchData();
    }
  };

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center">
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
        mb="50px"
        textAlign="center"
      >
        Great Exercises You <br />
        Must Know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          value={search}
          onChange={(e) => {
            setSearch(e.target.value.toLocaleLowerCase());
          }}
          placeholder="Search Exercise"
          type="text"
          sx={{
            width: { lg: "800px", xs: "350px" },
            backgroundColor: "#fff",
            borderRadius: "40px",
            input: { fontWeight: "700", border: "none", borderRadius: "4px" },
          }}
        ></TextField>
        <Button
          className="search-btn"
          sx={{
            bgcolor: "#ff2625",
            color: "#fff",
            textTransform: "none",
            width: { lg: "175px", xs: "80px" },
            fontSize: { lg: "20px", xs: "14px" },
            height: "56px",
            position: "absolute",
            right: "0",
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
    </Stack>
  );
};

export default SearchExercises;
