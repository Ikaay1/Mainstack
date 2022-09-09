import { fireEvent, render, screen } from '@testing-library/react';

import { CountriesInterface, SourcesInterface } from '../interface';
import Main from './Main';

const apiResponse = {
    graph_data: {
        views: {
            '2022-07-31': 56,
            '2022-08-01': 56,
            '2022-08-02': 56,
            '2022-08-03': 56,
            '2022-08-04': 56,
            '2022-08-05': 56,
            '2022-08-06': 56,
            '2022-08-07': 56,
            '2022-08-08': 56,
            '2022-08-09': 56,
        },
    },
    top_locations: [
        {
            country: 'United Kingdom',
            count: 5,
            percent: 10,
        },
    ],
    top_sources: [
        {
            source: 'Instagram',
            count: 5,
            percent: 10,
        },
    ],
};

describe('greetings section', () => {
    const countries: CountriesInterface[] = [
        {
            flag: '/assets/Uk.png',
            country: 'United Kingdom',
            count: 5,
            percent: 10,
        },
    ];
    const sources: SourcesInterface[] = [
        {
            logo: '/assets/instagram.png',
            source: 'Instagram',
            count: 5,
            percent: 10,
        },
    ];
    const points = [1, 2, 3];
    const setShow = jest.fn();
    const show = false;

    test('check if greetings is displayed', () => {
        const {container} = render(
            <Main
                countries={countries}
                sources={sources}
                points={points}
                setShow={setShow}
                show={show}
            />,
        );
        const greetingsContainer = screen.queryByTestId('greetings-container');
        expect(greetingsContainer).toBeTruthy();
        expect(container).toBeDefined();
    });
});

describe('page-view section and location section', () => {
    const countries: CountriesInterface[] = [
        {
            flag: '/assets/Uk.png',
            country: 'United Kingdom',
            count: 5,
            percent: 10,
        },
    ];
    const sources: SourcesInterface[] = [
        {
            logo: '/assets/instagram.png',
            source: 'Instagram',
            count: 5,
            percent: 10,
        },
    ];
    const points = [1, 2, 3];
    const setShow = jest.fn();
    const show = false;

    test('check if page-view is displayed', async () => {
        render(
            <Main
                countries={countries}
                sources={sources}
                points={points}
                setShow={setShow}
                show={show}
            />,
        );

        const asyncMock = jest.fn().mockResolvedValueOnce(apiResponse);

        await asyncMock();

        const page = await screen.findByTestId('page-views-container');

        expect(page).toBeTruthy();
    });
    test('check if location is displayed', async () => {
        render(
            <Main
                countries={countries}
                sources={sources}
                points={points}
                setShow={setShow}
                show={show}
            />,
        );

        const asyncMock = jest.fn().mockResolvedValueOnce(apiResponse);

        await asyncMock();

        const page = await screen.findByTestId('country');

        expect(page).toBeTruthy();
    });

    test('check if hamburger menu is working', () => {
        render(
            <Main
                countries={countries}
                sources={sources}
                points={points}
                setShow={setShow}
                show={show}
            />,
        );

        const hamburger = screen.queryByTestId('hamburger')!;
        expect(hamburger).toBeDefined();
        fireEvent.click(hamburger);
        expect(setShow).toBeCalledTimes(1);
    });
});
