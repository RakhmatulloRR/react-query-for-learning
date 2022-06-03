import { useQuery } from "react-query";
import axios from "axios";

const URL = `http://localhost:4000/superheroes`;
const fetchSuperHeroes = () => axios.get(`${URL}`);

export default function RQSuperHeroesPage() {
  const onSuccess = (data) => {
    console.log("Perform side effect after data fetching", data);
  };
  const onError = (error) => {
    console.log("Perform side effect after encountering error", error);
  };
  const { isLoading, data, isError, error, isFetching } = useQuery(
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

  console.log({ isLoading, isFetching });

  if (isLoading) {
    return <h2>Loading...</h2>;
  } else if (isError) {
    return <h2>{error.message}</h2>;
  } else {
    return (
      <div>
        <h2>RQ Super Heroes Page</h2>
        {data.map((heroName) => (
          <div key={heroName}>{heroName}</div>
        ))}
      </div>
    );
  }
}
