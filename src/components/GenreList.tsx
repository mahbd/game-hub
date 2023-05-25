import useGenres from "../hooks/useGenres.ts";
import {HStack, Image, List, ListItem, Spinner, Text} from "@chakra-ui/react";
import getCroppedImgUrl from "../services/image-url.ts";

const GenreList = () => {
    const {data: genres, isLoading, error} = useGenres();
    if (error) {
        return null;
    }
    if (isLoading) {
        return <Spinner />;
    }
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