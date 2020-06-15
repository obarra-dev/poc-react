import React from "react";
import {useStaticQuery, graphql, Link} from "gatsby";


export default () => {
    const data = useStaticQuery(graphql `
    {
        allEducationJson {
          edges {
            node {
              slug
              title
              description
            }
          }
        }
      }      
      
    `);

    return (
        <div>
            <h2>More about me</h2>
            <nav>
                {
                    data.allEducationJson.edges.map((element, index) => {
                        const {node} = element;
                        return (
                            <article>
                                <header>
                                    <p>{node.title}</p>
                                    <div>
                                        <p>{node.description}</p>
                                        <Link to={`/${node.slug}`} className="btn inline-block mt-4">
                                            Go
                                        </Link>
                                    </div>
                                </header>
                            </article>
                        )
                    })
                }
            </nav>
        </div>
    )
}
