import { AppProvider } from '@/context/AppContext';
import React from 'react'
import Navbar from '@/Components/Navbar';

const Template = ({ children }) => {
  return (
    <AppProvider>
      <Navbar />
        {children}
    </AppProvider>
  )
}

export default Template;