class Servicios {
    fetchData(callback) {
        const apiurl = 'json/ingredientes.json';        
        fetch(apiurl)
            .then(response => response.json())
            .then(data => {
                callback(null, data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });        
    }
}

export default Servicios;
