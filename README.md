# mailer ajax (thp week 8, day 4)

## made in pair programming by Maud Lévy :fried_shrimp: & Antoine Vercoutère :poultry_leg:

### link to production version: [http://mailer-ajax-mlav.herokuapp.com](http://mailer-ajax-mlav.herokuapp.com) :rocket:

### to check the app locally

1. `git clone` the repository on your computer
2. run the `bundle install` command
3. run the `rails db:create db:migrate db:seed` command
4. run the `rails server` command
5. open your favorite browser, and go to `http://localhost:3000`
6. have fun clicking on emails, reading them, and deleting them

### how we did it

- an email Model, containing four interesting columns: *id*, *object*, *body*, and *read*.
- a controller for this Email model, which contains three methods: *index*, *update*, and *destroy*.
- one view for the whole thing : `index.html.erb` in the *app > views > emails* folder.
- two small javascripts scripts in the same folder (`destroy.js.erb` and `update.js.erb`).
- some javascript in the `application.js` file.
- bootstrap and fontawesome to make it beautiful.

:kiss: