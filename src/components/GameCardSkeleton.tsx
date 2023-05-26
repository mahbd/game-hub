import {Card, CardBody, Skeleton, SkeletonText} from "@chakra-ui/react";

const GameCardSkeleton = () => {
    return (
        <Card overflow={"hidden"}>
            <Skeleton height={"200px"} width={"600px"}/>
            <CardBody>
                <SkeletonText/>
            </CardBody>
        </Card>
    );
};

export default GameCardSkeleton;