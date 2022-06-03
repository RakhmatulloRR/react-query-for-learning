import axios from 'axios'
import React from 'react'
import { useQuery } from 'react-query'
const URL1 = 'http://localhost:4000/superheroes'
const URL2 = 'http://localhost:4000/friends'
const fetchSuperHeroes = () => axios.get(`${URL1}`)
const fetchFriends = () => axios.get(`${URL2}`)

export default function ParallelQueriesPage() {

  const {data: superHeroes} = useQuery("super-heroes", fetchSuperHeroes);
  const {data: friends} = useQuery("friends", fetchFriends);
  console.log(superHeroes, friends)
  return (
    <div>Parallel Queries Page</div>
  )
}
