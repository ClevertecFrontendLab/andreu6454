import { Box } from '@chakra-ui/icons';
import { ReactNode } from 'react';

import { BackGround } from '~/components/Background/BackGround';

interface MobileLayoutProps {
    header: ReactNode;
    content: ReactNode;
    footer: ReactNode;
}

export const MobileLayout = (props: MobileLayoutProps) => {
    const { header, footer, content } = props;

    return (
        <Box width='100vw' minHeight='100vh'>
            <BackGround />
            {header}
            <Box width='100%' height='100%' paddingTop='64px'>
                {content}
            </Box>
            {footer}
        </Box>
    );
};
