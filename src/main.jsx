import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import App from "./App.jsx";
import Home from "./Pages/Home.jsx";
import Courses from "./Pages/Courses.jsx";
import News from "./Pages/News.jsx";
import CourseDetails from "./Pages/CourseDetails.jsx";
import Register from "./Pages/Register.jsx";
import { CourseContext } from "./Contexts/CourseContext.jsx";
import { NewsContext } from "./Contexts/NewsContext.jsx";
import RegistrationProvider from "./Components/RegistrationProvider.jsx";
import courses from "./Data/Courses.js";
import news from "./Data/News.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "courses",
        element: <Courses />,
      },
      {
        path: "news",
        element: <News />,
      },
      {
        path: "courses/:id",
        element: <CourseDetails />,
      },
      {
        path: "registration",
        element: <Register />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RegistrationProvider>
      <CourseContext.Provider value={courses}>
        <NewsContext.Provider value={news}>
          <RouterProvider router={router} />
        </NewsContext.Provider>
      </CourseContext.Provider>
    </RegistrationProvider>
  </StrictMode>
);
