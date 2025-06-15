import { Button, TextField, Stack, Divider } from "@mui/material";
import { useContext } from "react";
import { CourseContext } from "../Contexts/CourseContext";
import { RegistrationContext } from "../Contexts/RegistrationContext";
import CoruseSelection from "./CourseSelector";
import { useState } from "react";

export default function RegisterForm() {
  const { registerCourses } = useContext(RegistrationContext);
  const courses = useContext(CourseContext);
  const [selectedCourses, setSelectedCourses] = useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setSelectedCourses(typeof value === "string" ? value.split(",") : value);
  };

  function handleClick() {
    alert("You have been registered!");
    registerCourses(selectedCourses);
  }

  return (
    <div>
      <Stack
        sx={{ mx: "auto", width: 300 }}
        spacing={2}
        divider={<Divider orientation="horizontal" flexItem />}
      >
        <TextField id="outlined-basic" label="Name" variant="outlined" />
        <TextField id="outlined-basic" label="Email" variant="outlined" />

        <CoruseSelection
          courses={courses}
          selectedCourses={selectedCourses}
          onChange={handleChange}
        />
        <Button variant="outlined" onClick={handleClick}>
          Register
        </Button>
      </Stack>
    </div>
  );
}
