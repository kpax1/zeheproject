"use client";

import { useState } from "react";
import React from "react";
import { useRouter } from "next/navigation";
import Akk from "@/components/Accordion";

const Page = () => {




  
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const router = useRouter();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !description) {
      alert("title and disc are req");
    }

    try {
      const res = await fetch("/api/topics", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ title, description }),
      });

      if (res.ok) {
        router.push('/')
        router.refresh();
      

      } else {
        throw new Error("Failed to cr a topic");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="formi">
        <input
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          type="text"
          placeholder="Topic Title"
        />

        <input
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          type="text"
          placeholder="Topic Description"
        />

        <button type="submit" className="add">
          {" "}
          Add Topic{" "}
        </button>
  
      </form>

      <Akk/>
    </>
  );
};

export default Page;
