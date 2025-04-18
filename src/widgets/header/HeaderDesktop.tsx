import { Box } from '@chakra-ui/icons';
import { Avatar, Image, Link, Text } from '@chakra-ui/react';
import { memo } from 'react';
import { useNavigate } from 'react-router';

import { Breadcrumbs } from '~/components/Breadcrumbs/Breadcrumbs';
import { pathNames } from '~/widgets/header/pathNames';

import AvatarDesktop from '../../assets/AvatarDesktop.png';
import LogoLarge from '../../assets/svg/LogoLarge.svg';

export const HeaderDesktop = memo(() => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/', { replace: true });
    };
    return (
        <Box
            zIndex={10}
            position='fixed'
            display='flex'
            justifyContent='space-between'
            alignItems='center'
            padding='16px 54px 16px 16px'
            width='100vw'
            backgroundColor='#ffffd3'
            height='80px'
        >
            <Link marginRight='128px' onClick={handleClick}>
                <Image
                    marginRight='128px'
                    width='135.2px'
                    height='32px'
                    src={LogoLarge}
                    alt='yee-daa'
                />
            </Link>
            <Box display='flex' justifyContent='flex-start' width='100%' height='24px'>
                <Breadcrumbs pathNames={pathNames} />
            </Box>
            <Box
                display='flex'
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
            </Box>
        </Box>
    );
});
