import axios from 'axios';

const searchImages = async (termToSearch) => {
    console.log("starting request");
   const response = await axios.get('https://api.unsplash.com/search/photos', {
        hearders: {
            
        },
        params: {
            query: termToSearch,
            client_id: 'yLuqtSmTkLt4px5Iafi4MZQ7JMjZ2yJaXRxV8dv8hec',
        },
    });
    console.log(response.data.results);
    return response.data.results;
};

export default searchImages;