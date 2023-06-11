import follower from './../../../assets/icons8-followers-64-1.png';
import client from './../../../assets/icons8-clients-64-2-q526m2yejop8wasoyrcrxnht0l7r1fuw7zp8qr5nzi.png';
import awareness from './../../../assets/icons8-views-awareness-96-q526bxb6p4spfzjt9vawhprhxp9yv6jb5pxd247t7y.png';
import styled from 'styled-components';
import CountUp from 'react-countup';

const StatisticsSection = ({ className }) => {
    const statisticData = [
        { id: 1, icon_src: follower, icon_alt: "stats icon", number: 2.5, suffix: " M", decimal: 1, under_text: "Social Media Followers" },
        { id: 2, icon_src: awareness, icon_alt: "stats icon", number: 100, suffix: " M", decimal: 0, under_text: "Social Media Views" },
        { id: 3, icon_src: client, icon_alt: "stats icon", number: 2, suffix: " K", decimal: 0, under_text: "Clients Served" },
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
                            <CountUp
                                start={1.0}
                                end={stats.number}
                                decimals={stats.decimal}
                                duration={2.75}
                                prefix='+ '
                                suffix={stats.suffix}
                                separator=" "
                            >
                            </CountUp>
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

const CompanyStatistics = styled(StatisticsSection)((props) => ({
    '&': {
        maxWidth: '1140px',
        margin: 'auto',
        padding: '90px 10px',
        display: 'flex',
        flexDirection: 'column',
    },
    '& .statistic-title h1': {
        fontSize: '40px',
        fontWeight: 800,
        lineHeight: '1em',
    },
    '& .statistic__section': {
        width: '100%'
    },
    '& .statistic-detail': {
        margin: 'auto',
        display: 'flex',
        justifyContent: 'space-between',
        maxWidth: '1140px',
    },
    '& .statistic-title': {
        marginBottom: '20px',
        color: '#323232'
    },
    '& .statistic-detail-item': {
        alignSelf: 'center',
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        padding: '10px',
        alignItems: 'center',
    },
    '& .statistic-icon img': {
        width: '75px',
        height: '75px',
        marginBottom: '10px'
    },
    '.statistic-detail-item:nth-child(1) .statistic-icon img': {
        width: '64px',
        height: '64px',
        marginBottom: '20px'
    },
    '& .statistic-count-text span': {
        color: '#333333',
        fontSize: '38px',
        lineHeight: 1,
        fontWeight: 700,
        padding: '1px 0px'
    },
    '& .statistic-under-text h2': {
        color: '#808080',
        fontSize: '22px',
        lineHeight: 1,
        fontWeight: 400,
        paddingTop: '4px'
    },

    '@media screen and (min-width: 768px) and (max-width: 1023px)': {
        '& .statistic-count-text span': {
            fontSize: '30px',
        },
        '& .statistic-under-text h2': {
            fontSize: '18px',
        }

    },

    '@media (max-width: 768px)': {
        "& .statistic-detail": {
            display: 'flex',
            flexDirection: 'column',
            gap: '5px',
        },
        '& .statistic-count-text span': {
            fontSize: '30px',
        },
        '& .statistic-under-text h2': {
            fontSize: '18px',
        }
    },



}));


export default CompanyStatistics;