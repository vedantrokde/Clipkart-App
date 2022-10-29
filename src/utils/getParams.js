const getParams = (query) => {
    const params = {};
    if(query){
        const queryString = query.split("?")[1];
        if(queryString.length>0){
            queryString.split("&").forEach(param => {
                const val = param.split("=");
                params[val[0]] = val[1];
            });
        }
    }
    return params;
}

export default getParams;