export interface CountriesInterface {
    flag: string;
    country: string;
    count: number;
    percent: number;
}
export interface SourcesInterface {
    logo: string;
    source: string;
    count: number;
    percent: number;
}

export interface ViewInterface {
    '2022-07-31': number;
    '2022-08-01': number;
    '2022-08-02': number;
    '2022-08-03': number;
    '2022-08-04': number;
    '2022-08-05': number;
    '2022-08-06': number;
    '2022-08-07': number;
    '2022-08-08': number;
    '2022-08-09': number;
}

interface IndexCountries {
    flag: string;
    country: string;
    percent: number;
    i: number;
}

interface IndexSources {
    logo: string;
    source: string;
    percent: number;
    i: number;
}

export type LocationInterface = IndexCountries | IndexSources;

export interface DataInterface {
    graph_data: {
        views: {
            '2022-07-31': number;
            '2022-08-01': number;
            '2022-08-02': number;
            '2022-08-03': number;
            '2022-08-04': number;
            '2022-08-05': number;
            '2022-08-06': number;
            '2022-08-07': number;
            '2022-08-08': number;
            '2022-08-09': number;
        };
    };
    top_locations: {
        country: string;
        count: number;
        percent: number;
    }[];
    top_sources: {
        source: string;
        count: number;
        percent: number;
    }[];
}

export interface SidebarDataInterface {
    image: string;
    name: string;
    key: string | number;
}
