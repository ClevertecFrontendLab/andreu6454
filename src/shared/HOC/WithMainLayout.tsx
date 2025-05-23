import { Outlet } from 'react-router';

import { useScreenSize } from '~/shared/hooks/useScreenSize';
import { DesktopLaptopLayout } from '~/shared/layouts/DesktopLaptopLayout';
import { MobileLayout } from '~/shared/layouts/MobileLayout';
import Footer from '~/widgets/footer/Footer';
import Header from '~/widgets/header/Header';
import { Navbar } from '~/widgets/navbar/Navbar';
import { Sidebar } from '~/widgets/sidebar/Sidebar';

export const WithMainLayout = () => {
    const { isDesktop, isLaptop } = useScreenSize();

    return isDesktop || isLaptop ? (
        <DesktopLaptopLayout
            data-test-id='app'
            header={<Header />}
            navbar={<Navbar />}
            content={<Outlet />}
            sidebar={<Sidebar />}
        />
    ) : (
        <MobileLayout
            data-test-id='app'
            header={<Header />}
            content={<Outlet />}
            footer={<Footer />}
        />
    );
};
