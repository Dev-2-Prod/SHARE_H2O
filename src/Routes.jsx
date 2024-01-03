import ForgotPasswordMobile from "pages/Mobile/ForgotPasswordMobile";
import LogInWithMagixdb from "pages/Mobile/LoginMobile";
import React, { useEffect, useMemo, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";


import ForgotpassworddesktopPage from "components/DesktopLoginPage/desktopForgotPassword";
import SignupdesktopPage from "components/DesktopLoginPage/desktopSignupPage";
import DesktoploginPage from "components/DesktopLoginPage/desktoplogipage";
import MobileDashboardH2OFinalllll from "pages/Mobile/Main";
import SignupMobile from "pages/Mobile/SignUpMobile";
import NotFound from "pages/NotFound";
const FinalDesignH2OResponsive1500Plus = React.lazy(() =>
  import("pages/FinalDesignH2OResponsive1500Plus"),
);



 
function useMediaQuery(query) {
  const mediaQuery = useMemo(() => window.matchMedia(query), [query]);
  const [match, setMatch] = useState(mediaQuery.matches);

  useEffect(() => {
    const onChange = () => setMatch(mediaQuery.matches);
    mediaQuery.addEventListener("change", onChange);

    return () => mediaQuery.removeEventListener("change", onChange);
  }, [mediaQuery]);


  return match;
}

function useMediaQueries() {
  const sd = useMediaQuery("(min-width: 576px");
  const md = useMediaQuery("(min-width: 768px)");
  const lg = useMediaQuery("(min-width: 992px)");

  return { sd, md, lg };
}





const ProjectRoutes = () => {
  const { lg } = useMediaQueries();
  useEffect(() => {
    const applyZoom = () => {
      // Apply zoom only for desktop (lg) screens
      if (lg) {
        document.body.style.zoom = "85%";
      } else {
        document.body.style.zoom = "100%"; // Reset zoom for tablet and mobile
      }
    };
 
    // Call the function on initial render
    applyZoom();
 
    // Attach a resize event listener to adjust zoom on window resize
    window.addEventListener("resize", applyZoom);
 
    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", applyZoom);
    };
  }, [lg]); // Re-run the effect when lg changes
 

  return (
<React.Suspense fallback={<>Loading...</>}>
<Router>
<Routes>
<Route path="/" element={lg ? <FinalDesignH2OResponsive1500Plus/> : <MobileDashboardH2OFinalllll/>} />
<Route path="/login" element={lg ? <DesktoploginPage/> : <LogInWithMagixdb/>}/>
<Route path="/signup" element={lg ? <SignupdesktopPage/> : <SignupMobile/>}/>
<Route path="/forgot-password" element={lg ? <ForgotpassworddesktopPage/> : <ForgotPasswordMobile/>}/>
<Route element={<NotFound />} />
</Routes>
</Router>
</React.Suspense>
  );
};
 
export default ProjectRoutes;