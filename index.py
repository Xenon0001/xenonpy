from flask import Flask
from flask import render_template

app = Flask(__name__)

@app.route("/")
def index():
    return render_template('index.html')

@app.route("/nosotros")
def about():
    return render_template('about_us.html')

@app.route("/servicios")
def services():
    return render_template('services.html')

@app.route("/proyectos")
def portfolio():
    return render_template('portfolio.html')

if __name__ == "__main__":
    app.run(host='0.0.0.0', debug=True)