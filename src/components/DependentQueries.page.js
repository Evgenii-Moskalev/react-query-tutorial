import { useQuery } from "react-query"
import axios from "axios"

const fetchUserByEmail = (email) => {
    // console.log(email);
    return axios.get(`http://localhost:4000/users/${email}`)
}

const fetchCoursesByChanelId = (channelId) => {
    return axios.get(`http://localhost:4000/channels/${channelId}`)
}

export const DependentQueriesPage = ({ email }) => {
    const { data: user } = useQuery(['user', email], () => fetchUserByEmail(email))
    const channelId = user?.data.channelId

    // console.log(!!channelId);
    const { data: courses } = useQuery(['courses', channelId], () => fetchCoursesByChanelId(channelId), {
        enabled: !!channelId
    })


    return (<>
        {/* <div>{channelId}</div> */}
        <div>{courses.data.courses[0]}</div>
    </>
    )
}