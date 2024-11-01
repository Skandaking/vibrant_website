import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="p-4 bg-gray-100 dark:bg-gray-800 text-center">
            <p className="text-gray-700 dark:text-gray-300">© 2023 Your Company. All rights reserved.</p>
            <nav className="mt-2">
                <a href="/privacy-policy" className="mx-2 text-gray-700 dark:text-gray-300 hover:text-primary-main dark:hover:text-primary-light">Privacy Policy</a>
                <a href="/terms-of-service" className="mx-2 text-gray-700 dark:text-gray-300 hover:text-primary-main dark:hover:text-primary-light">Terms of Service</a>
                <a href="/contact" className="mx-2 text-gray-700 dark:text-gray-300 hover:text-primary-main dark:hover:text-primary-light">Contact</a>
            </nav>
        </footer>
    );
};

export default Footer;
