import axios from "axios"




export default axios.create({
   
    baseURL : `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=politics?&api-key=A1dOvVOBojXCJnG4S3QlaHyDGNNmOg2A`

})