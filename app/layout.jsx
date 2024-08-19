import '@/assets/styles/global.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
    title: '',
    description: '',
    keywords: '',
    description: '',
}
const MainLayout = ({ children }) => {
    return (
    <html>
        <body>
            <main>
                <Navbar />
                {children}
            </main>
            <Footer />
        </body>
    </html> );
}

export default MainLayout;
