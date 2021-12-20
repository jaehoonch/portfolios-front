import React from 'react'
import Head from 'next/head'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'

const Layout = ({ children }) => {
    return (
        <div className="bg-gray-50 h-screen
            overflow-y-scroll scrollbar-hide">
            <Head>
                <title>Portfolio App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
        
            <Sidebar />
            <div className="relative left-16 w-[calc(100%-4rem)]">
            <Header />
            <main className=" mx-auto py-4 px-16">
                {children}
            </main>
            </div>
        </div>
    )
}

export default Layout
