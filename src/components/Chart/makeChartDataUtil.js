import data from '../../mobydick_analyzed.json'


function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


export const makeChartDataUtil = (split=100) => {
    // check if the file exists
    if(!Object.keys(data).length) {
        console.log("Missing data file")
        return null
    }

    const labels = Object.keys(data).splice(0,split)
    const values = Object.values(data).splice(0,split)

    return {
        labels: labels,
        datasets: [{
            label: "Number of Times Used",
            data: values,
            backgroundColor: Array.from(Array(split).keys()).map(x=>getRandomColor())
        }]
    }
}

export const makeCloudDataUtil = (split=100)=>{

    return Object.entries(data).splice(0, split).reduce((prev, curr) => prev.concat([{text: curr[0], value: curr[1]}]), [])
}