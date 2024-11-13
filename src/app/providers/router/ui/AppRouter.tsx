import React, {Suspense} from 'react';
import {Route, Routes} from "react-router-dom";
    import {AboutPageAsync} from "../../../../AboutPageAsync.tsx";
import {MainPageAsync} from "../../../../MainPageAsync.tsx";

const AppRouter = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path='/about' element={<AboutPageAsync />} />
                <Route path='/' element={<MainPageAsync />} />
            </Routes>
        </Suspense>
    );
};

export default AppRouter;