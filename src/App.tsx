import {Grid, GridItem, Show} from '@chakra-ui/react'
import Navbar from "./components/Navbar.tsx";
import GameGrid from "./components/GameGrid.tsx";
import GenreList from "./components/GenreList.tsx";
import {useState} from "react";
import {Genre} from "./hooks/useGenres.ts";

function App() {
    const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

    return <Grid templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`
    }}>
        <GridItem area={"nav"}>
            <Navbar />
        </GridItem>
        <Show above={"lg"}>
            <GridItem width={"200px"} area={"aside"}>
                <GenreList onSelectGenre={setSelectedGenre} />
            </GridItem>
        </Show>
        <GridItem area={"main"}>
            <GameGrid selectedGenre={selectedGenre} />
        </GridItem>
    </Grid>
}

export default App
