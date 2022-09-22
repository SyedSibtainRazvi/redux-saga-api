export const getUsers = () => {
    return {
        type: "GET_USERS_REQUESTED",
    };
};

export const stopPolling = () => {
    return {
        type: "STOP_POLLING",
    };
};