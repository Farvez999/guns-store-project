import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import SingleGun from '../SingleGun/SingleGun';

const AllGun = ({ countIncrease }) => {
    const [guns, setGuns] = useState([]);

    console.log(guns)

    useEffect(() => {
        fetch(`https://raw.githubusercontent.com/mir-hussain/guns/main/data.json`)
            .then(res => res.json())
            .then(data => setGuns(data))
    }, [])

    return (
        <div>
            <div>
                <h1 className='text-4xl text-center font-bold mt-4'>Welcome to my Guns Store</h1>
                <p className='mx-12 mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa dolorum nihil mollitia. Nemo architecto maxime mollitia quos harum non aliquid ipsum aperiam inventore incidunt ipsa corrupti, numquam tempore possimus deserunt?</p>
            </div>

            <div className='w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-4'>
                {
                    guns.map((gun) =>
                        <SingleGun gun={gun} countIncrease={countIncrease}></SingleGun>
                    )
                }
            </div>
        </div>

    );
};

export default AllGun;