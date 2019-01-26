
const displayData = (searchFor, callback) => {
    let url = `http://www.omdbapi.com/?apikey=${key}&t=${searchFor}`;
    fetchData(url, (response) => {
        if (response.Response == 'False') callback(response.Error, response);
        else {
            callback(null, response);
        }
    })
};