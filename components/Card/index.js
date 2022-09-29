import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Cards = ({movies}) => {
  return (
    <div className="d-flex flex-wrap justify-content-center">
      {movies.map(item=>(
      <Card style={{ width: "18rem"}} className="m-2" key={item.imdbID}>
        <Card.Img variant="top" src={`${item.Poster}`} alt={item.Title} style={{height:270}} />
        <Card.Body>
          <Card.Title>{item.Title}</Card.Title>
          <Card.Text>
            {item.Year}
          </Card.Text>
        </Card.Body>
      </Card>
      ))}
    </div>
  );
};

export default Cards;
