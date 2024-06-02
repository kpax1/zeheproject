import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";

const Form = ({ choosedTimes, choosedDate, idEnd }) => {
  const router = useRouter();
  const [sending, setSending] = useState(true);

  console.log("id of deleted obj", idEnd);

  console.log("choosedTimes", choosedTimes);

  const [formData, setFormData] = useState({
    email: "",
    name: "",
    number: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      formData.email === "" ||
      formData.name === "" ||
      formData.number === ""
    ) {
      alert("Please fill in all the required fields");
      return; // Exit early if the form is not valid
    }

    await performServerAction();

    const { email, name, number } = formData;
    try {
      const response = await fetch("/api/booked", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          choosedDate,
          choosedTimes,
          email,
          name,
          number,
        }),
      });

      if (response.ok) {
        console.log(
          "newbookingday is AAAAAAAAAAAAAAAAAAAAAAAAAded to BBOOOOKKKEEDD"
        );
        router.push("/thanks");
      }
      // Handle response if needed
    } catch (error) {
      // Handle error
    }
  };

  const performServerAction = async () => {
    console.log("performaction is active");
    try {
      const res = await fetch(`/api/booking`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          choosedTimes,
          idEnd,
        }),
      });

      if (!res.ok) {
        throw new Error("Server action failed");
      }

      console.log("Server action completed successfully");
    } catch (error) {
      console.error("Error performing server action:", error);
      // Handle errors here, e.g., display an error message to the user
    }

    setSending(false);
  };

  return (
    <>
      <h1>Choose your time</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email *"
          value={formData.email}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Name *"
          value={formData.name}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="number"
          id="number"
          placeholder="Phone number *"
          value={formData.number}
          onChange={handleInputChange}
        />

        {sending ? (
          <Button onClick={handleSubmit} variant="contained">
            Book
          </Button>
        ) : (
          <CircularProgress />
        )}
      </form>
    </>
  );
};

export default Form;
