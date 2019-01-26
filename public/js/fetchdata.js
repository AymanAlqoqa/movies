const fetchData = (url, callback) => {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
            let response = JSON.parse(xhr.responseText);
            if (xhr.status === 200) {
                callback(response);
            }
        }
    }
    xhr.open('GET', url);
    xhr.send();
}
