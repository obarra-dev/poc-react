import React from "react";
import {graphql} from 'gatsby';

export default (props) => {
    const dataEduction = props.data.educationJson;
    return (
       <div>
           <header className="py-12 border-purple-500 border-solid border-t-8">
               <div className="max-w-4xl mx-auto">
                   <h2 className="capitalize text-6xl font-blod">{dataEduction.title}</h2>
                   <p className="text-xl">{dataEduction.description}</p>
               </div>
           </header>
           <ul>
                {
                    dataEduction.items.map((item, index) => {
                        return (<li className="bg-white shadow mt-4 flex" key={index}>
                            <p className="vertical-text">{dataEduction.slug}</p>
                            <div className="flex items-center flex-1 p-8">
                                <div className="flex-1">
                                    <h3>{item.name}</h3>
                                    {item.degree && <span className="inline-block p-2 radius bg-purple-100 text-purple-700">{item.degree}</span>}
                                    {item.url && <a className="btn mt-4 inline-block" href={item.url} target="_blank" rel="url pages">Show</a>}
                                </div>
                                <div className="inline-block">
                                    <span className="inline-block p-2 text-2xl bg-green-100 text-green-700">{item.score}</span>
                                </div>
                            </div>
                        </li>)
                    }
                    )
                }
            </ul>
       </div>
    )

}

export const query = graphql `
    query ($slug : String) {
        educationJson(slug: {eq: $slug}) {
        slug
        title
        description
        items {
            degree
            name
            score
            url
        }
        }
    }
`
;
  