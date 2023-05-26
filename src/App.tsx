import {Box, Flex, Grid, GridItem, Show} from '@chakra-ui/react'
import Navbar from "./components/Navbar.tsx";
import GameGrid from "./components/GameGrid.tsx";
import GenreList from "./components/GenreList.tsx";
import {useState} from "react";
import {Genre} from "./hooks/useGenres.ts";
import {Platform} from "./hooks/useGames";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";

export interface GameQuery {
    genre: Genre | null;
    platform: Platform | null;
    sortOrder: string;
}

function App() {
    const [gameQuery, setGameQuery] = useState<GameQuery>({sortOrder: ''} as GameQuery);

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
            <Flex paddingLeft={9}>
                <PlatformSelector selectedPlatform={gameQuery.platform}
                                  onSelectPlatform={(platform => setGameQuery({...gameQuery, platform}))}/>

                <Box marginLeft={5}>
                    <SortSelector sortOrder={gameQuery.sortOrder}
                                  onSelectSortOrder={sortOrder => setGameQuery({...gameQuery, sortOrder})}/>
                </Box>
            </Flex>
            <GameGrid gameQuery={gameQuery}/>
        </GridItem>
    </Grid>
}

export default App
