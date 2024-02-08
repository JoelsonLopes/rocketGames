import PropTypes from "prop-types";
import { Container } from "./styles";
import { VscStarFull, VscStarEmpty, VscStarHalf } from "react-icons/vsc";

export function Rating({ grade, $isBigSize }) {
  const renderStars = () => {
    const stars = [];
    for (let cont = 1; cont <= 5; cont++) {
      if (cont <= grade) {
        stars.push(<VscStarFull key={cont} />);
      } else if (cont - 0.5 <= grade) {
        stars.push(<VscStarHalf key={cont} />);
      } else {
        stars.push(<VscStarEmpty key={cont} />);
      }
    }
    return stars;
  };

  return <Container $isBigSize={$isBigSize}>{renderStars()}</Container>;
}

Rating.propTypes = {
  grade: PropTypes.number, 
  $isBigSize: PropTypes.bool,
};

Rating.defaultProps = {
  grade: 0,
  $isBigSize: false,
};
