"use client"
import React from 'react'
import { useMediaQuery } from 'react-responsive';
import DashboardPC from './dashboard_pc';
import DashboardMobile from './dashboard_mobile';

export default function Dashboard() {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
      });
      const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' });
      const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1024px)' });
      const isMobile = useMediaQuery({ query: '(max-width: 72px)' });
      const isPortrait = useMediaQuery({ query: '(orientation: portrait)' });
      const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' });

  return (
    <>
       {
       <DashboardMobile />
    }
    
    </>
  )
}
