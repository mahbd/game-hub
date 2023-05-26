import {HStack, Image} from "@chakra-ui/react";
import logo from "../assets/react.svg";
import ColorModeSwitch from "./ColorModeSwitch.tsx";
import SearchInput from "./SearchInput";

interface Props {
    onSearch: (searchText: string) => void;
}

const Navbar = ({onSearch}: Props) => {
    return (
        <HStack>
            <Image src={logo} alt={"logo"} boxSize={"30px"}/>
            <SearchInput onSearch={onSearch}/>
            <ColorModeSwitch/>
        </HStack>
    );
};

export default Navbar;