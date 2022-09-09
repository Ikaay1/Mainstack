import './main.css';

import {
	ArcElement,
	CategoryScale,
	Chart as ChartJS,
	Legend,
	LinearScale,
	LineElement,
	PointElement,
	Title,
	Tooltip,
} from 'chart.js';
import React from 'react';
import { Doughnut, Line } from 'react-chartjs-2';
import { AiOutlineMenu } from 'react-icons/ai';

import {
	CountriesInterface,
	LocationInterface,
	SourcesInterface,
} from '../interface';

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend,
    ArcElement,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top' as const,
        },
    },
};

const labels = [
    '31 Jul',
    '1 Aug',
    '2 Aug',
    '3 Aug',
    '4 Aug',
    '5 Aug',
    '6 Aug',
    '7 Aug',
    '8 Aug',
    '9 Aug',
];

const Main = ({
    countries,
    points,
    sources,
    setShow,
    show,
}: {
    countries: CountriesInterface[];
    points: number[];
    sources: SourcesInterface[];
    setShow: React.Dispatch<React.SetStateAction<Boolean>>;
    show: Boolean;
}) => {
    const info = (arg: (CountriesInterface | SourcesInterface)[]) => {
        return {
            datasets: [
                {
                    label: '# of Votes',
                    data: arg.map((item) => item.percent),
                    backgroundColor: [
                        '#599EEA',
                        '#844FF6',
                        '#0FB77A',
                        '#FAB70A',
                        '#F09468',
                    ],
                    borderColor: [
                        '#599EEA',
                        '#844FF6',
                        '#0FB77A',
                        '#FAB70A',
                        '#F09468',
                    ],
                    borderWidth: 1,
                },
            ],
        };
    };

    let location = info(countries);

    let pie = info(sources);

    const line = {
        labels,
        datasets: [
            {
                label: 'Views',
                data: labels.map((label, i) => points[i]),
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
        ],
    };

    const Display = (props: LocationInterface) => {
        if ('country' in props) {
            return (
                <>
                    <img src={props.flag} alt={`${props.country} flag`} />
                    <span data-testid='country'>
                        {props.country}
                        <span> {props.percent}%</span>
                    </span>
                    <div
                        style={{
                            backgroundColor:
                                location.datasets[0].backgroundColor[props.i],
                        }}
                    ></div>
                </>
            );
        } else {
            return (
                <>
                    <img src={props.logo} alt={`${props.source} logo`} />
                    <span>
                        {props.source[0].toUpperCase() + props.source.slice(1)}{' '}
                        <span>{props.percent}%</span>
                    </span>
                    <div
                        style={{
                            backgroundColor:
                                location.datasets[0].backgroundColor[props.i],
                        }}
                    ></div>
                </>
            );
        }
    };

    return (
        <div className='dashboard-container'>
            <div>
                <div className='hamburger-container'>
                    {!show && (
                        <div
                            className='hamburger'
                            data-testid='hamburger'
                            onClick={() => setShow(true)}
                        >
                            <AiOutlineMenu />
                        </div>
                    )}
                    <p>Dashboard</p>
                </div>

                <div
                    className='greetings-container'
                    data-testid='greetings-container'
                >
                    <div>
                        <div>Good morning, Blessing ⛅️</div>
                        <p>Check out your dashboard summary.</p>
                    </div>
                    <p>View analytics</p>
                </div>
                <div className='days'>
                    <p>1 day</p>
                    <p>3 days</p>
                    <p>7 days</p>
                    <p className='all-time thirty'>30 days</p>
                    <p className='all-time'>All time</p>
                    <p>Custom Data</p>
                </div>
            </div>
            <div
                className='page-views-container'
                data-testid='page-views-container'
            >
                <div className='text'>
                    <div>Page Views</div>
                    <p>All Time</p>
                </div>
                <div className='graph'>
                    <p>500</p>
                    <div>
                        <Line options={options} data={line} />;
                    </div>
                </div>
            </div>
            <div className='section-three'>
                <div className='location-div locate'>
                    <div className='location-texts'>
                        <div>Top Locations</div>
                        <p>View Full Reports</p>
                    </div>
                    <div className='locations'>
                        <div className='country-container'>
                            {countries.map(
                                ({country, count, percent, flag}, i) => (
                                    <div key={count}>
                                        <Display
                                            {...{
                                                country,
                                                percent,
                                                flag,
                                                i,
                                            }}
                                        />
                                    </div>
                                ),
                            )}
                        </div>
                        <div className='location-chart'>
                            <Doughnut
                                style={{
                                    width: '150px',
                                    height: '150px',
                                }}
                                data={location}
                            />
                        </div>
                    </div>
                </div>

                <div className='location-div source'>
                    <div className='location-texts'>
                        <div>Top Referral source</div>
                        <p>View Full Reports</p>
                    </div>
                    <div className='locations'>
                        <div className='country-container'>
                            {sources.map(
                                ({source, count, percent, logo}, i) => (
                                    <div key={count}>
                                        <Display
                                            {...{
                                                source,
                                                percent,
                                                logo,
                                                i,
                                            }}
                                        />
                                    </div>
                                ),
                            )}
                        </div>
                        <div className='location-chart'>
                            <Doughnut
                                style={{
                                    width: '150px',
                                    height: '150px',
                                }}
                                data={pie}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;
