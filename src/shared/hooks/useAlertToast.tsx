import { Alert } from '@chakra-ui/icons';
import {
    AlertDescription,
    AlertIcon,
    AlertTitle,
    Box,
    CloseButton,
    useToast,
    UseToastOptions,
} from '@chakra-ui/react';

import { DATA_TEST_IDS } from '~/shared/constants/dataTestIds';

const DURATION = 15000;

const ALERT_WIDTH = {
    sm: '328px',
    lg: '400px',
};

const INDENT_BOTTOM = {
    sm: '100px',
    lg: '80px',
};

export const useAlertToast = () => {
    const toast = useToast();

    return (options: UseToastOptions, isLeftSideToast: boolean = true) => {
        toast.closeAll();

        toast({
            duration: DURATION,
            position: 'bottom',
            containerStyle: {
                position: 'relative',
                right: isLeftSideToast ? { base: 0, lg: '25%' } : 0,
                bottom: { base: INDENT_BOTTOM.sm, lg: INDENT_BOTTOM.lg },
            },
            render: ({ status, title, description, onClose }) => (
                <Alert
                    variant='solid'
                    status={status}
                    w={{ base: ALERT_WIDTH.sm, lg: ALERT_WIDTH.lg }}
                    py={3}
                    px={4}
                    data-test-id={DATA_TEST_IDS.errorNotification}
                >
                    <AlertIcon color='white' />

                    <Box>
                        <AlertTitle data-test-id={DATA_TEST_IDS.errorNotificationTitle}>
                            {title}
                        </AlertTitle>
                        {description && (
                            <AlertDescription
                                data-test-id={DATA_TEST_IDS.errorNotificationDescription}
                            >
                                {description}
                            </AlertDescription>
                        )}
                    </Box>

                    <CloseButton
                        size='sm'
                        color='white'
                        alignSelf='start'
                        position='absolute'
                        right={3}
                        onClick={onClose}
                        data-test-id={DATA_TEST_IDS.closeAlert}
                    />
                </Alert>
            ),
            ...options,
        });
    };
};
