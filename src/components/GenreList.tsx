import useGenres, {Genre} from "../hooks/useGenres.ts";
import {Button, HStack, Image, List, ListItem, Spinner} from "@chakra-ui/react";
import getCroppedImgUrl from "../services/image-url.ts";

interface Props {
    onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({onSelectGenre}: Props) => {
    const {data: genres, isLoading, error} = useGenres();
    if (error) {
        return null;
    }
    if (isLoading) {
        return <Spinner />;
    }
    return (
        <List width={"200px"}>
            {genres.map(genre => (
                <ListItem key={genre.id}>
                    <HStack paddingY={2}>
                        <Image boxSize={"32px"} borderRadius={8} src={getCroppedImgUrl(genre.image_background)}/>
                        <Button onClick={() => onSelectGenre(genre)} variant={"link"} fontSize={'lg'}>{genre.name}</Button>
                    </HStack>
                </ListItem>
            ))}
        </List>
    );
};

export default GenreList;