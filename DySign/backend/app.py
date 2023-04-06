from flask import Flask, render_template, request
from werkzeug.utils import secure_filename
app = Flask(__name__)

# @app.route('/upload')
# def upload_file():
#    return render_template('upload.html')
	
@app.route('/uploader', methods = ['GET', 'POST'])
def upload_file():
   if request.method == 'POST':
      f = request.files['file']
      f.save(secure_filename(f.filename))
      return 'file uploaded successfully'
		
if __name__ == '__main__':
   app.run(debug = True)

# from flask import Flask, Response, render_template, request, redirect, url_for, flash
# from flask_sqlalchemy import SQLAlchemy 
# from datetime import datetime
# from werkzeug.utils import secure_filename
# import os
# from reverseProxy import proxyRequest

# MODE = os.getenv('FLASK_ENV')

# app = Flask(__name__)
# app.secret_key = "secret key"
# UPLOAD_FOLDER = 'static/Uploads/'
# app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

# #app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:////mnt/c/Users/antho/Documents/blog/blog.db'
# app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:////blog.db'
# db = SQLAlchemy(app)

# ALLOWED_EXTENSIONS = set(['png', 'jpg', 'jpeg', 'gif'])

# def allowed_file(filename):
# 	return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

# class blogpost(db.Model):
#     id = db.Column(db.Integer, primary_key=True)
#     title = db.Column(db.String(50))
#     subtitle = db.Column(db.String(50))
#     author = db.Column(db.String(20))
#     date_posted = db.Column(db.DateTime)
#     content = db.Column(db.Text)

# class Screener(db.Model):
#     id = db.Column(db.Integer, primary_key=True)
#     img = db.Column(db.Text, unique=True, nullable=False)
#     file=db.Column(db.Text, unique=True, nullable=False)
#     screenResult=db.Column(db.Text, unique=False, nullable=False)
#     mimetype = db.Column(db.Text, nullable=False)

# class Subscribe(db.Model):
#     id = db.Column(db.Integer, primary_key=True)
#     Name = db.Column(db.Text, unique=False, nullable=False)
#     Email = db.Column(db.Text, unique=True, nullable=False)


# @app.before_first_request
# def create_tables():
#     db.create_all()

# @app.route('/')
# def index():
#     return render_template('about.html')

# @app.route('/about')
# def about():
#     posts = blogpost.query.order_by(blogpost.date_posted.desc()).all()
#     return render_template('index.html', posts=posts)

# @app.route('/post/<int:post_id>')
# def post(post_id):
#     post = blogpost.query.filter_by(id=post_id).one()

#     return render_template('post.html', post=post)

# @app.route('/add')
# def add():
#     return render_template('add.html')

# @app.route('/addpost', methods=['POST'])
# def addpost():
#     title = request.form['title']
#     subtitle = request.form['subtitle']
#     author = request.form['author']
#     content = request.form['content']

#     post = blogpost(title=title, subtitle=subtitle, author=author, content=content, date_posted=datetime.now())

#     db.session.add(post)
#     db.session.commit()

#     return redirect(url_for('about'))

# @app.route('/upload')
# def upload():
#     return render_template('upload.html')

# @app.route('/upload_image', methods=['POST'])
# def upload_image():
#     if 'file' not in request.files:
#         flash('No file part')
#         return redirect(request.url)

#     file = request.files['file']
#     if file.filename == '':
#         flash('No image selected for uploading')
#         return redirect(request.url)
#     if file and allowed_file(file.filename):
#         filename = secure_filename(file.filename)
#         file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
# 		#print('upload_image filename: ' + filename)
#         flash('Image successfully uploaded and displayed below')
#         return render_template('upload.html', filename=filename)
#     else:
#         flash('Allowed image types are -> png, jpg, jpeg, gif')
#         return redirect(request.url)
    
# @app.route('/display_image/<filename>')
# def display_image(filename):
# 	#print('display_image filename: ' + filename)
# 	return redirect(url_for('static', filename='Uploads/' + filename), code=301)

# @app.route('/subscribe')
# def subscribe():
#     return render_template('subscribe.html')

# @app.route('/subscribeNow', methods=['POST'])
# def subscribeNow():
#     Name = request.form['name']
#     Email = request.form['email']

#     subscription = Subscribe(Name=Name, Email=Email)
#     db.session.add(subscription)

#     return render_template('successSubscribe.html')

# if __name__ == '__main__':
#     app.run(debug=True)