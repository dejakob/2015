# 2015

Live example: [dejakob.com/2015](http://dejakob.com/2015)

## My personal year overview of 2015

This is the first project I publish with reactJS and already want to apologize if I did not use the correct code styling or best practices. Also, this is a personal project and therefore has a lower code quality than other projects I've been working on. (keep this in mind before reviewing this codebase :) )

Still, I think it is interesting to share it with the world.
Maybe I can learn something out of it for future projects.

## How to install

### 1. Clone the git repo
```
git clone https://github.com/dejakob/2015.git
```

### 2. Install all dependencies with npm
```
npm i
```

### 3. Run gulp to generate the production/dist version
```
gulp
```

### 4. Open dist/index.html in your browser

## Problems I ran into (and bad solutions you shouldn't use)
### 1. My server is pretty messed up after me trying basically everything on it before
* It is ubuntu, so I had to use the `nodejs` package instead of the `node` package
* Something was broken with the $PATH and my life was too short to fix it, so I ended up running `which gulp` and then `nodejs <full_path_to_gulp>` or `nodejs <full_path_to_npm>`
* I put too much apache conf for different projects on it that I ended up adding a redirect with PHP.
* Asset caching was disabled on the server and added a `.htaccess` config for it.

### 2. Perf matters
* It is really hard to make something like this well performant. I tried some different things to tackle that...
* According to [Google Speedtest](https://developers.google.com/speed/pagespeed/insights/?url=http%3A%2F%2Fdejakob.com%2F2015%2Fdist%2Findex.html), my images were to big and bad compressed. I used [gulp-imagemin](https://github.com/sindresorhus/gulp-imagemin) to partially solved it. (There is still a lot of improvement possible for images hosted by Twitter/Facebook/etc.)
* As mentioned before, there was no server-side caching for images, `.htaccess` did the job.
* Minified files were always created by gulp, I just forgot to use these files in `index.html` at first.

### 3. I don't have 10 years experience developing in React.js
* React is brand new, you don't always find a solution when needed.
* All examples use Webpack/ES6 imports and I didn't (maybe not the best idea)...
* Most examples use [Flux](https://facebook.github.io/flux/docs/overview.html) or [Redux](https://github.com/rackt/redux) and I was not yet convinced about those technologies that I ended up using [Vanilla.js](http://vanilla-js.com/) for communication between components.
