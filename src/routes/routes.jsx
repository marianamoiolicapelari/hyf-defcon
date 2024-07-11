import { Route, Routes } from "react-router-dom"

import Home from '../containers/Home'

import ScrollToTop from "../components/ScrollToTop"

export const Router = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
            <ScrollToTop />
        </>
    )
}

export default Router