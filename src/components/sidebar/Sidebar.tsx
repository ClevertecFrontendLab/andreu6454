import { Box } from '@chakra-ui/icons';

import { ReactionsBar } from '~/components/ReactionsBar/ReactionsBar';

export const Sidebar = () => (
    <Box position='fixed' right='0' top='80px' height='100%' width='208px'>
        <ReactionsBar />
    </Box>
);
