import Link from "next/link";




const  page = () => {
    return (
        <div className=" flex justify-center items-center gap-10 mt-32 mb-32 ml-36 mr-36">
           

               <p><Link href={'/service/skill1'} >skill1</Link></p>
               <p><Link href={'/service/skill2'} >skill2</Link></p>

        </div>
    );
};

export default page;