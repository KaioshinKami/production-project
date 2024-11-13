import React, {Suspense, useContext, useState} from 'react';
import {Link, Route, Routes} from "react-router-dom";
import {AppRouter} from "./app/providers/router";
import './app/styles/index.scss'
import {AboutPageAsync} from "./AboutPageAsync.tsx";
import {MainPageAsync} from "./MainPageAsync.tsx";
import {Theme, ThemeContext} from "./theme/ThemeContext.ts";
import {useTheme} from "./theme/useTheme.ts";
import {classNames} from "./helpers/classNames/classNames.ts";

const App = () => {
    const {theme, toggleTheme}=useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>switch</button>
            <Link to='/'>Главная</Link>
            <Link to='/about'>О сайте</Link>


            <p className='app'>asdasda</p>

            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path='/about' element={<AboutPageAsync />} />
                    <Route path='/' element={<MainPageAsync />} />
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;