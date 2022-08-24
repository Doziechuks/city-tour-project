import Content from "./conents";

function Container ({tours, removeTour}){
  let tourList = tours.map((tour) => {
    return (
      <Content key={tour.id} {...tour} removeTour={removeTour} />
    );
  });
  return (
    <section>
      <div className="heading-box">
        <h1 className="heading">Our Tours</h1>
        <div className="underline"></div>
      </div>
      <div className="tour-list">{tourList}</div>
    </section>
  );
}

export default Container