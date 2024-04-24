import React from 'react'
import "../App.css";
import StarIcon from "@mui/icons-material/Star";


const review=[
    {
        id:1,
        type:"Consulted for Skin",
        name:"Sophie Moore",
        place:"Chennai",
        date:"14/02/24",
        class_name:"date_tag"
    },
    {
        id:2,
        type:"Consulted for Hair",
        name:"Swathi",
        place:"Bangalore",
        date:"19/08/23",
        class_name:"date1_tag"
    },
    {
        id:3,
        type:"Consulted for Hair",
        name:"Keshav",
        place:"Mumbai",
        date:"15/01/24",
        class_name:"date2_tag"
    }
]

const Stories = () => {
  return (
    <>
    <section className="stories">
          <div className="custom">
            <h1>STORIES FROM OUR VALUED CUSTOMERS!</h1>
            <div className="row__story">

               {review.map((reviews)=>(
              <div className="box__story" key={reviews.id}>
                <div className="div5">
                  <h4 className="con">{reviews.type}</h4>
                </div>
                <div className="dot_div">
                  <div className="dot"></div>
                  <div className="name">
                    <p className="name_tag">{reviews.name}</p>
                    <p className="place_tag">{reviews.place}</p>
                  </div>
                </div>
                <p className={reviews.class_name}>{reviews.date}</p>
                <p className="star">
                  {" "}
                  <StarIcon></StarIcon>
                  <StarIcon></StarIcon>
                  <StarIcon></StarIcon>
                  <StarIcon></StarIcon>
                  <StarIcon></StarIcon>
                </p>
                <h3 className="kind">One of a kind service</h3>
                <p className="par">
                  Lorem ipsum dolor sit, <br></br> amet consectetur adipisicing{" "}
                  <br></br>elit. Praesentium, ipsam?
                </p>
              </div>
              ))} 
            </div>
        

            <ul type="disc">
              <li className="list"></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </section>
    </>
  )
}

export default Stories