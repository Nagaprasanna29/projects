from flask import Flask,request
from flask_cors import CORS
import logging
import pymysql
import datetime
import signal
signal.signal(signal.SIGWINCH, signal.SIG_IGN)

app = Flask(__name__)
CORS(app)
db=pymysql.connect(host="localhost",user="root",db="portfolio_website",
password="yes",autocommit=True)

@app.route("/api/recommendations",methods=["GET"])

def getRecommendations():
 cursor=db.cursor()
 cmd="select * from recommendations where onShowCase=true;"
 try:
  cursor.execute(cmd)
  recommendations=cursor.fetchall()
  final_recommendations=[]
  for recommendation in recommendations:
   recommendation_dict={
   "id":recommendation[0],
   "name":recommendation[1],
   "company":recommendation[3],
   "designation":recommendation[4],
   "recommendationMessage":recommendation[5]
   }
   final_recommendations.append(recommendation_dict)
 except:
  return{"isSuccessful":False,"payload":[]}
 finally:
  cursor.close()
 return{"isSuccessful":True,"payload":final_recommendations}

@app.route("/api/skills",methods=["GET"])

def getSkills():
 cursor=db.cursor()
 cmd="select * from skills;"
 try:
  cursor.execute(cmd)
  skills=cursor.fetchall()
  final_skills=[]
  for skill in skills:
   skill_dict={
   "id":skill[0],
   "imageUrl":skill[1],
   "name":skill[2],
   "starsTotal":skill[3],
   "starsActive":skill[4]
   }
   final_skills.append(skill_dict)
 except:
  return{"isSuccessful":False,"payload":[]}
 finally:
  cursor.close()
 return{"isSuccessful":True,"payload":final_skills}

@app.route("/api/projects",methods=["GET"])
def getProjects():
 cursor=db.cursor()
 cmd="select id,imageUrl,title,excerpt from projects where isPublished=true order by lastModified desc;"
 try:
  cursor.execute(cmd)
  projects=cursor.fetchall()
  final_projects=[]
  for project in projects:
   project_dict={
   "id":project[0],
   "imageUrl":project[1],
   "title":project[2],
   "excerpt":project[3],
   }
   final_projects.append(project_dict)
 except:
  return{"isSuccessful":False,"payload":[]}
 finally:
  cursor.close()
 return{"isSuccessful":True,"payload":final_projects}

@app.route("/api/blogs",methods=["GET"])
def getBlogs():
 cursor=db.cursor()
 cmd="select id,imageUrl,title,excerpt from blogs where isPublished=true order by lastModified desc;"
 try:
  cursor.execute(cmd)
  blogs=cursor.fetchall()
  final_blogs=[]
  for blog in blogs:
   blog_dict={
   "id":blog[0],
   "imageUrl":blog[1],
   "title":blog[2],
   "excerpt":blog[3],
   }
   final_blogs.append(blog_dict)
 except:
  return{"isSuccessful":False,"payload":[]}
 finally:
  cursor.close()
 return{"isSuccessful":True,"payload":final_blogs}

@app.route("/api/blog/add",methods=["POST"])
def addBlog():
 try:
  contact=request.json
  id=contact["id"]
  imageUrl=contact["imageUrl"]
  title=contact["title"]
  excerpt=contact["excerpt"]
  body=contact["body"]
  curr_datetime=datetime.datetime.now()
  cmd = "INSERT INTO blogs VALUES(%s,%s,%s,%s,%s, true,%s)"
  cursor=db.cursor()
  cursor.execute(cmd,(id, imageUrl, title, excerpt, body, curr_datetime))
  return{"isSuccessful":True}
 except:
  return{"isSuccessful":False}
 finally:
  cursor.close()

@app.route("/api/project/add",methods=["POST"])
def addProject():
 try:
  project=request.json
  id=project["id"]
  imageUrl=project["imageUrl"]
  title=project["title"]
  excerpt=project["excerpt"]
  body=project["body"]
  curr_datetime=datetime.datetime.now()
  cmd = "INSERT INTO projects VALUES(%s,%s,%s,%s,%s,true,%s)"
  cursor=db.cursor()
  cursor.execute(cmd,(id, imageUrl, title, excerpt, body, curr_datetime))
  return{"isSuccessful":True}
 except:
  return{"isSuccessful":False}
 finally:
  cursor.close()


@app.route("/api/recommendation",methods=["POST"])
def addRecommendation():
 try:
  recommendation=request.json
  id=recommendation["id"]
  name=recommendation["name"]
  email=recommendation["email"]
  company=recommendation["company"]
  designation=recommendation["designation"]
  recommendationMessage=recommendation["recommendationMessage"]
  cmd = "INSERT INTO recommendations VALUES(%s,%s,%s,%s,%s,%s,true)"
  cursor=db.cursor()
  cursor.execute(cmd,(id,name,email,company,designation,recommendationMessage))
  return{"isSuccessful":True}
 except:
  return{"isSuccessful":False}
 finally:
  cursor.close()


@app.route("/api/contact",methods=["POST"])
def addContact():
 try:
  contact=request.json
  name=contact["name"]
  email=contact["email"]
  description=contact["description"]
  curr_datetime=datetime.datetime.now()
  cmd = "INSERT INTO contact VALUES(%s,%s,%s,%s)"
  cursor=db.cursor()
  cursor.execute(cmd,(name,email,description, curr_datetime))
  return{"isSuccessful":True}
 except:
  return{"isSuccessful":False}
 finally:
  cursor.close()


@app.route("/api/blog",methods=["GET"])
def getBlog():
 try:
  id=request.args.get("id")
  cmd="Select title,imageUrl,body from blogs where id={};".format(id)
  cursor=db.cursor()
  cursor.execute(cmd)
  blog=cursor.fetchone()
  blog_dict={
  "title":blog[0],
  "imageUrl":blog[1],
  "body":blog[2]
  }
  return{"isSuccessful":True,"payload":blog_dict}
 except:
  return{"isSuccessful":False,"payload":{}}
 finally:
  cursor.close()

@app.route("/api/project",methods=["GET"])
def getProject():
 try:
  id=request.args.get("id")
  cmd="Select title,imageUrl,body from projects where id={};".format(id)
  cursor=db.cursor()
  cursor.execute(cmd)
  project=cursor.fetchone()
  project_dict={
  "title":project[0],
  "imageUrl":project[1],
  "body":project[2]
  }
  return{"isSuccessful":True,"payload":project_dict}
 except:
  return{"isSuccessful":False,"payload":{}}
 finally:
  cursor.close()

if __name__!="__main__":
 gunicorn_logger=logging.getLogger("gunicorn.error")
 app.logger.handlers=gunicorn_logger.handlers
 app.logger.setLevel(gunicorn_logger.level)

