
"use server"

async function fetchData(isFirstRender,formattedDate, startDate) {

    if (!isFirstRender.current && startDate) {
        try {
            const response = await fetch("http://localhost:3000/api/booking", {
                method: "POST",
                headers: { "Content-type": "application/json" },
                body: JSON.stringify({
                    bookingDay: formattedDate,
                }),
            });
            if (response.ok) {
                console.log('newbookingday is createddddddddddddddddddddddddddd');
            }
            // Handle response if needed
        } catch (error) {
            // Handle error
            console.log('error' ,error)
        }
    }
}


  export default fetchData;

