import { useSuperHeroesData } from "../hooks/useSuperHeroesData";

export default function RQSuperHeroesPage() {
  const onSuccess = (data) => {
    console.log("Perform side effect after data fetching", data);
  };
  const onError = (error) => {
    console.log("Perform side effect after encountering error", error);
  };
  const { isLoading, data, isError, error, isFetching } = useSuperHeroesData(
    onSuccess,
    onError
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
