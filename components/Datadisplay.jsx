import React from "react";
import fetchAllAndAuthor from "@/app/lib/fetchAllAndAuthor";
import Link from "next/link";
import { Suspense } from "react";
import Image from "next/image";




const Datadisplay = async ({ author }) => {
  const authorData = await fetchAllAndAuthor(author);
    const data = await authorData;

  return (
    <div className="allcourses">
      
    {data.map((course) => (
  
      <div className="djxrigo" key={course._id}>
        <Suspense fallback={<h1>loading ... </h1>}>
          {console.log(course.img)}
          <Image
            src={course.img}
            width={300}
            height={300}
            alt="img"
            className="courseImg"
          />
        </Suspense>
        <div className="coursedescr">
          <div>
            <h3> {course.name}</h3>
            <h3> course by: {course.author}</h3>
            <h4>duration : {course.duration}</h4>
          </div>
          <div>
            <Link prefetch={true} href={`/courses/${course.name}`}>
              <button className="headerbt" id="headbtn">
                Enroll
              </button>{" "}
            </Link>
          </div>
        </div>

        <div className="courseBottom">
          <span className="mentor">Mentor: {course.author}</span>
          <span>{course.duration}</span>
          <span>6months</span>
        </div>
      </div>
    ))}
  </div>
  );
};

export default Datadisplay;
