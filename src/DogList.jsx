import { Link } from "react-router-dom";

function DogList( { dogs } ) {

  return (
<div>
<h1>Choose a dog to learn more!</h1>
{dogs.map(dog => (
<div key={ dog.name }>
<img src={ `../public/${dog.src}.jpg` } />
<Link to={ `/dogs/${dog.name}`}>
{ dog.name }
</Link>
</div>
))}
</div>
  );
}

export default DogList;