
 'use server'
 export default async function getAllCourses(){
    const res = await fetch('http://localhost:3000/api/courses');
    if (!res.ok){
        throw new Error('error while fetching data');

    }
    const data = await res.json();
    return data;
 }