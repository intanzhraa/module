const notification = {
    namespaced: true,
    state: {
        notification: null,
    },
    mutations: {
        SET_NOTIFICATION(state, {message, type}) {
            state.notification = { message, type };
        },
    },
    actions: {
        setNotification({ commit}, { message, type }) {
            commit("SET_NOTIFICATION", { message, type })
                setTimeout(() => {
                    commit("SET_NOTIFICATION", null);
                }, 300);
            },
        },
    };

    export default notification;