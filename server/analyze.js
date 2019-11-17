const readline = require('readline');
const fs = require('fs');

const file_path = 'mobydick.txt'
const stop_words_file = 'stopwords.txt'

const stopwords = fs.readFileSync(stop_words_file).toString().split("\n")
    .reduce( (prev, curr) => {
        if(curr[0] == "#" || !curr[0]) {
            return [...prev]
        }
        return [
            ...prev,
            curr
        ]
    }, [])

// event is emitted after each line
// let words = {}
function handleLine(line, words) {
    let i = 0;
    const split_line = line.split(" ")
    // remove non work phrases
    // const reg = /[^a-zA-Z]/
    
    // const reg = new RegExp("([^a-z])|(”)|(“)|(\r\n|\n|\r)","gm")
    const reg = new RegExp("([^a-z])|(\r\n|\n|\r)","gm")
    
    while(i < split_line.length){
        // let current_word = split_line[i].toLowerCase().replace(reg,'').replace('“','').replace('”','') // since regex is weird?
        // words.push(current_word)
        const current_word = split_line[i].toLowerCase().replace(reg,'')
        if( stopwords.includes(current_word) || current_word == ''){
            i++
            return words
        }
            if(Object.keys(words).includes(current_word)) {
                words[current_word]++
            } else {
                words[current_word] = 1
            }
        i++
        return words
    }

}



// create instance of readline
// each instance is associated with single input stream
// let rl = readline.createInterface({
//     input: fs.createReadStream('test.txt',{encoding: 'utf-8'})
// });

// // event is emitted after each line
// rl.on('line', line=> {
//     handleLine(line)
// })

// // end
// rl.on('close', function(line) {
//     console.log('done: ',words)
// });

const file_data = fs.readFileSync(file_path).toString().split(" ")

const raw_corpus = file_data.reduce((prev, curr) => handleLine(curr, prev), {})
// const final = Object.entries(res).sort( (a, b) => (a[1] > b[1]) ? -1 : 1).reduce( (prev, curr) => (Object.assign(prev, {[curr[0]]: curr[1]})),{})

const final = Object.entries(raw_corpus).sort( (a, b) => (a[1] > b[1]) ? -1 : 1)
    .splice(0, 100)
    .reduce( (prev, curr) => (Object.assign(prev, {[curr[0]]: curr[1]})),{})


// const final_2 = final.reduce( (prev, curr) => (Object.assign(prev, {[curr[0]]: curr[1]})),{})

console.log(final)