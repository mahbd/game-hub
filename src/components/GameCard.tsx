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
        <Card borderRadius={10} overflow={"hidden"} width={"300px"}>
            <Image src={getCroppedImgUrl(game.background_image)}/>
            <CardBody>
                <Heading fontSize={"2xl"}>
                    {game.name}
                </Heading>

                <HStack justifyContent={"space-between"}>
                    <PlatformIconList platforms={game.parent_platforms.map(({platform}) => platform)}/>
                    <CriticScore score={game.metacritic}/>
                </HStack>
            </CardBody>
        </Card>
    );
};

export default GameCard;