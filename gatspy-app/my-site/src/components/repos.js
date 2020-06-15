import React from "react";
import Repo from "./repo";
import repos from "../data/repos"

export default () => (
    <div className="max-w-4xl mx-auto mt-12">
        <header className="text-center">
            <h2 className="text-3xl font-bold">This is my job</h2>
            <p>show all my job</p>
        </header>
        <ul className="repos-list">
            {
                repos.map((repo) => {
                    return <Repo repo={repo} key={repo.id}></Repo>
                })
            }
        </ul>
    </div>
)