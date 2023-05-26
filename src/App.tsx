import {Grid, GridItem, Show} from '@chakra-ui/react'
import Navbar from "./components/Navbar.tsx";
import GameGrid from "./components/GameGrid.tsx";
import GenreList from "./components/GenreList.tsx";
import {useState} from "react";
import {Genre} from "./hooks/useGenres.ts";
import {Platform} from "./hooks/useGames";
import PlatformSelector from "./components/PlatformSelector";

export interface GameQuery {
    genre: Genre | null;
    platform: Platform | null;
}

function App() {
    const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

    return <Grid templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`
    }}>
        <GridItem area={"nav"}>
            <Navbar/>
        </GridItem>
        <Show above={"lg"}>
            <GridItem width={"200px"} area={"aside"}>
                <GenreList selectedGenre={gameQuery.genre}
                           onSelectGenre={(genre => setGameQuery({...gameQuery, genre}))}/>
            </GridItem>
        </Show>
        <GridItem area={"main"}>
            <PlatformSelector selectedPlatform={gameQuery.platform}
                              onSelectPlatform={(platform => setGameQuery({...gameQuery, platform}))}/>
            <GameGrid gameQuery={gameQuery}/>
        </GridItem>
    </Grid>
}

export default App
