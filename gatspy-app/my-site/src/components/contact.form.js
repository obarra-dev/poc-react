import React from "react";

export default () => (
    <form action="" className="mt-16 text-center">
        <label htmlFor=""  className="block text-gray-700 text-sm font-bold mb-2">
            Tell me your great idea
        </label>
        <div className="flex shadow rounded bg-white border p2">
            <textarea name="textarea" id="textarea" className="flex-1 py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"></textarea>
            <button class="btn ml-4">Send</button>
        </div>
    </form>
)