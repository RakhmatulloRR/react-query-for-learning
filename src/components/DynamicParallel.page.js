import axios from 'axios';
import React from 'react'
import { useQueries } from 'react-query';
const URL1 = "http://localhost:4000/superheroes";
const fetchSuperHero = (heroId) => axios.get(`${URL1}/${heroId}`);

export default function DynamicParallelPage({heroIds}) {
  const queryResults = useQueries(
    heroIds.map(id => {
      return {
        queryKey: ["super-hero", id],
        queryFn: () => fetchSuperHero(id),
      }
    })
  );
  console.log(queryResults)
  return (
    <div>DynamicParallel</div>
  )
}
