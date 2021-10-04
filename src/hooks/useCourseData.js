import { useEffect, useState } from "react"

const useCourseData = () => {
    const [ coursesData, setCoursesData ] = useState([]);

    useEffect( () => {
        fetch("./coursesData.JSON")
            .then(res => res.json())
            .then(data => setCoursesData(data))
    },[]);

    return [coursesData]
};

export default useCourseData;