import Head from 'next/head'
import Card from '../components/Card'
import Header from '../components/Header'
import { PlusCircleIcon } from "@heroicons/react/solid"
import { SearchIcon } from '@heroicons/react/outline'


export default function Home() {
  return (
    <div className="bg-gray-50 h-screen
    overflow-y-scroll scrollbar-hide">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Header />
      <main className="container mx-auto py-4 md:max-w-3xl xl:max-w-6xl">
        <div className="flex justify-center">
          <div className="flex flex-col">
            {/* Search Bar */}
            <div className="flex flex-row py-4 justify-between">
              <h1 className="font-bold text-xl">Portfolios(20)</h1>

              <button className=" flex flex-row bg-purple-500 text-white p-2 rounded-md items-center">
                <PlusCircleIcon className="h-4 pr-2" />
                <h3 className="text-sm font-bold">Create Portfolio</h3>
              </button>
            </div>
            {/* Portfolios Cards */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 items-center">
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
          </div>
          
        </div>  
      </main>

      {/* <Feed /> */}

      {/* Modal */}
    </div>
    // <div className="flex flex-col min-h-screen bg-gray-50">
    //   <Head>
    //     <title>Portfolios App</title>
    //     <link rel="icon" href="/favicon.ico" />
    //   </Head>

    //   <header className="flex justify-between w-full px-4 py-4 bg-black">
    //     <div className="flex">
    //       <button className="px-2">
    //         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    //           <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
    //         </svg>
    //       </button>
    //       <button className="px-2">
    //         <svg
    //           viewBox="0.238 0.034 919.406 248.488"
    //           xmlns="http://www.w3.org/2000/svg"
    //           className="w-24">
    //           <path
    //             fill="#e50914"
    //             d="m870.46 118.314 49.184 130.208c-14.495-2.07-28.982-4.663-43.733-6.999l-27.707-71.945-28.468 66.006c-13.973-2.336-27.698-3.114-41.672-4.928l49.955-113.89L782.71.034h41.937l25.362 65.22L877.194.034h42.442zM749.596.034h-38.052v225.71c12.425.779 25.362 1.292 38.052 2.841zm-70.927 223.118c-34.68-2.328-69.37-4.39-104.829-5.177V.035h38.823v181.188c22.264.514 44.52 2.32 66.006 3.355zM532.417 88.305v38.822h-53.06v88.263h-38.3V.034H549.77v38.822h-70.405v49.45h53.06zM375.82 38.856v178.605c-12.946 0-26.14 0-38.83.514V38.856h-40.122V.034H416.19v38.822zM254.94 129.19c-17.08 0-37.274 0-51.769.787v57.715c22.778-1.557 45.556-3.363 68.59-4.141v37.273l-107.412 8.548V.034h107.405v38.822H203.17v52.29c15.017 0 38.052-.778 51.768-.778v38.83zM39.831 107.447V243.08c-13.965 1.557-26.398 3.371-39.593 5.442V.034h37.017L87.724 141.11V.034h38.83V232.47c-13.717 2.336-27.698 3.114-42.45 5.177z" />
    //         </svg>
    //       </button>
    //     </div>
    //     <div className="px-2">
    //         <button
    //           onClick={() => signIn()}
    //           className="flex items-center bg-[#e50914] text-white text-sm px-4 py-2 rounded"
    //           >
    //             Sign In
    //         </button>
     
    //     </div>
    //   </header>
    //   <div className="flex">
    //     <div className="fixed h-screen w-48 flex flex-col px-4
    //       bg-gray-900 text-white">
    //       <ul className="mt-5">
    //         <li className="relative my-5 h-12 leading-10 w-full ">
    //           <a href="" className="flex items-center rounded-md hover:bg-white hover:text-black">
    //             <i className="pr-2 text-center min-w-12">
    //               <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    //                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
    //               </svg>
    //             </i>
    //             <span>Dashboard</span>
    //           </a>
    //           <span className="absolute text-black left-32 top-1/2 translate-y-1/2 rounded-md h-9 w-32 bg-white leading-9 text-center">Dashboard</span>
    //         </li>
    //         <li className="my-5">
    //           <a href="" className="flex">
    //             <div className="pr-2">
    //             <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    //               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    //             </svg>
    //             </div>
    //             <span>Portfolios</span>
    //           </a>
    //         </li>
    //         <li className="my-5">
    //           <a href="" className="flex">
    //             <div className="pr-2">
    //               <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    //                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    //               </svg>
    //             </div>
    //             <span>Demos</span>
    //           </a>
    //         </li>
    //       </ul>
    //     </div>

    //     <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
    //       <h1 className="text-6xl font-bold">
    //         Welcome to{' '}
    //         <a className="text-blue-600" href="https://nextjs.org">
    //           Next.js!
    //         </a>
    //       </h1>

    //       <p className="mt-3 text-2xl">
    //         Get started by editing{' '}
    //         <code className="p-3 font-mono text-lg bg-gray-100 rounded-md">
    //           pages/index.js
    //         </code>
    //       </p>

    //       <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
    //         <a
    //           href="https://nextjs.org/docs"
    //           className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
    //         >
    //           <h3 className="text-2xl font-bold">Documentation &rarr;</h3>
    //           <p className="mt-4 text-xl">
    //             Find in-depth information about Next.js features and API.
    //           </p>
    //         </a>

    //         <a
    //           href="https://nextjs.org/learn"
    //           className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
    //         >
    //           <h3 className="text-2xl font-bold">Learn &rarr;</h3>
    //           <p className="mt-4 text-xl">
    //             Learn about Next.js in an interactive course with quizzes!
    //           </p>
    //         </a>

    //         <a
    //           href="https://github.com/vercel/next.js/tree/master/examples"
    //           className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
    //         >
    //           <h3 className="text-2xl font-bold">Examples &rarr;</h3>
    //           <p className="mt-4 text-xl">
    //             Discover and deploy boilerplate example Next.js projects.
    //           </p>
    //         </a>

    //         <a
    //           href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
    //           className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
    //         >
    //           <h3 className="text-2xl font-bold">Deploy &rarr;</h3>
    //           <p className="mt-4 text-xl">
    //             Instantly deploy your Next.js site to a public URL with Vercel.
    //           </p>
    //         </a>
    //       </div>
    //     </main>
    //   </div>
      
    // </div>
  )
}
