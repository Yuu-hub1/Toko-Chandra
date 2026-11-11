import React from "react";
import LandingLayout from "../../view/layout/landing";
import LandingPage from "../../view/page/public/landing";
import { BelajarPage } from "../../view/page/public/landing/belajar";

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
  ],
};
