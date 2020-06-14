import React from "react";
import Header from "../components/header";
import Repos from "../components/repos";
import Courses from "../components/courses";

export default function Home() {
  return <div>
    <Header></Header>
    <Repos></Repos>
    <Courses></Courses>
  </div>
}
