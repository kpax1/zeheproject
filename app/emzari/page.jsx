  import React from 'react'
  import getAllCourses from '@/lib/getCourse';
import AllCources from '@/components/allCources';
  import Filterbutton from '@/components/filterbutton';
  import fetchAuthor from '@/lib/fetchAllAndAuthor'
  const Page = async () => {
      const data = await getAllCourses();
      const datafromparams = await fetchAuthor()
      const courses = await data;
      const paramsData = await datafromparams;
      console.log('paramsData = ',paramsData)
        return (
          <>   <div className='center'>
              <div className='coursesHeader'>
              <h1>/ All courses</h1>
              </div>

                <Filterbutton/>

                <div className='red'>

    <ul>
        {paramsData.map((course) => (
            <li key={course._id}>
                {course._author}
                {course.name}
            </li>
        ))}
    </ul>
  <AllCources courses={courses} />

              </div>
              


              
              </div>

          </>
      );
  }

  export default Page;
