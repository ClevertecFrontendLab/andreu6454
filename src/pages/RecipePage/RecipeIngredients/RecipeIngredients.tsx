import { Table, Thead, Tr } from '@chakra-ui/icons';
import {
    Flex,
    NumberDecrementStepper,
    NumberIncrementStepper,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    TableContainer,
    Tbody,
    Td,
    Text,
} from '@chakra-ui/react';
import { memo, useState } from 'react';

interface RecipeIngredientsProps {
    ingredients: Array<{ title: string; count: string; measureUnit: string }>;
    screenSize: 'Desktop' | 'Mobile' | 'Laptop' | 'Tablet';
}

const sizes = {
    Desktop: {
        width: '668px',
    },
    Laptop: {
        width: '578px',
    },
    Tablet: {
        width: '728px',
    },
    Mobile: {
        width: '328px',
    },
};

export const RecipeIngredients = memo((props: RecipeIngredientsProps) => {
    const { ingredients, screenSize } = props;

    const [count, setCount] = useState<number>(1);

    const mappedIngredients = ingredients.map((ingredient, index) => {
        const resultCount = Number(count) * Number(ingredient?.count);
        return (
            <Tr key={ingredient.title} background={(index + 1) % 2 ? 'rgba(0, 0, 0, 0.06)' : ''}>
                <Td>{ingredient.title}</Td>
                <Td textAlign='right'>
                    {!!resultCount && resultCount}
                    {' ' + ingredient.measureUnit}
                </Td>
            </Tr>
        );
    });

    return (
        <TableContainer width={sizes[screenSize].width}>
            <Table variant='unstyled' width='100%' layout='fixed'>
                <Thead>
                    <Tr>
                        <Td>
                            <Text
                                fontWeight='700'
                                fontSize='12px'
                                lineHeight='133%'
                                letterSpacing='0.05em'
                                color='#2db100'
                            >
                                ИНГРЕДИЕНТЫ
                            </Text>
                        </Td>
                        <Td textAlign='right'>
                            <Flex alignItems='center' gap='16px' justifyContent='flex-end'>
                                <Text
                                    fontWeight='700'
                                    fontSize='12px'
                                    lineHeight='133%'
                                    letterSpacing='0.05em'
                                    color='#2db100'
                                >
                                    ПОРЦИЙ
                                </Text>
                                <NumberInput
                                    onChange={(e) => {
                                        setCount(Number(e));
                                    }}
                                    width='90px'
                                    minWidth='73px'
                                    height='40px'
                                    defaultValue={count.toString()}
                                    min={1}
                                    max={10}
                                >
                                    <NumberInputField />
                                    <NumberInputStepper>
                                        <NumberIncrementStepper />
                                        <NumberDecrementStepper />
                                    </NumberInputStepper>
                                </NumberInput>
                            </Flex>
                        </Td>
                    </Tr>
                </Thead>
                <Tbody>{mappedIngredients}</Tbody>
            </Table>
        </TableContainer>
    );
});
