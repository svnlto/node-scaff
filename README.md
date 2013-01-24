# node-scaff

This is a simple application scaffold to get started with node.js based application development.

It doesn't impose any framework or the like on you. But makes a few
assumptions. Here are this things it makes use of:

* [Grunt][2]
* [Travis][1]
* [JSHint][4]
* [Mocha][3]


## Task Automation

The project ships with a set of predefined grunt tasts. Those being
the `lint` and `test`. It also provides a `watch` command that will lint
and test the project as you save the files you are working on.

## Continuos Deployment

Also available in this project is a .travis file. I won't go into detail
about it here but please go and read [getting started with
travis-ci](http://about.travis-ci.org/docs/user/languages/javascript-with-nodejs/)


## Unit Testing

To run your tests, let's say on travis. Run the following:

```
npm test
```

[1]: https://travis-ci.org/
[2]: http://gruntjs.com/
[3]: http://visionmedia.github.com/mocha/
[4]: http://www.jshint.com/
