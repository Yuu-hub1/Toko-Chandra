import React from "react";
import LandingLayout from "../../view/layout/landing";
import LandingPage from "../../view/page/public/landing";

export const landingRoutes = {
  path: "/",
  element: <LandingLayout/> ,
  children: [
    { index: true, element: <LandingPage /> },
    // { path: "contact", element: <ContactPage/> },
  ],
};
