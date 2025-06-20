import { Button, Flex } from '@chakra-ui/react';
import { useNavigate } from 'react-router';

import { CardWithLeftImage } from '~/components/CardWithLeftImage/CardWithLeftImage';
import { DATA_TEST_IDS } from '~/shared/constants/dataTestIds';
import { useScreenSize } from '~/shared/hooks/useScreenSize';
import { getCategoryById } from '~/shared/services/getCategoryById';
import { getNavigateLinkToRecipe } from '~/shared/services/getNavigateLinkToRecipe';
import { Recipe } from '~/shared/types/recipeTypes';
import { useAppSelector } from '~/store/hooks';
import { categoriesSelector, subCategoriesSelector } from '~/store/slices/categories-slice';

interface RecipesContainerProps {
    data: Recipe[];
    onClickHandler?: () => void;
    isLastPage?: boolean;
    isLoading?: boolean;
}

export const RecipesContainer = (props: RecipesContainerProps) => {
    const { data, onClickHandler, isLastPage, isLoading = false } = props;

    const categories = useAppSelector(categoriesSelector);
    const subCategories = useAppSelector(subCategoriesSelector);

    const { screenSize, isTablet, isDesktop } = useScreenSize();
    const navigate = useNavigate();

    const mappedCards = data.map((recipe, index) => {
        const category = getCategoryById(categories, subCategories, recipe.categoriesIds[0]);
        const onClickHandler = () => {
            navigate(
                getNavigateLinkToRecipe(
                    categories,
                    subCategories,
                    recipe.categoriesIds[0],
                    recipe._id,
                ),
            );
        };

        return (
            <CardWithLeftImage
                index={index}
                onClickHandler={onClickHandler}
                key={recipe.title + index}
                recipe={recipe}
                categoryTitle={category?.category || ''}
            />
        );
    });

    const direction = isDesktop || isTablet ? 'row' : 'column';

    const gap = {
        Desktop: '24px',
        Laptop: '24px',
        Tablet: '16px',
        Mobile: '16px',
    };

    const marginBottom = {
        Desktop: '40px',
        Laptop: '40px',
        Tablet: '32px',
        Mobile: '32px',
    };

    return (
        <Flex
            gap={gap[screenSize]}
            width='100%'
            wrap='wrap'
            direction='column'
            alignItems='center'
            justifyContent='center'
            marginBottom={marginBottom[screenSize]}
        >
            <Flex
                data-test-id={DATA_TEST_IDS.recipeCardList}
                gap={gap[screenSize]}
                width='100%'
                wrap='wrap'
                direction={direction}
                alignItems='center'
                justifyContent='center'
            >
                {mappedCards}
            </Flex>

            {!isLastPage && (
                <Flex width='100%' justifyContent='center'>
                    <Button
                        width='149px'
                        data-test-id='load-more-button'
                        onClick={onClickHandler}
                        isDisabled={isLoading}
                        backgroundColor='#b1ff2e'
                        color='#000'
                        size='md'
                    >
                        {isLoading ? 'Загрузка' : 'Загрузить еще'}
                    </Button>
                </Flex>
            )}
        </Flex>
    );
};
