import { useParams } from "react-router-dom";

function DogDetails( { dogs } ) {
const { dog } = useParams();

const dogDetails = dogs.find(d => d.name.toLowerCase() === dog.toLowerCase() );

  return (
    <>
        <h1>{ dogDetails.name }</h1>
        <img src={ `../public/${dogDetails.src}.jpg` } />
        <p>Age: { dogDetails.age } </p>
        <br />
        <h3>Facts about { dogDetails.name }:</h3>
        <ul>
            { dogDetails.facts.map((f, index) => (
                <li key={index}>{f}</li>
            ))}
        </ul>
    </>
  );
}

export default DogDetails;