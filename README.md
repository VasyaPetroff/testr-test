## Preamble

It's simple realization based on given design. It took near 8 hours (not up to 3 hours as was mentioned in assignment).
So I simplified couple of things.

## Thoughts about what was done

Because it's just an imitation of real project everything was done quick enough. I used plain CSS to do markup but in
real life it's much better to use CSS / HTML framework with preprocessor.

Also I didn't use full-fledged routing. I did just some kind of it.

In production and generally for the real project I would use totally custom handmade webpack configuration. Because it's give better
control over bundler and deployment process.


## Execution instructions

Before to start you need install nodejs

[https://github.com/nodesource/distributions/blob/master/README.md#debinstall](https://github.com/nodesource/distributions/blob/master/README.md#debinstall)

Download project from to any folder

To deploy project, run (from the project directory -- where package.json is located):

### `npm i`

Run node server [http://localhost:8081](http://localhost:8081)

### `node ./server/server.js`

For frontend development I used [Create React App](https://github.com/facebook/create-react-app) as preconfigured environment.

### Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

That's all.