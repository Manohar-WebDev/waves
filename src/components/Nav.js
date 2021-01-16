import { faMusic } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Nav = ({ toggleLibrary, setToggleLibrary }) => {
  return (
    <nav>
      <h1>Waves</h1>
      <button onClick={() => setToggleLibrary(!toggleLibrary)}>
        Library
        <FontAwesomeIcon icon={faMusic} />
      </button>
    </nav>
  );
};

export default Nav;
