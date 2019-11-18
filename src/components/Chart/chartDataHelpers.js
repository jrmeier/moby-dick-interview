// this is bad I know
import data from '../../mobydick_analyzed.json'


function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


export const getChartJSData = (min=0, max=100) => {
    if(!checkForData) {
        return null
    }
    
    const labels = Object.keys(data).splice(min,max)
    const values = Object.values(data).splice(min,max)
    return {
        labels: labels,
        datasets: [{
            label: "Number of Times Used",
            data: values,
            backgroundColor: Array.from(values).map(x=>getRandomColor())
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

export const getCloudData = (min, max)=> Object.entries(data).splice(min, max).reduce((prev, curr) => prev.concat([{text: curr[0], value: curr[1]}]), [])