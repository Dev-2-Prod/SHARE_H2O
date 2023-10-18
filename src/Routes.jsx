import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NotFound from "pages/NotFound";
const FinalDesignH2OResponsive1500Plus = React.lazy(() =>
  import("pages/FinalDesignH2OResponsive1500Plus"),
);
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
         
          <Route element={<NotFound />} />
          <Route
            path="/"
            element={<FinalDesignH2OResponsive1500Plus />}
          />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
