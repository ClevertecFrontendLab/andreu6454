import { Box, Card, Image } from '@chakra-ui/icons';
import { Flex } from '@chakra-ui/react';

import { Typography, TypographySizes } from '~/shared/ui/Typography/Typography';

interface StepCardProps {
    stepNumber: number;
    description: string;
    image: string;
    screenSize: 'Desktop' | 'Mobile' | 'Laptop' | 'Tablet';
}

const sizes = {
    Desktop: {
        width: '668px',
        imgWidth: '346px',
        imgHeight: '244px',
        padding: '20px 24px',
        gap: '16px',
    },
    Laptop: {
        width: '578px',
        imgWidth: '346px',
        imgHeight: '244px',
        padding: '20px 24px',
        gap: '16px',
    },
    Tablet: {
        width: '604px',
        imgWidth: '158px',
        imgHeight: '128px',
        padding: '8px',
        gap: '12px',
    },
    Mobile: {
        width: '328px',
        imgWidth: '158px',
        imgHeight: '128px',
        padding: '8px',
        gap: '12px',
    },
};

const StepCard = (props: StepCardProps) => {
    const { stepNumber, description, image, screenSize } = props;
    return (
        <Card direction='row' width={sizes[screenSize].width} border-radius='8px' overflow='hidden'>
            {image && (
                <Image
                    height={sizes[screenSize].imgHeight}
                    width={sizes[screenSize].imgWidth}
                    src={image}
                />
            )}
            <Flex
                padding={sizes[screenSize].padding}
                direction='column'
                gap={sizes[screenSize].gap}
            >
                <Box
                    padding='2px 8px'
                    backgroundColor='rgba(0, 0, 0, 0.06)'
                    borderRadius='4px'
                    width='max-content'
                >
                    <Typography Size={TypographySizes.sm}>{`Шаг ${stepNumber}`}</Typography>
                </Box>
                <Typography
                    maxHeight='100%'
                    Size={TypographySizes.sm}
                    overflow='hidden'
                    textOverflow='ellipsis'
                >
                    {description}
                </Typography>
            </Flex>
        </Card>
    );
};

export default StepCard;
