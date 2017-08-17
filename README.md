# BOSM 2017 Main Site
===

## Development Instructions

### Branch

Please work on the main branch directly unless for testing.

### Grunt

We are using Grunt to package our source files for production.
This helps maintaining the repository and breaking up the huge source files into many individual units.
There are two main directories `src` and `dist`. `src` stands for "source" and `dist` stands for "distribution". All `src` files act as input to Grunt and `dist` is where grunt stores the output.

`src` will house an index.html and all SVG files.

In index.html, when any other file has to be included at a position, just write:

```
include "<path to file>"
```

This line will then be replaced by the contents of the other file.

Our main aim is to keep the huge SVG files separate from `index.html`. We cannot just directly include SVGs using `<img src="..."` or `xlink` as then the svg elements will have their own DOM and can't be styled/animated with CSS/JS.

### Installation

You will need `npm` for this:

```
$ sudo apt install npm
```

or for Mac: (You need Homebrew)

```
$ brew install npm
```

Now Install the dependancies:

```
$ npm install
```

### Building the output file

```
$ grunt
```

- [ ] Hello World
