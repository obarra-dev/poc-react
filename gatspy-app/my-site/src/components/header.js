import React from "react";
import Form from "./contact.form";
import myimg from "../imgs/undraw_accept_tasks_po1c.svg";


export default () => (
    <header className="bg-gray-300">
        <div className="container">
           <div>
               <div>
                    <div className="flex-1">
                        <h1>Hi I am Omar Barra</h1>
                        <p>Building front app</p>
                    </div>
                    <img src={myimg} alt="deskstop" style={{height:"300px"}}></img>
               </div>
               <div>
                   <Form></Form>
               </div>
           </div>
        </div>
    </header>
)