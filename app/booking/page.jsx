"use client";
import React, { useEffect, useState, useRef, Suspense } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Form from "@/components/Form";
import styled from "styled-components";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
const Page = () => {
  const [startDate, setStartDate] = useState(new Date);
  const [availableDates, setAvailableDates] = useState([]);
  const isFirstRender = useRef(true);
  const [selectedTimes, setSelectedTimes] = useState([]);
  console.log('isfirstrender', isFirstRender.current)
  console.log('startdate ',startDate)

  const minDate = new Date(); // Set minimum date to the current date

  const formattedDate = `${startDate.getDate()}.${
    startDate.getMonth() + 1
  }.${startDate.getFullYear()}`;

  console.log("now", formattedDate, "choosingdate", formattedDate);

  console.log("mindate", `${minDate.getFullYear()}}`);
  console.log("startdate", startDate);

  const fetchAvailableTimes = async () => {
    try {
      const formattedDate = `${startDate.getDate()}.${
        startDate.getMonth() + 1
      }.${startDate.getFullYear()}`;
      const response = await fetch(`/api/booking/${formattedDate}`, {
        method: "GET",
        cache: "no-cache",
      });
      if (response.ok) {
        const data = await response.json(); // Parse response body as JSON
        setAvailableDates(data.acailableTimes);
        // Log fetched data
        // Handle the fetched data as needed, maybe set it to state for display
      } else {
        throw new Error("Failed to fetch data");
      }
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {
    const postBookingDate = async () => {
      try {
        const response = await fetch("/api/booking", {
          method: "POST",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify({ bookingDay: formattedDate }),
        });
        if (response.ok) {
          await fetchAvailableTimes(formattedDate);
        } else {
          throw new Error("Failed to post booking date");
        }
      } catch (error) {
        console.log(error);
      }
    };

    postBookingDate();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [startDate]);





  const handleDateChange = (date) => {
    if (date >= new Date()) {
      setStartDate(date);
    }
  };

  const handleClick = (time) => {
    // If the time is already selected, removes it from the array
    if (selectedTimes.includes(time)) {
      setSelectedTimes(
        selectedTimes.filter((selectedtime) => selectedtime !== time)
      );
    } else {
      // Otherwise, adds it to the array of selected times
      setSelectedTimes([...selectedTimes, time]);
    }
  };

  console.log(selectedTimes);
  return (
    <div>
      <DatePicker
        selected={startDate}
        onChange={handleDateChange}
        minDate={minDate}
        inline
      />

      <h6 className="availabletimesTitle">Available times on this date : </h6>
      <Suspense fallback={<h1> LOADING ...</h1>}>
        <div className="timeslots-container">
          <ul className="timeslots">
            {availableDates.length >= 1 ? (
              availableDates.map((time, index) => (
                <li key={index}>
                  <button
                    className="bttn"
                    style={{
                      backgroundColor: selectedTimes.includes(time)
                        ? "red"
                        : "green",
                    }}
                    onClick={() => handleClick(time)}
                  >
                    {time}
                  </button>
                </li>
              ))
            ) : (
              <Box sx={{ display: "flex" }}>
                <CircularProgress />
              </Box>
            )}
          </ul>
        </div>
      </Suspense>

      <Form
        choosedTimes={selectedTimes}
        choosedDate={startDate}
        idEnd={formattedDate}
      />
    </div>
  );
};

export default Page;

