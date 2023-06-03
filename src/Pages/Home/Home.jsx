import React from 'react'
import Banner from './Component/Banner'
import CompanyStatistics from './Component/CompanyStatistics'
import CustomerExperience from './Component/CustomerExperience'
import ExperienceFrame from './Component/ExperienceFrame';
import CompanyMoto from './Component/CompanyMoto';
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

export const HomeLink = () => <Link to='/Home' >Home</Link>;


export default Home