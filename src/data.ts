import add from './assets/add_a_photo.png';
import alarm from './assets/alarm.png';
import deleteIcon from './assets/delete.png';
import edit from './assets/edit.png';
import file_present from './assets/file_present.png';
import group from './assets/group.png';
import hourglass from './assets/hourglass_empty.png';
import subscriptions from './assets/subscriptions.png';

interface DataInterface {
    image: string;
    name: string;
    key: number;
}

export const data1: DataInterface[] = [
    {
        image: edit,
        name: 'Item 1',
        key: 1,
    },
    {
        image: group,
        name: 'Item 2',
        key: 2,
    },
    {
        image: hourglass,
        name: 'Item 3',
        key: 3,
    },
];

export const data2: DataInterface[] = [
    {
        image: add,
        name: 'Item 4',
        key: 4,
    },
    {
        image: deleteIcon,
        name: 'Item 5',
        key: 5,
    },
];
export const data3: DataInterface[] = [
    {
        image: subscriptions,
        name: 'Item 6',
        key: 6,
    },
    {
        image: file_present,
        name: 'Item 7',
        key: 7,
    },
    {
        image: alarm,
        name: 'Item 8',
        key: 8,
    },
];
