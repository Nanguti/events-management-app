import React from "react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="p-4 bg-gray-200 text-center">
      &copy; {currentYear} Admin Panel. All rights reserved.
    </footer>
  );
};

export default Footer;
