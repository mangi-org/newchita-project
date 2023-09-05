import { Suspense, lazy } from 'react';
import { Loader } from '../components';
import { Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('./Home'));
const About = lazy(() => import('./About'));
const Error404 = lazy(() => import('./Error404'));

function PagesRouter() {
    return (
        <Suspense fallback={<Loader />}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<Error404 />} />
            </Routes>
        </Suspense>
    )
}

export default PagesRouter