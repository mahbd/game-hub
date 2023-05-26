import {HStack, Image} from "@chakra-ui/react";
import logo from "../assets/react.svg";
import ColorModeSwitch from "./ColorModeSwitch.tsx";
import SearchInput from "./SearchInput";

const Navbar = () => {
    return (
        <HStack>
            <Image src={logo} alt={"logo"} boxSize={"30px"}/>
            <SearchInput/>
            <ColorModeSwitch/>
        </HStack>
    );
};

export default Navbar;