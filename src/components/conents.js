import { useState } from "react";

function Content({ id, name, image, price, info, removeTour}) {
  const [readMore, setReadMore] = useState(false);
  const open = () =>{
      setReadMore(!readMore);
  }
  return (
    <section className="content-wrapper">
      <img className="tour-images" src={image} alt={name} />
      <div className="content-info">
        <div className="content-name-price">
          <h5 className="content-title">{name}</h5>
          <h5 className="price">${price}</h5>
        </div>
        <p>
          {readMore ? info : `${info.substring(0, 203)}... `}
          <button className="read-more-btn" onClick={open}>
            {readMore ? "Show Less" : "Read More"}
          </button>
        </p>
        <button onClick={()=>removeTour(id)} className="tour-btn">not interested</button>
      </div>
    </section>
  );
}

export default Content;
