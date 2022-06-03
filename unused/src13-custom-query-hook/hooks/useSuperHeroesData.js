import axios from 'axios';
import { useQuery } from 'react-query';
const URL = `http://localhost:4000/superheroes`;
const fetchSuperHeroes = () => axios.get(`${URL}`);

export function useSuperHeroesData(onSuccess, onError) {

  return useQuery(
    "super-heroes",
    fetchSuperHeroes,
    {
      onSuccess: onSuccess,
      onError: onError,
      select: (data) => {
        const superHeroNames = data.data.map((hero) => hero.name);
        return superHeroNames; // endi data  hero.name li array qaytaradi
      },
    }
  );
}
