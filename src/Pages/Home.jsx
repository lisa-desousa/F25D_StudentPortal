import MyCourses from "../Components/MyCourses";
import { Stack, Divider, Typography } from "@mui/material";

export default function Home() {
  return (
    <Stack
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      spacing={2}
      divider={<Divider orientation="horizontal" flexItem />}
    >
      <Typography
        variant="h3"
        sx={{
          fontSize: { xs: "1.6rem", sm: "2.5rem" },
        }}
      >
        Welcome to the student portal!
      </Typography>
      <MyCourses />
    </Stack>
  );
}
