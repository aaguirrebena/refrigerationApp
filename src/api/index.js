const idApi = "U4RGVG-93W5P42U73";
const queryOne = "solve+7.849*x%3D41.15*y%2C-w%3D-7.849*%28238.4%2B%28x²%29%2F2%29*x*0.000197%2B41.15*%28303.9%2B%28y²%29%2F2%29*Y*0.000197%2C-w>0%2C"
const url = `http://api.wolframalpha.com/v2/query?appid=${idApi}&input=${queryOne}&output=json`

const query = 'solve a + x - 3 y + z = 2,-5 a + 3 x - 4 y + z = 0,a + 2 y - z = 1,a + 2 x = 12'
const realquery = 'solve+a+%2B+x+-+3+y+%2B+z+%3D+2%2C-5+a+%2B+3+x+-+4+y+%2B+z+%3D+0%2Ca+%2B+2+y+-+z+%3D+1%2Ca+%2B+2+x+%3D+12'
// solve+7.849*x%3D41.15*y%2C-w%3D-7.849*%28238.4%2B%28x²%29%2F2%29*x*0.000197%2B41.15*%28303.9%2B%28y²%29%2F2%29*Y*0.000197%2C-w>0%2C

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