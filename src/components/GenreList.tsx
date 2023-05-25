import useGenres from "../hooks/useGenres.ts";
import {HStack, Image, List, ListItem, Text} from "@chakra-ui/react";
import getCroppedImgUrl from "../services/image-url.ts";

const GenreList = () => {
    const {data: genres} = useGenres();
    return (
        <List>
            {genres.map(genre => (
                <ListItem key={genre.id}>
                    <HStack paddingY={2}>
                        <Image boxSize={"32px"} borderRadius={8} src={getCroppedImgUrl(genre.image_background)}/>
                        <Text fontSize={'lg'}>{genre.name}</Text>
                    </HStack>
                </ListItem>
            ))}
        </List>
    );
};

export default GenreList;