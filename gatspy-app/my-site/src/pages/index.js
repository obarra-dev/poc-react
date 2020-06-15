import React from "react";
import Header from "../components/header";
import Repos from "../components/repos";
import Courses from "../components/courses";
import EducationNav from "../components/education-nav"

export default function Home() {
  return <div>
    <Header></Header>
    <EducationNav></EducationNav>
    <Repos></Repos>
    <Courses></Courses>
  </div>
}
