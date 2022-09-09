import './sidebar.css';

import React from 'react';
import { ImCancelCircle } from 'react-icons/im';

import dashboard from '../../assets/dashboard.png';
import user from '../../assets/image.png';
import mainstack from '../../assets/mainstack-logo.png';
import { data1, data2, data3 } from '../../data';

const Sidebar = ({
    setShow,
}: {
    setShow: React.Dispatch<React.SetStateAction<Boolean>>;
}) => {
    const Display = (props: {image: string; name: string}) => {
        return (
            <>
                <img src={props.image} alt='' />
                <span>{props.name}</span>
            </>
        );
    };

    return (
        <div>
            <div className='close-div'>
                <img className='logo' src={mainstack} alt='' />
                <div className='close' onClick={() => setShow(false)}>
                    <ImCancelCircle />
                </div>
            </div>
            <div>
                <div>
                    <div className='dashboard-link'>
                        <Display image={dashboard} name={'Dashboard'} />
                    </div>
                    {data1.map(({key, image, name}) => (
                        <div className='item-link' key={key}>
                            <Display image={image} name={name} />
                        </div>
                    ))}
                </div>
                <div className='other'>
                    <p>Others 1</p>
                    {data2.map(({key, image, name}) => (
                        <div className='item-link' key={key}>
                            <Display image={image} name={name} />
                        </div>
                    ))}
                </div>
                <div className='other'>
                    <p>Others 2</p>
                    {data3.map(({key, image, name}) => (
                        <div className='item-link' key={key}>
                            <Display image={image} name={name} />
                        </div>
                    ))}
                </div>
            </div>
            <div className='user'>
                <Display image={user} name={'Blessing Daniels'} />
            </div>
        </div>
    );
};

export default Sidebar;
