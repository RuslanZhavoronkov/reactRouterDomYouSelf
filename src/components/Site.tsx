import React from 'react';
import styles from './Site.module.css'
import { PageOne } from './pages/PageOne';
import { PageThree } from './pages/PageThree';
import { PageTwo } from './pages/PageTwo';
import { Navigate, Route, Routes } from 'react-router-dom'
import { Error404 } from './pages/Error404';
import { NavLink } from 'react-router-dom';
import { dataState } from '../dataState/dataState';
import { Page } from './pages/Page';

export const Site = () => {
    return (
        <div>
            <div className={styles.header}><h1>HEADER</h1></div>
            <div className={styles.body}>
                <div className={styles.nav}>
                    <div><NavLink to={'/Page/0'} className={({isActive})=>isActive ? styles.active : styles.navLink}>Page 1</NavLink></div>
                    <div><NavLink to={'/Page/1'} className={({isActive})=>isActive ? styles.active : styles.navLink}>Page 2</NavLink></div>
                    <div><NavLink to={'/Page/2'} className={({isActive})=>isActive ? styles.active : styles.navLink}>Page 3</NavLink></div>
                </div>
                <div className={styles.content}>
                    <Routes>
                        <Route path={'/'} element={<Navigate to={'/PageOne'}/>}/> 

                        <Route path={'/Page/:id'} element={<Page pages={dataState.pages}/>} />

                        {/* <Route path={'/PageOne'} element={<PageOne />}/>
                        <Route path={'/PageTwo'} element={<PageTwo />}/>
                        <Route path={'/PageThree'} element={<PageThree />}/> */}

                        <Route  path = {'/Page/*'} element={<Error404/>}/>
                    </Routes>
                </div>
            </div>
        </div>
    );
};

