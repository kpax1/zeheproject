import EditTopicForm from "@/components/EditTopicForm";
import React from "react";

const getToppicById = async (id) => {
  try {
    const res = await fetch(`/topics/${id}`, {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch topic");
    }


    return res.json();
  } catch (error) {
    console.log(error);
  }
};

const page = async ({ params }) => {
  const { id } = params;
console.log(id)

  return <EditTopicForm />;
};

export default page;
