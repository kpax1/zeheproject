"use server"

 const fetchAvailableTimes = async (startDate) => {
    try {
      const formattedDate = `${startDate.getDate()}.${
        startDate.getMonth() + 1
      }.${startDate.getFullYear()}`;
      const response = await fetch(`http://localhost:3000/api/booking/${formattedDate}`, {
        method: "GET",
        cache: "no-cache",
      });
      if (response.ok) {
        const data = await response.json(); // Parse response body as JSON
        return data;
        // Log fetched data
        // Handle the fetched data as needed, maybe set it to state for display
      } else {
        throw new Error("Failed to fetch data");
      }
    } catch (error) {
      console.log(error);
    }
  };


  export default fetchAvailableTimes