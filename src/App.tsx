import {Grid, GridItem, Show} from '@chakra-ui/react'
import Navbar from "./components/Navbar.tsx";

function App() {

    return <Grid templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`
    }}>
        <GridItem area={"nav"}>
            <Navbar />
        </GridItem>
        <Show above={"lg"}>
            <GridItem area={"aside"} bg={"dodgerblue"}>Aside</GridItem>
        </Show>
        <GridItem area={"main"} bg={"gold"}>Main</GridItem>
    </Grid>
}

export default App
