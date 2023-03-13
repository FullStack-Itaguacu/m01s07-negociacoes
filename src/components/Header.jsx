import PropTypes from "prop-types";

export const Header = (props) => {
  // Você pode modificar este arquivo, ou até apagá-lo,
  // caso use o seu próprio projeto desenvolvido durante
  // as primeiras semanas.

  return (
    <div className="py-5 bg-primary text-light">
      <h1 className="text-center ">{props.titulo}</h1>
    </div>
  );
};

Header.propTypes = {
  titulo: PropTypes.string.isRequired,
};
