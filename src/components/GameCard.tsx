import {Game} from "../hooks/useGames.tsx";
import {Card, CardBody, Heading, HStack, Image} from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList.tsx";
import CriticScore from "./CriticScore.tsx";
import getCroppedImgUrl from "../services/image-url.ts";

interface Props {
    game: Game;
}

const GameCard = ({game}: Props) => {
    return (
        <Card>
            <Image src={getCroppedImgUrl(game.background_image)}/>
            <CardBody>
                <HStack justifyContent={"space-between"} marginBottom={3}>
                    <PlatformIconList platforms={game.parent_platforms.map(({platform}) => platform)}/>
                    <CriticScore score={game.metacritic}/>
                </HStack>

                <Heading fontSize={"2xl"}>
                    {game.name}
                </Heading>
            </CardBody>
        </Card>
    );
};

export default GameCard;