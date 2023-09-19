import React from 'react'
import Layout from "../components/App/Layout"
import NavbarTwo from "../components/App/NavbarTwo"
import PageBanner from '../components/Common/PageBanner'
import Footer from "../components/App/Footer"
import ServiceDetailsContent from '../components/ServiceDetails/ServiceDetailsContent'
 
const Details = () => {
    return (
        <Layout>
            <NavbarTwo />
            <PageBanner
                pageTitle="Movilidad" 
                homePageText="Home" 
                homePageUrl="/" 
                activePageText="Movilidad" 
            />
            <ServiceDetailsContent desde="movilidad"/>
            <Footer />
        </Layout>
    );
}

export default Details