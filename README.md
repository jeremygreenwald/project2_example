1. update IDE
1. find starter example
    1. https://flask.palletsprojects.com/en/1.1.x/quickstart/
1. Remembered I wanted to share this, create github through web UI	
    1. https://github.com/jeremygreenwald/project2_example
1. clone new repo to local computer
    1. git clone git@github.com:jeremygreenwald/project2_example.git
1. create README.md from scratch file
1. copy example from quickstart
1. run `flash run` and open browser to verify it works
1. create `static/javascript` and `static/html` directories
1. copy starter index.html from class material
    1. https://columbia.bootcampcontent.com/columbia-bootcamp/cu-nyc-data-pt-08-2020-u-c/-/tree/master/01-Lesson-Plans/16-D3/1/Activities/02-Ins_Complex_Data
1. copy starter app.js from class material
    1. https://columbia.bootcampcontent.com/columbia-bootcamp/cu-nyc-data-pt-08-2020-u-c/-/tree/master/01-Lesson-Plans/15-Interactive-Visualizations-and-Dashboards/2/Activities/03-Ins_D3_JSON
1. add `/data` route to app.py to return hard coded data
1. restart flask app, visit `/data` route in browser to verify route works
1. find tutorial I like
    1. https://pythonise.com/series/learning-flask/rendering-html-files-with-flask
1. create needed directories and move html file and add `render_template` to index route
1. app now serving my `templates/html/index.html` file
    1. `app.js` still not loading
1. add IDE temp folder `.idea/` to `.gitignore`
1. add/commit/push everything since index page is being served how I want it
    1. `git add .`
    1. `git commit -m "index page being served as template"`
    1. `git push`
1. get annoyed with restarting flask app, find page about disabling cache
    1. https://stackoverflow.com/questions/7078953/how-to-force-chromes-script-debugger-to-reload-javascript
1. get data to load in javascript console after fixing a few names
1. add/commit/push
1. decide to create dynamic list from `app.js`
    1. rename data route
    1. rename empty `div` element
1. add d3 select/append statements to create `ul` and `li` elements based on `/data1` route
1. add template ordered list
1. refactor data methods out of the app file
1. refactor route definitions out of js file
1. git add/commit/push
1. add a static html page to index
1. git add/commit/push