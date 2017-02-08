import axios from 'axios'

let getArticles = function() {
    return axios.get('/app/content/articles.json');
};

export {getArticles}