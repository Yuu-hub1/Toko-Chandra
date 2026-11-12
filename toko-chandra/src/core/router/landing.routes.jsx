import React from "react";
import LandingLayout from "../../view/layout/landing";
import LandingPage from "../../view/page/public/landing";
import { BelajarPage } from "../../view/page/public/landing/belajar";
import { BelajarZodPage } from "../../view/page/public/landing/belajarZod";

export const landingRoutes = {
  path: "/",
  element: <LandingLayout/> ,
  children: [
    { index: true, element: <LandingPage /> },
    {
      path: "belajar",
      children: [
        { index: true, element: <BelajarPage /> },
      ],
    },
    {
      path: "zod",
      children: [
        { index: true, element: <BelajarZodPage /> },
      ],
    },
    {
      path: "zod",
      children: [
        { index: true, element: <BelajarZodPage /> },
      ],
    },
  ],
};
