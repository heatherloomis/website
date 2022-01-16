# Portfolio Website

This is a [hugo](https://gohugo.io/) based portfolio website.

## Building

Install the requirements for the theme.
```
docker run --rm -it -v $(pwd):$(pwd) -w $(pwd) -u $(id -u):$(id -g) node npm install
```

Run a development server.
```
docker run --rm --init -it -v $(pwd):/src -p 1313:1313 klakegg/hugo:ext serve
```

