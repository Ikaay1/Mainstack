import { SidebarDataInterface } from './components/interface';
import { DATA_ONE_ARRAY, DATA_THREE_ARRAY, DATA_TWO_ARRAY } from './constants';
import { createImageUrl } from './helper';

const generateData = (array: string[]) =>
    array.map((item, index) => ({
        image: createImageUrl(item),
        name: `Item ${index + 1}`,
        key: `${item}${index + 1}`,
    }));

export const data1: SidebarDataInterface[] = generateData(DATA_ONE_ARRAY);

export const data2: SidebarDataInterface[] = generateData(DATA_TWO_ARRAY);

export const data3: SidebarDataInterface[] = generateData(DATA_THREE_ARRAY);
