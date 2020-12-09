import axios from 'axios';

const idApi = "U4RGVG-93W5P42U73";
const queryOne = "solve+7.849*x%3D41.15*y%2C-w%3D-7.849*%28238.4%2B%28x²%29%2F2%29*x*0.000197%2B41.15*%28303.9%2B%28y²%29%2F2%29*Y*0.000197%2C-w>0%2C"
const url = `https://api.wolframalpha.com/v2/query?appid=${idApi}&input=${queryOne}&output=json`

const query = 'solve a + x - 3 y + z = 2,-5 a + 3 x - 4 y + z = 0,a + 2 y - z = 1,a + 2 x = 12'
const realquery = 'solve+a+%2B+x+-+3+y+%2B+z+%3D+2%2C-5+a+%2B+3+x+-+4+y+%2B+z+%3D+0%2Ca+%2B+2+y+-+z+%3D+1%2Ca+%2B+2+x+%3D+12'
// solve+7.849*x%3D41.15*y%2C-w%3D-7.849*%28238.4%2B%28x²%29%2F2%29*x*0.000197%2B41.15*%28303.9%2B%28y²%29%2F2%29*Y*0.000197%2C-w>0%2C

const query34 = "solve+0.2264*x%3D%283%2C94*10%5E4%29*26.74+*y%2C+0+%3D+-0.2264*%2895%2B%28x%5E2%29%2F2%29*x%2B26.74*%283%2C94*10%5E4%29*y*%2878.72%2B%28y%5E2%29%2F2%29"

export const fetchData = async () => {
    try{
        const res = await fetch(url)
            .then(response=>response.json())
            .then(data=>{
                const equation = data.queryresult.pods[0].subpods[0].plaintext
                const result = data.queryresult.pods[1].subpods[0].plaintext

                return {equation, result}
        })
        return res
    }
    catch{
        console.log("Error")
    }
}

// export const fetchAxiosData = async () => {
//     const res = await axios({
//         method: 'get',
//         url: url,
//         headers: {
//             'Content-Type': 'json',
//             'Access-Control-Allow-Origin' : '*',
//             "Access-Control-Allow-Headers" : "Origin, X-Requested-With, Content-Type, Accept",
//             'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
//           }
//       })
//     const equation = res.queryresult.pods[0].subpods[0].plaintext
//     const result = res.queryresult.pods[1].subpods[0].plaintext

//     console.log(result)
// }


