
'use server'
export default async function fetchAllAndAuthor(id) {
    let res; // Define res variable outside of the if blocks

    if (id) {
        res = await fetch(`https://zeheproject-git-main-kpaxs-projects.vercel.app/api/courses?author=${id}`);
    } else {
        res = await fetch(`https://zeheproject-git-main-kpaxs-projects.vercel.app/api/courses`);
    }

    if (!res.ok) {
        throw new Error('error while fetching data');
    }

    const data = await res.json();
    console.log('data from fetchauthor',data);
    return data;
}
