import { Suspense, lazy } from 'react';
import { Loader } from '../components';
import { Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('./Home'));
const About = lazy(() => import('./About'));
const Error404 = lazy(() => import('./Error404'));
const AboutSingle = lazy(() => import('./AboutSingle'));
const AboutSingleFull = lazy(() => import('./AboutSingleFull'));

function PagesRouter() {
    return (
        <Suspense fallback={<Loader />}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path='/about/:aboutId' element={<AboutSingle />} />
                <Route path='/about/:aboutId/full' element={<AboutSingleFull />} />
                <Route path="*" element={<Error404 />} />
            </Routes>
        </Suspense>
    )
}

export default PagesRouter