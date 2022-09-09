import './app.scss';

import React, { useEffect, useState } from 'react';

import {
	CountriesInterface,
	DataInterface,
	SourcesInterface,
	ViewInterface,
} from './components/interface';
import LoaderComponent from './components/loader/loader.component';
import { fetchData } from './components/main/api';
import Main from './components/main/Main';
import Sidebar from './components/sidebar/Sidebar';
import { createImageUrl } from './helper';

const Fade = require('react-reveal/Fade');

function App() {
    const [countries, setCountries] = useState<CountriesInterface[]>([]);
    const [sources, setSources] = useState<SourcesInterface[]>([]);
    const [points, setPoints] = useState<number[]>([]);
    const [show, setShow] = useState<Boolean>(false);

    useEffect(() => {
        const getLocations = async () => {
            try {
                const data: DataInterface = await fetchData();

                setCountries(
                    data.top_locations.map((item) =>
                        item.country !== 'United Kingdom'
                            ? {
                                  ...item,
                                  flag: createImageUrl(item.country),
                              }
                            : {...item, flag: createImageUrl('Uk')},
                    ),
                );

                setSources(
                    data.top_sources.map((item) => ({
                        ...item,
                        logo: createImageUrl(item.source),
                    })),
                );

                const arr: any = [];

                const views: ViewInterface = data.graph_data.views;

                for (const key in views) {
                    arr.push(views[key as keyof typeof views]);
                }

                setPoints(arr);
            } catch (error: any) {
                console.log(error.message);
            }
        };
        getLocations();
    }, []);

    if (!countries.length || !sources.length || !points.length)
        return <LoaderComponent />;

    return (
        <div className='app'>
            <Fade left when={show}>
                <div
                    className={
                        show ? `sidebarContainer show` : `sidebarContainer hide`
                    }
                >
                    <Sidebar setShow={setShow} />
                </div>
            </Fade>

            {show && <div className='modal'></div>}

            <div className='sidebarContainer'>
                <Sidebar setShow={setShow} />
            </div>

            <div className='mainContainer'>
                <Main
                    countries={countries}
                    sources={sources}
                    points={points}
                    setShow={setShow}
                    show={show}
                />
            </div>
        </div>
    );
}

export default App;
