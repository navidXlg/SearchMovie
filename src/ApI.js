import axios from "axios";


const fetchData = async function(movie){
    
    const response = await axios.get(`http://www.omdbapi.com/?&apikey=e1a73560&s=${movie}&type="movie"`)
    return response.data.Search
};

export default fetchData;