# 🐋 Moby Dick Interview 🐋
Sorry, you don't actually get to talk a person named Moby Dick. 

# Project Requirements
Pick any programming language of your choice and test-drive creating a list of the top 100 most frequently occurring words (excluding stop words) paired with the count of occurrences of the word, found in the text for Herman Melville's book Moby Dick. 

## Getting Started
So this should be relatively simple. All you need is Node 10.5 or greater and you should be good to go. If you don't have the right version of Node.js, I use NVM its great.


Here's the quick and dirty for your copy/paste pleasure: 
```
git clone git@github.com:jrmeier/moby-dick-interview.git && cd ./moby-dick-interview && npm i && npm start
```

First get the code 

`git clone git@github.com:jrmeier/moby-dick-interview.git`

Then install

`npm install`

All that's left is to build the data file and start the React app.

`npm start`

Now running this the first time is going to be a bit slow. This is where it actually entire Moby Dick book is read and analyzed. Click [here](https://github.com/jrmeier/moby-dick-interview/blob/master/analyze.js) for the code. The data file will be a JSON file, labeled `mobydick_analyzed.json`. I removed it from this last commit, just so you could make sure I'm doing real work ;).

Once the data file is built and the app is running, head to http://localhost:3000 to see it in action. Be sure to check out all the charting options!

## Troubleshooting

If you run `npm start` and the process completes without building the data file, run `node analyze.js` from the home directory. This will manually create the file. The you're good to run `npm start`.


# TODOs
Given more time, I wanted impliment a proxy server so there would be an API call, but as soon as I started, webpack and babel started to fight me so I decided to opt out.

* Proxy Server
* Ability to upload own any file
* More charting options
* Process file as a stream
