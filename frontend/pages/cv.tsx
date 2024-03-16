import Layout from '../components/layout';
import { cv_data } from '../components/cv_data';


export default function CV() {
    return (
        <Layout title="CV | Jose Izarra" page="CV">
            <header className='flex justify-center items-end min-h-[40vh] pb-16 '>
                <h1 className="text-center">My Resume</h1>
            </header>
            <section className='flex flex-col'>
                <h1>{cv_data.name}</h1>
            </section>
        </Layout>
    )
}