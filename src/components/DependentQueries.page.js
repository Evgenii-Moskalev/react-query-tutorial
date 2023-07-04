// import { useQuery } from "react-query"
// import axios from "axios"


// const fetchUserByEmail = (email) => {
//     // console.log(email);
//     return axios.get(`http://localhost:4000/users/${email}`)
// }

// const fetchCoursesByChanelId = (channelId) => {
//     return axios.get(`http://localhost:4000/channels/${channelId}`)
// }

// export const DependentQueriesPage = ({ email }) => {
//     const { data: user } = useQuery(['user', email], () => fetchUserByEmail(email))
//     const channelId = user?.data.channelId

//     // console.log(!!channelId);
//     const { data: courses } = useQuery(['courses', channelId], () => fetchCoursesByChanelId(channelId), {
//         enabled: !!channelId
//     })


//     return (<>
//         {/* <div>{channelId}</div> */}
//         {courses?.data.courses.map(cours => <div key={cours}>{cours}</div>)}
//     </>
//     )
// }

// import { useQuery } from 'react-query';
// import axios from 'axios';

// const fetchUserByEmail = (email) => {
//     return axios.get(`http://localhost:3000/users/${email}`);
// }

// const fetchCoursesByChanelId = (channelId) => {
//     return axios.get(`http://localhost:3000/channels/${channelId}`)
// }

// export const DependentQueriesPage = ({ email }) => {

//     const {isLoading, data: user, isError, error } = useQuery(['user', email], () => fetchUserByEmail(email));
    
//     const channelId = user?.data.channelId;

//     const { data: courses } = useQuery(['courses', channelId], () => fetchCoursesByChanelId(channelId),
//         { enabled: !!channelId }
//     );


//     if (isLoading) {
//         return <h2>Loading...</h2>
//     }
//     if (isError) {
//         return <h2>{error.message}</h2>
//     }

    
    
// // console.log(courses);

//     return (<div>{courses?.data.courses.map(channel => <div key={channel}>{channel}</div>)}</div>)
// }


import { useQuery } from "react-query";
import axios from "axios";

const fetchUserByEmail = (email) => {
    // console.log(email);
    return axios.get(`http://localhost:3000/users/${email}`);
}

const fetchCoursesByChanelId = (channelId) => {
    return axios.get(`http://localhost:3000/channels/${channelId}`);
}

export const DependentQueriesPage = ({email}) => {


    const{isLoading, data:user, isError, error } = useQuery(['user', email], () => fetchUserByEmail(email));

    const channelId = user?.data.channelId;

    const { data: courses } = useQuery(['courses', channelId], () => fetchCoursesByChanelId(channelId), {
        enabled: !!channelId
    });

    if (isLoading) {
        return (<h2>Loading...</h2>)
    }
    if (isError) {
        return <h2>{error.message}</h2>
}

    // console.log(courses);

    return (
        <div>{courses?.data.courses.map(course => <div key={course}>{course}</div>)}</div>
    )
}