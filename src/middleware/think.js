export default store => next => action => {             // dispatch takes action and passes it through the reducers.
    if(typeof action !== 'function') {
        return next (action);
    }

    action(store.dispatch);
}