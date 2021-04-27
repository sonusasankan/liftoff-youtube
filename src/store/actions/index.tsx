
export const hideVideo = (video: object) => {
    return {
        type: 'HIDE',
        payload: video
    }
};


export const showVideo = (video: object) => {
    return {
        type: 'SHOW',
        payload: video
    }
};

export const addVideo = (video: object) => {
    return {
        type: 'ADD',
        payload: video
    }
};
export const updateVideo = (video: object) => {
    return {
        type: 'UPDATE',
        payload: video
    }
};

export const setFilter = (filter: string) => {
    return {
        type: 'FILTER',
        payload: filter
    }
};