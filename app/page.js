import CardList from "./components/card";

async function getRestaurants() {
  const res = await fetch(`${process.env.ENDPOINT_API}?type=${process.env.TYPE_PLACE_SEARCH}&key=${process.env.GOOGLE_API_KEY}`);
  if (!res.ok) {
    throw new Error('cannot fetch')
  }
  const data = await res.json();
  return data;
}

export default async function Home() {
  const restaurants = await getRestaurants();
  
  return (
    <CardList data={restaurants}/>
  );
};