import { useQuery } from 'react-query'
import axios from 'axios'

const fetchHero = ({ queryKey }) => {
    const heroId = queryKey[1]
    return axios.get(`http://localhost:4000/superheroes/${heroId}`)
}

// export const useHeroData = (heroId) => {
//     return useQuery(['hero', heroId], () => fetchHero(heroId))
// }
export const useHeroData = (heroId) => {
    return useQuery(['hero', heroId], fetchHero)
}