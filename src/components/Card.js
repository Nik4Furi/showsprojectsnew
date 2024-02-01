import React from 'react'
import {FcLike,FcLikePlaceholder} from "react-icons/fc"
import { toast } from 'react-toastify';
import { FcRating } from "react-icons/fc";
import image from "./image .jpg"
import {Link} from "react-router-dom"




const Card = (props) => {
    let shows = props.shows;
    let likedShows = props.likedShows;
    let setLikedShows = props.setLikedShows;

    console.log("imgaes ",shows,shows?.image)

    function clickHandler() {
        //logic
        if(likedShows.includes(shows.id)) {
            //pehle se like hua pada tha
            setLikedShows( (prev) => prev.filter((cid)=> (cid !== shows.id) )  );
            toast.warning("like removed");
        }
        else {
            //pehle se like nahi hai ye shows
            //insert karna h ye course liked shows me 
            if(likedShows.length === 0 ) {
                setLikedShows([shows.id]);
            }
            else {
                //non-empty pehle se
                setLikedShows((prev) => [...prev, shows.id]);
            }
            toast.success("Liked Successfully");
        }
    }
   // console.log(shows.id)
  return (
    <Link to= {`/movie?id=${shows.id}`} className='w-[200px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden m-2 p-2'>
        <div >
            <img src={shows?.image != null?shows?.image?.medium:image} alt='images'/>

        </div>
        
     
     <p className ='text-white font-semibold text-lg leading-6 m-2 p-1 cursor-pointer underline hover:text-green-700 '>{shows.name}</p>
     

        <div className='flex flex-row items-center gap-14 '>     
        <div className='w-[20px] h-[20px]  m-3  left-3 right-2 
            grid place-items-center'>
                <button onClick={clickHandler}>
                    {
                        likedShows.includes(shows.id) ? 
                        (<FcLike fontSize="1.75rem" />)
                        :(<FcLikePlaceholder fontSize="1.75rem" />)
                    }
                </button>
        </div>
                <div className='flex flex-row items-center'>
                <div className='w-[20px] h-[20px] bg-white rounded-full m-3  left-3 right-2 
                 grid place-items-center'>
                 <FcRating />
                 </div>
                <div  className='text-white'>  <p>{shows.rating.average || '8.2'}</p></div>
                </div>
   
        </div>
       

        
    </Link>
  )
}

export default Card
