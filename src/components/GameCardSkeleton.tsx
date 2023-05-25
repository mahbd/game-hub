import {Card, CardBody, Heading, Skeleton, SkeletonText} from "@chakra-ui/react";

const GameCardSkeleton = () => {
    return (
        <Card width={"300px"}>
            <Skeleton height={"200px"}/>
            <CardBody>
                <Heading fontSize={"2xl"}>
                    <SkeletonText />
                </Heading>
            </CardBody>
        </Card>
    );
};

export default GameCardSkeleton;