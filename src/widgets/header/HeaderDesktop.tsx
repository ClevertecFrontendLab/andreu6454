import { Box, HamburgerIcon, IconButton } from '@chakra-ui/icons';
import { Avatar, Flex, Image, Link, Text } from '@chakra-ui/react';
import { memo } from 'react';
import { Link as ReactLink, useNavigate } from 'react-router';

import { Breadcrumbs } from '~/components/Breadcrumbs/Breadcrumbs';
import { DATA_TEST_IDS } from '~/shared/constants/dataTestIds';
import { APP_PATHS } from '~/shared/constants/pathes';
import { ZIndex } from '~/shared/constants/style/zIndex';
import { useScreenSize } from '~/shared/hooks/useScreenSize';
import { Typography, TypographySizes } from '~/shared/ui/Typography/Typography';
import { useAppSelector } from '~/store/hooks';
import { isBurgerOpenSelector, userIdSelector } from '~/store/slices/app-slice';
import { allCategoriesSelector } from '~/store/slices/categories-slice';

import AvatarDesktop from '../../assets/AvatarDesktop.png';
import LoginIcon from '../../assets/svg/login.svg';
import LogoLarge from '../../assets/svg/LogoLarge.svg';

export const HeaderDesktop = memo(() => {
    const navigate = useNavigate();

    const { isDesktopLaptop } = useScreenSize();
    const isLogin = useAppSelector(userIdSelector);
    const isBurgerOpen = useAppSelector(isBurgerOpenSelector);
    const allCategories = useAppSelector(allCategoriesSelector);

    const handleClick = () => {
        navigate(APP_PATHS.root, { replace: true });
    };
    return (
        <Flex
            zIndex={ZIndex.header}
            position='fixed'
            justifyContent='space-between'
            alignItems='center'
            paddingY='16px'
            width='100vw'
            backgroundColor='#ffffd3'
            height='80px'
        >
            <Link
                data-test-id={DATA_TEST_IDS.headerLogo}
                paddingLeft='54px'
                width='280px'
                onClick={handleClick}
                flexShrink={0}
            >
                <Image width='135.2px' height='32px' src={LogoLarge} alt='yee-daa' />
            </Link>
            {!isBurgerOpen && (
                <Flex justifyContent='flex-start' width='100%' height='24px'>
                    <Breadcrumbs pathNames={allCategories} />
                </Flex>
            )}
            {isLogin && (
                <Flex
                    marginRight='56px'
                    flexShrink={0}
                    padding='0 24px 0 53px'
                    justifyContent='end'
                    alignItems='center'
                    gap='12px'
                    width='432px'
                    height='48px'
                >
                    <Avatar name='ЕК' src={AvatarDesktop} />
                    <Box width='295px' height='48px'>
                        <Text fontWeight={500} fontSize='18px' lineHeight='156%' color='black'>
                            Екатерина Константинопольская
                        </Text>
                        <Text
                            fontWeight={400}
                            fontSize='14px'
                            lineHeight='143%'
                            color='rgba(0, 0, 0, 0.64)'
                        >
                            @bake_and_pie
                        </Text>
                    </Box>
                </Flex>
            )}
            {!isLogin && (
                <Flex
                    paddingRight='56px'
                    width='272px'
                    flexShrink={0}
                    alignItems='center'
                    justifyContent='flex-end'
                >
                    <Link as={ReactLink} to={APP_PATHS.login}>
                        <Flex padding='6px 12px' alignItems='center' gap='8px'>
                            <Typography fontWeight={600} Size={TypographySizes.sm}>
                                Log in
                            </Typography>
                            <Image width='14px' height='14px' src={LoginIcon} />
                        </Flex>
                    </Link>
                </Flex>
            )}
            {/*только для тестов*/}
            <IconButton
                position={isDesktopLaptop ? 'absolute' : 'static'}
                width={isDesktopLaptop ? '0' : '100%'}
                visibility={isDesktopLaptop ? 'hidden' : 'visible'}
                data-test-id='hamburger-icon'
                variant='ghost'
                aria-label='menu'
                icon={<HamburgerIcon boxSize='24px' color='black' />}
            />
            {/*только для тестов*/}
        </Flex>
    );
});
