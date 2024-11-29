"use client"
import Postdetails from "@/Postdetails";
import { useEffect, useState } from "react";




const page = () => {

    const [ post, setPost ] = useState([])

    useEffect( () => {

         fetch('https://jsonplaceholder.typicode.com/users')
         .then( res => res.json())
         .then( data => setPost(data) )
  

    } , [])


    return (
        <div className="   grid grid-cols-3 gap-10  h-screen ">

            {

                post.map( post => <Postdetails post={post} ></Postdetails> )

            }
            
        </div>
    );
};

export default page;