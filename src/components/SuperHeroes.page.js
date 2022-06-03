import { useEffect, useState } from "react";
import axios from "axios";
const URL = `http://localhost:4000/superheroes`;

export default function SuperHeroesPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [heroes, setHeroes] = useState([]);
  const [error, setError] = useState("");
  useEffect(() => {
    axios
      .get(`${URL}`)
      .then((res) => {
        setHeroes(res.data);
        console.log(res);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(false);
      });
  }, []);
  if (isLoading) {
    return <h2>Loading...</h2>;
  } 
  else if (error) {
    return <h2>{error}</h2>;
  } 
  else {
    return (
      <div>
        <h2>Super Heroes Page</h2>
        {heroes.map((hero) => {
          return <div key={hero.name}>{hero.name}</div>;
        })}
      </div>
    );
  }
}
