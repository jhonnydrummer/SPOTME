import * as C from './StyleInput'
import PropTypes from 'prop-types';

const Input = ({type, placeholder, value, onChange}) => {
    return (
    <C.Input
        value={value}
        onChange={onChange}
        type={type}
        placeholder={placeholder}
    />
    )
}

Input.propTypes = {
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    };

export default Input