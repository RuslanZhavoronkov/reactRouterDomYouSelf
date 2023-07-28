import React, { useEffect, useState } from 'react';
import styles from './Site.module.css'
import { PageOne } from './pages/PageOne';
import { PageThree } from './pages/PageThree';
import { PageTwo } from './pages/PageTwo';
import { Navigate, Route, Routes } from 'react-router-dom'
import { Error404 } from './pages/Error404';
import { NavLink } from 'react-router-dom';
import { dataState } from '../dataState/dataState';
import { Page } from './pages/Page';
import styled from 'styled-components';

export const Site = () => {

    //const [burger, setBurger] = useState(false)

    function useWindowSize() {
        const [widowSize, setWindowSize] = useState(0);
        useEffect(() => {

            function handleResize() {
                setWindowSize(window.innerWidth);
            }

            window.addEventListener('resize', handleResize);
            handleResize();

            return () => window.removeEventListener('resize', handleResize);

        }, []);
        return widowSize;
    }

    const size = useWindowSize()

    return (
        <div>
            <div className={styles.header}><h1>HEADER</h1></div>
            <div className={styles.body}>
                {size > 1000
                    ? <div className={styles.nav}>
                        <NavWrapper><NavLink to={'/Page/0'}>Page 1</NavLink></NavWrapper>
                        <NavWrapper><NavLink to={'/Page/1'}>Page 2</NavLink></NavWrapper>
                        <NavWrapper><NavLink to={'/Page/2'}>Page 3</NavLink></NavWrapper>
                    </div>
                    : <span></span>

                }

                <div className={styles.content}>
                    <Routes>
                        <Route path={'/'} element={<Navigate to={'/PageOne'} />} />

                        <Route path={'/Page/:id'} element={<Page pages={dataState.pages} />} />

                        {/* <Route path={'/PageOne'} element={<PageOne />}/>
                        <Route path={'/PageTwo'} element={<PageTwo />}/>
                        <Route path={'/PageThree'} element={<PageThree />}/> */}

                        <Route path={'/Page/*'} element={<Error404 />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
};

const NavWrapper = styled.div`
margin - left: 10px;
font - size: 20px;

& > a {
    text - decoration: none;
    color: #1e3786;
}

& > a.active {
    text - decoration: none;
    color: #03eaff;
}

& > a:hover {
    color: steelblue; /*Color link */
}
`;


//-----------------------------------------------------------------------------------------------------------------------------------------

                    // <div><NavLink to={'/Page/0'} className={({ isActive }) => isActive ? styles.active : styles.navLink}>Page 1</NavLink></div>
                    // <div><NavLink to={'/Page/1'} className={({ isActive }) => isActive ? styles.active : styles.navLink}>Page 2</NavLink></div>
                    // <div><NavLink to={'/Page/2'} className={({ isActive }) => isActive ? styles.active : styles.navLink}>Page 3</NavLink></div>