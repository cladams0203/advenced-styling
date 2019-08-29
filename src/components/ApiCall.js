import axios from 'axios';

export function ApiCall(data) {
    const arrayData = []
    data.forEach((item) => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=2SRRnuxvkuyObnfGKHUnVGXtpgJfAuZNkZWyyZXI&date=${item.date}`)
            .then(response => arrayData.push(response.data))
            .catch(err => console.log(err))
    })
    return arrayData
    
    // console.log(data)
    // axios.get(`https://api.nasa.gov/planetary/apod?api_key=2SRRnuxvkuyObnfGKHUnVGXtpgJfAuZNkZWyyZXI&date=${date[0].date}`)
    // .then(response => setData(...data, response.data))
    // .catch(err => console.log(err))
    //  axios.get(`https://api.nasa.gov/planetary/apod?api_key=2SRRnuxvkuyObnfGKHUnVGXtpgJfAuZNkZWyyZXI&date=${date[1].date}`)
    //  .then(response => setData(...data, response.data))
    //  .catch(err => console.log(err))
    //  axios.get(`https://api.nasa.gov/planetary/apod?api_key=2SRRnuxvkuyObnfGKHUnVGXtpgJfAuZNkZWyyZXI&date=${date[2].date}`)
    //  .then(response => setData(...data, response.data))
    //  .catch(err => console.log(err))
}
