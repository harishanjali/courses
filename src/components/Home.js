import React,{useState,useEffect} from 'react'
import { getCourses } from '../config/Myservice'
import { useNavigate } from 'react-router-dom';


export default function Home() {
    const [courses,setCourses] = useState([]);
    const navigate = useNavigate();
    useEffect(()=>{
        getCourses()
        .then(res=>setCourses(res.data))
        .catch(err=>console.log(err));
    },[])
    const gotoEnquiry = ()=>{
        navigate('/enquiry')
    }
  return (
    <>
    <div className='container mt-4'>
        <h1>List of Courses</h1>
        {courses.map(course=>(
            <div className='d-flex justify-content-between mb-3 mt-4'>
                <h2>{course.name}</h2>
                <button className='btn btn-dark' onClick={gotoEnquiry}>Enquiry</button>
            </div>
        ))}
    </div>
        
    </>
  )
}
