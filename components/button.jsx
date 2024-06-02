"use client";
import React from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";

export default function Button() {
  const searchparams = useSearchParams();
  const author = searchparams.get("author");
  console.log('searchparamss from client',searchparams.author);
  const router = useRouter();
  const mentors = ["All","levs", "gocha"];
  const [active, setActive] = useState("All");
  const handleFilter = (mentor) => {
    setActive(mentor);
    if (mentor === "All") {
      router.push("/courses");
    } else {
      router.push(`?author=${mentor}`);
    }
  };
  
  return (
    <div className="zina">

      <ul className="green">
        {mentors.map((mentor) => (
          <li  key={mentor}>
          <button
            onClick={() => handleFilter(mentor)}
            className={`${active === mentor ? "coursesbtnactive" : "coursesbtn"}`}
          >
            {" "}
            {mentor}
          </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
