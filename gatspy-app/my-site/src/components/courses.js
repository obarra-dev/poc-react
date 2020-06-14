import React from "react";
import {useStaticQuery, graphql, grap} from "gatsby";


export default () => {

    const data = useStaticQuery(graphql `
    {
        maruexampleJson {
          id
          user {
            year
            month
          }
        }
      }
      
    `);

    return (
        <section>
            <div>
                <div>
                    <h2></h2>
                    <div>
                        {data.maruexampleJson.id}
                    </div>
                </div>
            </div>
        </section>
    )
}
