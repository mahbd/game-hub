import {SimpleGrid, Text} from "@chakra-ui/react";
import useGames from "../hooks/useGames.tsx";
import GameCard from "./GameCard.tsx";
import GameCardSkeleton from "./GameCardSkeleton.tsx";
import {Fragment} from "react";
import GameCardContainer from "./GameCardContainer.tsx";

const GameGrid = () => {
    const {data: games, error, isLoading} = useGames();
    const skeletons = Array(6).fill(null);
    return (
        <Fragment>
            {error && <Text>{error}</Text>}
            <SimpleGrid padding={10} columns={{
                sm: 1,
                md: 2,
                lg: 3,
                xl: 4
            }} spacing={3}>
                {isLoading && skeletons.map((_, index) => (
                    <GameCardContainer>
                        <GameCardSkeleton key={index}/>
                    </GameCardContainer>
                ))}
                {!isLoading && games.map(game => (
                    <GameCardContainer>
                        <GameCard game={game} key={game.id}/>
                    </GameCardContainer>
                ))}
            </SimpleGrid>
        </Fragment>
    );
};

export default GameGrid;