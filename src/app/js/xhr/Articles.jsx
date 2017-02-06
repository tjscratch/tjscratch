import axios from 'axios'

let getArticles = function() {
    return axios.get('content/articles.json');
};

export {getArticles}