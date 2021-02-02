import React from 'react'
import TweetHome from "../layout/TweetHome";
import Feed from "../layout/Feed";

const Home = () => {
    return (
        <div className='Home'>
            <TweetHome/>
            <Feed/>
        </div>
    )
}

export default Home