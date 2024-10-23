"use client"; 
import React from 'react'; 

// Remove these imports
// import { dark } from "@clerk/themes";
// import { ClerkProvider } from '@clerk/nextjs';

interface Props {
  children: React.ReactNode;
}

const Providers = ({ children }: Props) => {
  return (
    <> {/* Or any other necessary wrapper, like a ThemeProvider if needed */}
      {children}
    </>
  );
};

export default Providers;
