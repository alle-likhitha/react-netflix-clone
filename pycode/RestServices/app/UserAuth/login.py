from flask import Blueprint, request
from bson.json_util import dumps
mod_data = Blueprint('login', __name__,)


@mod_data.route('/helloworld')
def get_hello_word():
    return {"data": "Hello World"}, 200




## POST Call -> new user


## GET CALL -> USER DETAILS VERIFY ?


##