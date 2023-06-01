import follower from './../../../assets/icons8-followers-64-1.png';
import client from './../../../assets/icons8-clients-64-2-q526m2yejop8wasoyrcrxnht0l7r1fuw7zp8qr5nzi.png';
import awareness from './../../../assets/icons8-views-awareness-96-q526bxb6p4spfzjt9vawhprhxp9yv6jb5pxd247t7y.png';
import styled from 'styled-components'

const StatisticsSection = ({className}) => {
    const statisticData = [
        { id:1,  icon_src: follower, icon_alt: "stats icon", stats: "+ 2.5 M", under_text: "Social Media Followers" },
        { id:2,  icon_src: client, icon_alt: "stats icon", stats: "+ 100 M", under_text: "Social Media Views" },
        { id:3,  icon_src: awareness, icon_alt: "stats icon", stats: "+ 2 K", under_text: "Clients Served" },
    ];
    return (
        <section className={className}>
            <div className='statistic__section statistic-title'>
                <h1>Trusted by coaches all over the world</h1>
            </div>
            <div className='statistic__section statistic-detail'>
                {statisticData && statisticData.map(stats => (
                    <div className='statistic-detail-item' key={stats.id}>
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
        </section>
    )
}

const CompanyStatistics = styled(StatisticsSection)((props)=>({
    '&':{
        '*':{
            // border: '1px solid black',
        },
        maxWidth: '1140px',
        margin: 'auto',
        padding: '80px 0px',
        display: 'flex',
        flexDirection: 'column',
    },
    '& .statistic-title h1':{
        fontSize: '40px',
    },
    '& .statistic__section':{
        width:  '100%' 
    },
    '& .statistic-detail':{
        margin: 'auto',
        display: 'flex',
        justifyContent: 'space-between',
        padding: '10px',
        maxWidth: '1140px',        
    },
    '& .statistic-title':{
        marginBottom: '20px',
    },
    '& .statistic-detail-item':{
        alignSelf: 'center',
        flex:1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    '& .statistic-icon img':{
        width: '75px',
        height: '75px',
    }



}));


export default CompanyStatistics