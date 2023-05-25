import {Badge} from "@chakra-ui/react";

interface Props {
    score: number;
}

const CriticScore = ({score}: Props) => {
    const color = score < 50 ? "red" : score < 75 ? "yellow" : "green";
    return (
        <Badge borderRadius={5} padding={2} color={color}>
            {score}
        </Badge>
    );
};

export default CriticScore;