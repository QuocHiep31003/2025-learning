import React from "react";
import { Routes, Route } from "react-router-dom";
import PageLayout from "../layout/PageLayout/PageLayout";
import Home from "../pages/Home";
// import Vocabulary from "../app/pages/Vocabulary";
// import Grammar from "../app/pages/Grammar";

const MainRoute = () => {
  return (
    <PageLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/vocabulary" element={<Vocabulary />} /> */}
        {/* <Route path="/grammar" element={<Grammar />} /> */}
      </Routes>
    </PageLayout>
  );
};

export default MainRoute;
