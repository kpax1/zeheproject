import React from "react";
import RemoveBtn from "./RemoveBtn";
import { HiPencilALT } from "react-icons/hi";
import Link from "next/link";
import { FaBeer } from "react-icons/fa";
const getTopics = async () => {
  try {
    const res = await fetch("/api/topics", {
      cache: 'no-cache',
    });

    if (!res.ok) {
      throw new Error("Failed fetching");
    }
    const data = await res.json(); // Parse response body as JSON
    return data;
  } catch (error) {
    console.log("Error loading topics:", error);
    // You might wasnt to throw the error again or handle it as needed.
    throw error;
  }
};



const TopicsList = async () => {

  
  const { topics } = await getTopics();
  
  return (
    <>
      {topics.map((t) => (
        <div key={t._id} className="topicSector">
          {console.log(t._id)}
          <div className="topic">
            <div className="title">
              <h2> {t.title} </h2>
              <div>
                <div className="ED">
                  <RemoveBtn id={t._id}/>
                  <Link href={`/editTopic/${t._id}`}>
                    <button className='delete'>
                      {" "}
                      <FaBeer size={24} />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div> {t.description}</div>
            <div></div>
          </div>

          <div></div>
        </div>
      ))}
    </>
  );
};

export default TopicsList;
