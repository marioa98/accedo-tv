import Button from "../../../Buttons/Button";

const MenuButton = ({ children, ...props }) => (
  <Button className="alert" {...props}>
    {children}
  </Button>
)

export default MenuButton;
