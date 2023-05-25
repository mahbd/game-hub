import {HStack, Image} from "@chakra-ui/react";
import logo from "../assets/react.svg";
import ColorModeSwitch from "./ColorModeSwitch.tsx";

const Navbar = () => {
    return (
        <HStack justifyContent={"space-between"}>
            <Image src={logo} alt={"logo"} boxSize={"30px"}/>
            <ColorModeSwitch />
        </HStack>
    );
};

export default Navbar;