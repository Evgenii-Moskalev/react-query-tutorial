import { useQuery } from "react-query"
import axios from "axios"

export const RQSuperHeroesPage = () => {
    useQuery('super-heroes', () => {
        return axios.get('http://localhost:4000/superheroes')
    })

    return <div>RQ Super Heroes Page</div>
}