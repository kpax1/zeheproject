'use client'
import React, { useState } from 'react';
import fetchAuthor from '@/lib/fetchAllAndAuthor';

const Filterbutton = () => {
    const [data, setData] = useState(null); // State to store fetched data
    const mentors = ['Levs', 'GochaDj'];
    const [active, setActive] = useState('');
    const handleFilter = (mentor)=>{
        setActive(mentor)
    }
    const handleClick = async () => {
        const fetchedData = await fetchAuthor(mentors[0]);
        setData(fetchedData); // Update state with fetched data
    };

    console.log({active})
    return (
        <div>
            <button onClick={handleClick}>Filter authors</button>
            <ul>
            {mentors.map((mentor)=>(
                <button key={mentor}
                onClick={()=>handleFilter(mentor)}
                className={`${active === mentor ? 'active' : ''}`}

                > {mentor}</button>
            ))}
            </ul>
            <ul>
                {data &&
                    data.map((el) => (
                        <li key={el.id}>
                            {el.name} {/* Corrected the assignment of el.name */}
                        </li>
                    ))}
            </ul>
        </div>
    );
};

export default Filterbutton;
