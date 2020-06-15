import React from "react";
import Form from "./contact.form";
import myimg from "../imgs/undraw_accept_tasks_po1c.svg";


export default () => (
    <header className="bg-gray-300">
        <div className="container mx-auto p-12 max-w-4xl flex justify-center items-center">
           <div className="flex-1">
               <div>
                    <div className="flex-1">
                        <h1 className="font-bold text-purple-700 text-6xl">Hi I am Omar Barra</h1>
                        <p className="text-xl font-light">Building front app</p>
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