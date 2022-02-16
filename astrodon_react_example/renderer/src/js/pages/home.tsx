import { React, Route, Routes } from "./../deps.ts";
// const createFile = () =>{
//    Deno.writeTextFile(`hello.txt`, "Hello World!")
// }
export const Home = () => {
  return <>
    <h2>
      home page
    </h2>
    <button onClick = { async () => await Deno.writeTextFile(`hello.txt`, "Hello World!") }>
      create file
    </button>
    <div>
      create file don't work for now
    </div>
  </>
};
