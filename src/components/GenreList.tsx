import useGenres, {Genre} from "../hooks/useGenres.ts";
import {Button, Heading, HStack, Image, List, ListItem, Spinner} from "@chakra-ui/react";
import getCroppedImgUrl from "../services/image-url.ts";

interface Props {
    onSelectGenre: (genre: Genre) => void;
    selectedGenre: Genre | null;
}

const GenreList = ({selectedGenre, onSelectGenre}: Props) => {
    const {data: genres, isLoading, error} = useGenres();
    if (error) {
        return null;
    }
    if (isLoading) {
        return <Spinner/>;
    }
    return (
        <>
            <Heading fontSize={'2xl'} marginBottom={2}>Genres</Heading>
            <List width={"200px"}>
                {genres.map(genre => (
                    <ListItem key={genre.id}>
                        <HStack paddingY={2}>
                            <Image boxSize={"32px"} borderRadius={8} objectFit={'cover'}
                                   src={getCroppedImgUrl(genre.image_background)}/>
                            <Button fontWeight={genre.id == selectedGenre?.id ? 'bold' : 'normal'}
                                    onClick={() => onSelectGenre(genre)} variant={"link"}
                                    whiteSpace={"normal"} textAlign={'left'} fontSize={'lg'}>
                                {genre.name}
                            </Button>
                        </HStack>
                    </ListItem>
                ))}
            </List>
        </>
    );
};

export default GenreList;