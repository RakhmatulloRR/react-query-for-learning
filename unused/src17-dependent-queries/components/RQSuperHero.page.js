import React from "react";
import { useParams } from "react-router-dom";
import { useSuperHeroData } from "../hooks/useSuperHeroData";

export default function RQSuperHeroPage() {
  const { heroId } = useParams();
  const { isLoading, data, isError, error } = useSuperHeroData(heroId);
  if (isLoading) {
    return  <h2>Loading...</h2>
  } 
  if (isError) {
    return  <h2>{error.message}</h2>
  } 
  else {
    return (
      <>
        <div>Super Hero Details</div>
        <h2>{data.data.name} - {data.data.alterEgo}</h2>
      </>
    );
  }
}
