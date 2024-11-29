


const Postdetails = ({post}) => {

   const {title, body} = post

    return (
        <div>
           
           <div className=" border-[1px] border-cyan-300 ">
            <p>{title}</p>
            <p> {body} </p>
           </div>


            
        </div>
    );
};

export default Postdetails;