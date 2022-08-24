import { useEffect, useState } from "react";
import Container from "./components/container";
import Loading from "./components/loading";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [tours, setTours] = useState([]);
  const url = "https://course-api.com/react-tours-project";
  const removeTour = (id) => {
    const newTour = tours.filter((tour) => tour.id !== id)
    setTours(newTour)
  }
  const fetchTours = async () =>{
    setIsLoading(true);
  try{
     const response = await fetch(url);
    const tours = await response.json();
    setIsLoading(false);
    setTours(tours);
  } catch (error){
    setIsLoading(false)
  }
  }
  useEffect(() => {
    fetchTours();
  }, []);

  const openTours = () => {
    setTours(fetchTours);
  };

  if (isLoading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }
  if(tours.length === 0){
    return (
      <div>
        <div className="heading-box">
          <h1 className="heading">no new Tours</h1>
        </div>
        <button onClick={openTours} className="refresh-btn">Refresh</button>
      </div>
    );
  }
  return (
    <div className="wrapper">
      <section className="container">
        <Container tours={tours} removeTour={removeTour} />
      </section>
    </div>
  );
}

export default App;
