from flask import Flask, render_template
from data import Articles

# placeholder for the current module
app = Flask(__name__)

Articles = Articles()

@app.route('/')
def index():
    return render_template('home.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/articles')
def articles():
    return render_template('articles.html', articles = Articles)

@app.route('/articles/<string:id>/')
def article(id):
    return render_template('article.html', id=id)

# test if the name value equels to main
if __name__ == '__main__':
    # run application
    app.run(debug=True)