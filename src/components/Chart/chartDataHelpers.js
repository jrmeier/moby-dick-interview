import data from '../../mobydick_analyzed.json'


function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


export const getChartJSData = (split=100) => {
    if(!checkForData) {
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

export const checkForData = () => {
    if(!Object.keys(data).length) {
        console.log("Missing data file")
        return null
    }
    return true
}

export const getCloudData = (split=100)=> Object.entries(data).splice(0, split).reduce((prev, curr) => prev.concat([{text: curr[0], value: curr[1]}]), [])