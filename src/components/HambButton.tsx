import {
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-scroll";

const HambButton = () => {
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label="Menu"
        icon={<RxHamburgerMenu />}
        fontSize={30}
        bg={"black"}
        color={"white"}
        _expanded={{ bg: "black", border: "1px" }}
        _focus={{ bg: "black" }}
        _hover={{ bg: "black" }}
      />
      <MenuList bg={"black"}>
        <Link
          to="Home"
          spy={true}
          smooth={true}
          offset={-160}
          duration={500}
          key={"Home"}
        >
          <MenuItem justifyContent={"center"} bg={"black"} color="white">
            Home
          </MenuItem>
        </Link>
        <Link
          to="About"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          key={"About"}
        >
          <MenuItem justifyContent={"center"} bg={"black"} color="white">
            About
          </MenuItem>
        </Link>
        <Link
          to="Why"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          key={"Why"}
        >
          <MenuItem justifyContent={"center"} bg={"black"} color="white">
            Why
          </MenuItem>
        </Link>
        <Link
          to="Price"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          key={"Price"}
        >
          <MenuItem justifyContent={"center"} bg={"black"} color="white">
            Price
          </MenuItem>
        </Link>
        <Link
          to="How"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          key={"How"}
        >
          <MenuItem justifyContent={"center"} bg={"black"} color="white">
            How
          </MenuItem>
        </Link>
        <Link
          to="Contact"
          spy={true}
          smooth={true}
          offset={-160}
          duration={500}
          key={"Contact"}
        >
          <MenuItem justifyContent={"center"} bg={"black"} color="white">
            Contacts
          </MenuItem>
        </Link>
      </MenuList>
    </Menu>
  );
};

export default HambButton;
