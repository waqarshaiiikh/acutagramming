import React from 'react'

const CompanyStatistics = () => {
    const statisticData = [
        { id:1,  icon_src: "./dummy", icon_alt: "stats icon", stats: "+ 2.5 M", under_text: "Social Media Followers" },
        { id:2,  icon_src: "./dummy", icon_alt: "stats icon", stats: "+ 100 M", under_text: "Social Media Views" },
        { id:3,  icon_src: "./dummy", icon_alt: "stats icon", stats: "+ 2 K", under_text: "Clients Served" },
    ];
    return (
        <div className='statistic Border'>
            <div className='statistic-title'>
                <h1>Trusted by coaches all over the world</h1>
            </div>
            <div className='statistic-detail'>
                {statisticData && statisticData.map(stats => (

                    <div className='statistic-detail' key={stats.id}>
                        <div className='statistic-icon'>
                            <img src={stats.icon_src} alt={stats.icon_alt} />
                        </div>
                        <div className='statistic-count-text'>
                            <h1>{stats.stats}</h1>
                        </div>
                        <div className='statistic-under-text'>
                            <h2>{stats.under_text}</h2>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CompanyStatistics