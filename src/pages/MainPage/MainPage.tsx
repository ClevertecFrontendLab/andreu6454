import { Flex } from '@chakra-ui/react';
import { FC, memo } from 'react';

import { SearchBlock } from '~/components/SearchBlock/SearchBlock';
import { CulinaryBlogs } from '~/pages/MainPage/CulinaryBlogs/CulinaryBlogs';
import { Juiciest } from '~/pages/MainPage/JuciestFood/Juiciest';
import { NewRecipes } from '~/pages/MainPage/NewRecipes/NewRecipes';
import { RecommendationBlock } from '~/widgets/RecommendationBlock/RecommendationBlock';

export const MainPage: FC = memo(() => (
    <Flex width='100%' flexDirection='column' alignItems='center'>
        <SearchBlock title='Приятного аппетита!' />
        <Flex width='100%' flexDirection='column' alignItems='center' gap='40px'>
            <NewRecipes />
            <Juiciest />
            <CulinaryBlogs />
            <RecommendationBlock
                title='Веганская кухня'
                description='Интересны не только убеждённым вегетарианцам, но и тем, кто хочет  попробовать вегетарианскую диету и готовить вкусные  вегетарианские блюда.'
            />
        </Flex>
    </Flex>
));
