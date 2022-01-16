import React, { useRef } from 'react';
import axios from 'axios';
import { SearchIcon } from '@heroicons/react/solid'

const SearchField = ({setUser, setErrorMsg}) => {
    const usernameField = useRef();
    const baseURL = 'https://api.github.com/users/';

    const search = () => {
        const username = usernameField.current.value;
        const token = `token ${process.env.REACT_APP_GH_TOKEN}`;
        const gh = axios.create({
            baseURL: baseURL,
            headers: {
               authorization: token,
            }
        })

        gh.get(username).then(res => {
            console.log(res)
            setUser(res.data);
            setErrorMsg(null);
        })
        .catch(err => {
            if(err.response) {
                if(err.response.status === 404) {
                    setErrorMsg('Error: User could not be found.');
                } else {
                    console.log(err.response);
                    setErrorMsg('Error: Unknown error.')
                }
            }
            else if(err.request) {
                setErrorMsg('Error: Network error.');
            }
            setUser(null);
        })
    }

    return (
        <div className="w-full p-4 dark:bg-bluegray-300 bg-bluegray-200 rounded-2xl mt-8 flex gap-2 relative">
            <SearchIcon className="absolute w-8 h-8 top-7 left-5 dark:text-bluegray-200 text-white" />
            <input onKeyPress={(e) => { if(e.key === 'Enter') search() } }  ref={usernameField} type="text" className="w-full p-2 pl-11 dark:bg-bluegray-300 bg-bluegray-200 text-white" placeholder='Search Username' />
            <button onClick={search} className='transition py-4 px-6 hover:bg-bluegray-150 bg-bluegray-100 text-white rounded-xl'>Search</button>
        </div>
    )
}

export default SearchField;