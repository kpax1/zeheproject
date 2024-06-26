import React from "react";
import Image from "next/image";

const page = async (params) => {
  console.log('get searchparams',params.searchParams)
  const id = params.params.id;
  console.log("id++P++++", id);
  const fetchIndividualCourse = async () => {
    try {
      const res = await fetch(`https://zeheproject.vercel.app/api/courses/${id}`);
      if (!res.ok) {
        console.log("Problem while fetching");
      }
      const individual = await res.json(); 
      return individual;
    } catch (error) {
      console.error("Error while fetching individual course:", error);
      throw error;
    }
  };
  const { course } = await fetchIndividualCourse();
  console.log(course);
  return (
    <div className="coursedetails">

      
      <div className="centering">
          <div className="courseheader">
          <h1 className="courseName"> {course?.name}</h1>

          </div>

        <Image
            src={course?.img}
            width={400}
            height={400}
            alt="img"
            className="imagefull"
          />
         

          <div className="descsect">
              <p className="desc">{course?.desc}</p>
            <p>{course?.duration}</p>
            <p>{course?.author}</p>
            <p>{course?.cost}</p>
          </div>
        </div>
      </div>
  );
};

export default page;
