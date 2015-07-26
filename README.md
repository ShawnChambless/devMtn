# Group Project

## Gulpfile.js

After you install gulp-cli,

    sudo npm install --global gulp

all that you have to do for the gulp file to work is type gulp into your command line. It'll spin up a server and open the page for you. It'll also auto-refresh - any changes that you make (excluding index.html) will refresh your browser. The port is 8080.

## Jade
#### http://jade-lang.com/

Jade is a lot like SASS - It's pretty dependent on whitespace and indentation. It's super simple and if you don't get it, you can just write html in the jade files and it'll compile to regular html no problem.

## Sass
#### http://jade-lang.com/

Sass is the bees' knees. All that you have to do is write css without the bracket and semicolons.
```
body {
    background: red;
}
```
becomes
```
body
    background: red
```
There's really nothing else to it.

If you want to make a variable, all that you have to do is:
```
$myFavoriteColor: blue
```
then you can set $myFavoriteColor on whatever element you want to.

## Production Files Directory

For the gulp file to work, I had to set a destination directory for our files. I just named it productionFiles. This is where the minified .js files are located, and where the jade and sass compile to.

# This is just a first draft of the file structure. We can refine it as much as everybody wants to. I was bored, and wanted to get something done with this project.
