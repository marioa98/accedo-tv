import PropTypes from "prop-types";
import colors from "../../theme/colors";
import Button from "../Navbar/theme/MenuButton/MenuButton";

const DeleteButton = ({ children, ...props }) => (
  <Button className="danger" {...props}>
    {children}
  </Button>
);

DeleteButton.propTypes = {
  children: PropTypes.any
}

export default DeleteButton;
