import React from "react";
import Image from "next/image";

const page = async (params) => {
  console.log('get searchparams',params.searchParams)
  const id = params.params.id;
  console.log("id++P++++", id);
  const fetchIndividualCourse = async () => {
    try {
      const res = await fetch(`http://localhost:3000/api/courses/${id}`);
      if (!res.ok) {
        console.log("Problem while fetching");
      }
      const individual = await res.json(); // Move this line inside the try block
      return individual;
    } catch (error) {
      console.error("Error while fetching individual course:", error);
      // Handle the error here, such as logging or throwing
      throw error;
    }
  };
  const { course } = await fetchIndividualCourse();
  console.log(course);
  return (
    <div className="coursedetails">
      <div className="centering">
          <Image
            src={course.img}
            width={500}
            height={500}
            alt="img"
           
          />

          <div className="descsect">
            <h1>{course.name}</h1>

            <p>{course.duration}</p>
            <p>{course.author}</p>
            <p>{course.cost}</p>
          </div>
        </div>
      </div>
  );
};

export default page;
