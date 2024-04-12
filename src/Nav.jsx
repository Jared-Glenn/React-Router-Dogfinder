import { Link } from "react-router-dom";

function Nav( { dogs } ) {

  return (
<div>
{dogs.map(dog => (
<Link key={ dog.name } to={ `/dogs/${dog.name}`}>
{ dog.name }
</Link>
))}
</div>
  );
}

export default Nav;