import axios from "axios";
import { useQuery } from "react-query";
const URL = `http://localhost:4000/superheroes`;
const fetchSuperHero = ({queryKey}) => axios.get(`${URL}/${queryKey[1]}`);

export function useSuperHeroData(heroId) {
                      // queryKey
  return useQuery(["super-heroe", heroId], fetchSuperHero);
}
