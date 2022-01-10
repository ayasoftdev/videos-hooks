import axios from 'axios'
const KEY = 'AIzaSyBpUdJceAWRmLoOqUPTmrAXCI0WceNeUJg'


export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: '5',
        key: KEY
    }
})

