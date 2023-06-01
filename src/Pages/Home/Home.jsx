import React from 'react'
import Banner from './Component/Banner'
import CompanyStatistics from './Component/CompanyStatistics'
import CustomerExperience from './Component/CustomerExperience'
import ExperienceFrame from './Component/ExperienceFrame';
import CompanyMoto from './Component/CompanyMoto'
import Advertisement from './Component/Advertisement'

const Home = () => {
    return (<>
        <Banner />
        <CompanyStatistics/>
        <CustomerExperience/>
        <ExperienceFrame/>
        <CompanyMoto/>
        {/* <Advertisement/> */}
    </>)
}

export default Home