// import { useQuery } from "react-query"
// import axios from "axios"

// const fetchSuperHeroes = () => {
//     return axios.get('http://localhost:4000/superheroes')
// }
import { useState } from "react";

import { Link } from "react-router-dom";

import { useSuperHeroesData, useAddSuperHeroData } from "../hooks/useSuperHeroesData";

export const RQSuperHeroesPage = () => {
    const [name, setName] = useState('');
    const [alterEgo, setAlterEgo] = useState('');

    const onSuccess = (data) => {
        console.log('Perform side effect after data fetching', data);
    }

    const onError = (error) => {
        console.log('Perform side effect after encountering error', error);
    }

    const { isLoading, data, isError, error, isFetching, refetch } = useSuperHeroesData(onSuccess, onError);
    // = useQuery(
    //     'super-heroes',
    //     fetchSuperHeroes,
    //     {
    //         // cacheTime: 5000
    //         // staleTime: 30000

    //         // refetchOnMount: true,
    //         // refetchOnMount: false
    //         // refetchOnMount: 'always'

    //         // refetchOnWindowFocus: true,
    //         // refetchOnWindowFocus: false
    //         // refetchOnWindowFocus: 'always'

    //         // refetchInterval: false
    //         // refetchInterval: 2000,
    //         // refetchIntervalInBackground: true

    //         // enabled: false,

    //         // onSuccess: onSuccess,
    //         onSuccess,
    //         // onError: onError
    //         onError,

    //         select: (data) => {
    //             const superHeroNames = data.data.map(hero => hero.name);
    //             return superHeroNames;
    //         }
    //     }
    // )

    // console.log({ isLoading, isFetching });

    const { mutate: addHero, isLoading: isLoadingAddHero, isError: isErrorAddHero, error: errorAddHero } = useAddSuperHeroData()

    const handleAddHeroClick = () => {
        // console.log({ name, alterEgo });
        const hero = { name, alterEgo };
        addHero(hero);
    }

    if (isLoading
        || isFetching
        || isLoadingAddHero) {
        return (<h2>Loading...</h2>)
    }

    if (isError) {
        return <h2>{error.message}</h2>
    }
    if (isErrorAddHero) {
        return <h2>{errorAddHero.message}</h2>
    }

    return (<>
        <h2>RQ Super Heroes Page</h2>
        <div>
            <input
                type='text'
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type='text'
                value={alterEgo}
                onChange={(e) => setAlterEgo(e.target.value)}
            />
            <button onClick={handleAddHeroClick}>Add hero</button>
        </div>
        <button onClick={refetch}>Fetch heroes</button>
        {
            data?.data.map(hero => {
                return <div key={hero.id}>
                    <Link to={`/rq-super-heroes/${hero.id}`}>{hero.name}</Link>
                </div>
            })
        }
        {/* {data.map(heroName => {
            return <div key={heroName}>{heroName}</div>
        })} */}
    </>)
}