import React from 'react'
import { ImSad,ImHappy2 } from "react-icons/im";
import { toast } from 'react-toastify';

const Card = (props) => {
    let course = props.course;
    let likedCourses = props.likedCourses;
    let setLikedCourses = props.setLikedCourses;

    function clickHandler () {
        //Logic 
        if(likedCourses.includes(course.id)) {
            // MAtlab phle se like hu pda hai
            setLikedCourses( (prev) => prev.filter( ((cid) => cid !== course.id) ) );
            toast.warning("Liked Removed");
        }
        else {
            // Phle se like nhi hai
            // insert karna h ye course liked courses me 
            if(likedCourses.length === 0){
                setLikedCourses([course.id]);
            }
            else {
                setLikedCourses((prev) => [...prev, course.id]);
            }
            toast.success("Liked Successfully");
        }
    }

    return (
        <div  className='w-[300px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden hover:scale-105' >
            <div className='relative' >
                <img src={course.image.url} alt =""></img>

                <div className='w-[40px] h-[40px] bg-white rounded-full absolute right-1 bottom-[-10px]
                    grid place-items-center' >
                    <button onClick = {clickHandler}>
                        {
                            likedCourses.includes(course.id) ?
                            (<ImHappy2 fontSize="1.80rem"/>) 
                            : (<ImSad fontSize="1.80rem"/>)
                        }
                    </button>
                </div>
            </div>
            
            <div className='p-4'>
                <p className="text-white font-semibold text-lg leading-6" >{course.title}</p>
                <p className='mt-2 text-white' >
                    {
                            course.description.length >100 ? 
                            (course.description.substr(0,100)) + "..." :
                            (course.description)
                        }
                </p>
            </div>
        </div>
    )
}

export default Card
