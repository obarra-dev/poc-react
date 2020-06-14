import React from "react";
import {useStaticQuery, graphql, grap} from "gatsby";


export default () => {

    const data = useStaticQuery(graphql `
    {
        maruexampleJson {
          id
          fluctuationAccountBalance
          contractId
          policyId {
            endorsementNumber
            insurerId
            policyNumber
            sectionId
            subSectionId
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
