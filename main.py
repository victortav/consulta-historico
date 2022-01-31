#from flask import Flask
#app = Flask(__name__)

#@app.route('/')
#def hello_world():
#    return "hello world."



from server.instance import server 
from controllers.historicos import *


#import werkzeug 
#werkzeug.cached_property = werkzeug.utils.cached_property

#from werkzeug import cached_property
server.run()