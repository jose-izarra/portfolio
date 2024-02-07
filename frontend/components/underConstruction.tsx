import Link from 'next/link';


export default function UnderConstruction() {
    
    return (
        <div className="flex flex-col justify-center items-center h-[100vh]">
            <h1>Under Construction</h1>
            <p>This page is currently under construction. Check back soon!</p>
            <p>
                Click <Link href='/' className='text-cool hover:text-teal-800 '>here</Link> to go back to the home page.

            </p>
        </div>
    );
    
};