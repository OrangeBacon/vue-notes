# vue-notes
A notes web app written with vue.js and vuex.
Try it out [here](https://vuenotes.herokuapp.com/).

## Features
* favoriting
* all notes are persistant in local storage
* you can filter by favorite or all notes
* you can search for notes within the current filter

## Instalation

```
git clone git@github.com:ScratchOs/vue-notes.git
npm install
```

## Serving
```
git checkout gh-pages
npm install -g http-server
http-server
```

## Building
To start the hot realoading development server on localhost:8080 run
`npm run dev`.  This will lint your code before compiling it.

## Deploying
```
npm run build
npm run deploy
```

## Contributing
Please makesure all code passes the linter and test the production 
build.