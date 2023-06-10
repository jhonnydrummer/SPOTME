import * as C from './StyleButton'
import PropTypes from 'prop-types';

const Button = ({Text, onClick, Type = 'button'}) => {
  return (        
    <C.Button type={Type} onClick={onClick}>
      {Text}
    </C.Button>   
  )
  
}
Button.propTypes = {
  Text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  Type: PropTypes.string,
  };

export default Button