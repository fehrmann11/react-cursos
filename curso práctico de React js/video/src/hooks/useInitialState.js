import { useState, useEffect } from 'react';

const useInitialState = (API) => {
    //use state
    const [videos, setVideos] = useState({ mylist: [], trends: [], originals: [] });
    //use efectt para ir a la fake api, y pasarsela a setVideos
    useEffect(() => {
        fetch(API)
            .then(response => response.json())
            .then(data => setVideos(data));
    }, []);
    return videos;
};

export default useInitialState;
