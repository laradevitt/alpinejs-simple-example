# Alpine.js simple example

A little demo of how you can use [Alpine.js](https://github.com/alpinejs/alpine) to bring simple interactions
into your HTML templates.

See how it's done in [public/index.html](https://github.com/laradevitt/alpinejs-simple-example/blob/master/public/index.html).

Interactions:

- Hide/show mobile menu
- Show active state on fancy "radio buttons" (gift card amounts)
- Update number of items in cart
- Show notification when cart is updated

To view the compiled template, you'll need to install [gulp.js](https://gulpjs.com/docs/en/getting-started/quick-start)
globally. Once you've done that, clone this repo, then:

```cli
cd alpinejs-simple-example
npm i
gulp build
```

You should now be able to drag and drop public/index.html into a browser to view it.

Although I'm using npm and a task runner to build my templates, since Alpine.js
doesn't actually require a build process you can just load the file directly inside the template. It even initializes itself! Pretty cool.
