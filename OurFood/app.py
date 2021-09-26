import re
from flask import Flask, render_template, request
from pymongo import MongoClient

# Init
app = Flask(__name__)
client = MongoClient("mongodb+srv://foody:FamishedFour4@cluster0.zba6a.mongodb.net/OurFood?retryWrites=true&w=majority")
recipes_coll = client['OurFood']['recipes']

class RecipeHandler:
  def searchBarResult(search):
    regx = re.compile(str(search), re.IGNORECASE)
    results = []
    query_results = recipes_coll.find({'$or':[{'Name': regx}, {'Ingredients': {'$in': [regx]}}]})
    
    for r in query_results:
      results.append(r)
    return results


@app.route("/")
@app.route("/home")
def home():
    q = RecipeHandler.searchBarResult(request.args.get('q'))
    #recipes = [recipe for recipe in posts.find({ "Cook Time": int(q)})]
    return render_template('home.html', recipes = q)

# Run Server 
if __name__ == '__main__':
    app.run(debug=True)