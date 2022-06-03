import { useQuery } from "react-query";
import axios from "axios";

const URL = `http://localhost:4000/superheroes`;
const fetchSuperHeroes = () => axios.get(`${URL}`);

export default function RQSuperHeroesPage() {
  const { isLoading, data, isError, error, isFetching ,refetch} = useQuery(
    "super-heroes",
    fetchSuperHeroes,
    { enabled: false }
  );

  console.log({ isLoading, isFetching });

  if (isLoading) {
    return <h2>Loading...</h2>;
  } else if (isError) {
    return <h2>{error.message}</h2>;
  } else {
    return (
      <div>
        <h2>RQ Super Heroes Page <button onClick={refetch}>Fetch heroes</button></h2>
        {data?.data.map((hero) => (
          <div key={hero.name}>{hero.name}</div>
        ))}
      </div>
    );
  }
}
