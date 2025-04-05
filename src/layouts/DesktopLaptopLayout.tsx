import { Box } from '@chakra-ui/icons';
import { ReactNode } from 'react';

import { BackGround } from '~/components/Background/BackGround';

interface DesktopLaptopLayoutProps {
    header: ReactNode;
    content: ReactNode;
    sidebar: ReactNode;
    navbar: ReactNode;
}

export const DesktopLaptopLayout = (props: DesktopLaptopLayoutProps) => {
    const { header, content, sidebar, navbar } = props;
    return (
        <Box width='100vw' min-height='100vh'>
            {header}
            <BackGround />
            <Box
                padding='80px 281px 0 280px'
                min-height='100vh'
                width='100vw'
                display='flex'
                justifyContent='space-between'
                alignItems='center'
            >
                {navbar}
                {content}
                {sidebar}
            </Box>
        </Box>
    );
};
