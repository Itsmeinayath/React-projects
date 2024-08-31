import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState(null);

    // useEffect(() => {
    //     fetch('https://api.github.com/users/Itsmeinayath')
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data);
    //             setData(data);
    //         })
    //         .catch(error => console.error('Error fetching data:', error));
    // }, []);

    return (
        <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
            GitHub followers: {data ? data.followers : 'Loading...'}
            {data && (
                <div className='flex justify-center mt-4'>
                    <img src={data.avatar_url} alt="User Avatar" width={300} className='rounded-lg shadow-lg' />
                </div>
            )}
        </div>
    );
}

export default Github;

export const githubInfoLoader = async () => {
    const res = await fetch('https://api.github.com/users/Itsmeinayath');
    return res.json();
}