import { Typography, Stack, Divider } from "@mui/material";
import RegisterForm from "../Components/RegisterForm";

export default function Register() {
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
        Register for courses
      </Typography>
      <RegisterForm />
    </Stack>
  );
}
