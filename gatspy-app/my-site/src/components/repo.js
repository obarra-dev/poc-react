import React from "react";

export default (props) => (
    <li>
        <div>
            <h4>{props.repo.name}</h4>
            <p>
                {props.repo.description}
            </p>
        </div>
        <div>
            <a href={props.repo.html_url} target="_blank" rel="link to repo">Show</a>
        </div>
    </li>
)