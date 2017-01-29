# vue-notes
A notes web app written with vue.js and vuex.
Try it out [here](https://scratchos.github.io/vue-notes/).

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
npm install http-server -g
http-server
```

## Building
To start the hot realoading development server on localhost:8080 run
`npm run dev`.  This will lint you code before compiling it.

To build for production run `npm run build`.  This will build into the
/dist directory.  You can then `git push` that to the master,  the
/dist directory will automaticaly go into the `gh-pages` branch.  
(`git subtree push --prefix dist origin gh-pages`)

## Contributing
Please makesure all code passes the linter and test the production 
build.