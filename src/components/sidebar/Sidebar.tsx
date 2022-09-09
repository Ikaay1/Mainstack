import './sidebar.scss';

import React, { FC } from 'react';
import { ImCancelCircle } from 'react-icons/im';

import { data1, data2, data3 } from '../../data';
import { createImageUrl } from '../../helper';

type SidebarProps = {
    setShow: React.Dispatch<React.SetStateAction<Boolean>>;
};
const Sidebar: FC<SidebarProps> = ({setShow}) => {
    const sidebarData = (image: string, name: string) => {
        return (
            <>
                <img src={image} alt='' />
                <span>{name}</span>
            </>
        );
    };

    return (
        <div>
            <div className='close-div'>
                <img
                    className='logo'
                    src={createImageUrl('mainstack-logo')}
                    alt=''
                />
                <div className='close' onClick={() => setShow(false)}>
                    <ImCancelCircle />
                </div>
            </div>
            <div>
                <div>
                    <div className='dashboard-link'>
                        {sidebarData(
                            createImageUrl('dashboard'),
                            'Dashboard',
                        )}
                    </div>
                    {data1.map(({key, image, name}) => (
                        <div className='item-link' key={key}>
                            {sidebarData(image, name)}
                        </div>
                    ))}
                </div>
                <div className='other'>
                    <p>Others 1</p>
                    {data2.map(({key, image, name}) => (
                        <div className='item-link' key={key}>
                            {sidebarData(image, name)}
                        </div>
                    ))}
                </div>
                <div className='other'>
                    <p>Others 2</p>
                    {data3.map(({key, image, name}) => (
                        <div className='item-link' key={key}>
                            {sidebarData(image, name)}
                        </div>
                    ))}
                </div>
            </div>
            <div className='user'>
                {sidebarData(createImageUrl('user'), 'Blessing Daniels',
                )}
            </div>
        </div>
    );
};

export default Sidebar;
