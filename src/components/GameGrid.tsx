import {SimpleGrid, Text} from "@chakra-ui/react";
import useGames, {Platform} from "../hooks/useGames.tsx";
import GameCard from "./GameCard.tsx";
import GameCardSkeleton from "./GameCardSkeleton.tsx";
import {Fragment} from "react";
import GameCardContainer from "./GameCardContainer.tsx";
import {Genre} from "../hooks/useGenres.ts";
import PlatformSelector from "./PlatformSelector.tsx";

interface Props {
    selectedGenre: Genre | null;
    selectedPlatform: Platform | null;
    onSelectPlatform: (platform: Platform | null) => void;
}

const GameGrid = ({selectedGenre, selectedPlatform, onSelectPlatform}: Props) => {
    const {data: games, error, isLoading} = useGames(selectedGenre, selectedPlatform);
    const skeletons = Array(20).fill(null);
    return (
        <Fragment>
            <PlatformSelector onSelectPlatform={onSelectPlatform} selectedPlatform={selectedPlatform}/>
            {error && <Text>{error}</Text>}
            <SimpleGrid padding={10} columns={{
                sm: 1,
                md: 2,
                lg: 3,
                xl: 4
            }} spacing={3}>
                {isLoading && skeletons.map((_, index) => (
                    <GameCardContainer key={index}>
                        <GameCardSkeleton/>
                    </GameCardContainer>
                ))}
                {!isLoading && games.map(game => (
                    <GameCardContainer key={game.id}>
                        <GameCard game={game}/>
                    </GameCardContainer>
                ))}
            </SimpleGrid>
        </Fragment>
    );
};

export default GameGrid;