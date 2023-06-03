import React from 'react'
import Banner from './Component/Banner'
import CompanyStatistics from './Component/CompanyStatistics'
import CustomerExperience from './Component/CustomerExperience'
import ExperienceFrame from './Component/ExperienceFrame';
import CompanyMoto from './Component/CompanyMoto'
import Advertisement from '../CommonComponents/Advertisement';
import WantsToConnect from '../CommonComponents/WantsToConnect';

const Home = () => {
    return (<>
        <Banner />
        {/* <CompanyStatistics/> */}
        <CustomerExperience/>
        <ExperienceFrame/>
        <CompanyMoto/>
        <WantsToConnect/>
    </>)
}

export default Home