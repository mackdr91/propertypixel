const Footer = () => {
    const currentYear = new Date().getFullYear(); // Get the current year
    return (
        <footer className="bg-gray-800 text-white py-4">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center">
                    <p className="text-sm">&copy; {currentYear} Property Pixel. All rights reserved.</p>
                </div>
            </div>
        </footer>
     );
}

export default Footer;