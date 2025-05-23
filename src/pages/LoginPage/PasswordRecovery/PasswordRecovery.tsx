import { Button, useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';

import { RecoveryPasswordModal } from '~/pages/LoginPage/PasswordRecovery/RecoveryPasswordModal/RecoveryPasswordModal';
import { DATA_TEST_IDS } from '~/shared/constants/dataTestIds';

export type PasswordRecovery = {
    email: string;
};

export const PasswordRecovery = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [step, setStep] = useState(0);
    const [email, setEmail] = useState('');

    return (
        <>
            <Button
                data-test-id={DATA_TEST_IDS.forgotPassword}
                variant='ghost'
                onClick={() => onOpen()}
                paddingY={0}
                marginTop='16px'
                _hover={{
                    backgroundColor: 'transparent',
                }}
            >
                Забыли логин или пароль?
            </Button>
            <RecoveryPasswordModal
                isOpen={isOpen}
                onClose={onClose}
                step={step}
                setStep={setStep}
                email={email}
                setEmail={setEmail}
            />
        </>
    );
};
