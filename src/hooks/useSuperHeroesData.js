import { useQuery, useMutation } from 'react-query';
import axios from "axios"

const fetchSuperHeroes = () => {
    return axios.get('http://localhost:3000/superheroes')
}

const addSuperHero = (hero) => {
    return axios.post('http://localhost:3000/superheroes', hero)
}

export const useSuperHeroesData = (onSuccess, onError) => {
    return useQuery('super-heroes', fetchSuperHeroes, {
        onSuccess,
        onError,
        // select: (data) => {
        //     const superHeroNames = data.data.map(hero => hero.name);
        //     return superHeroNames;
        // }
    })
}

export const useAddSuperHeroData = () => {
    return useMutation(addSuperHero);
}