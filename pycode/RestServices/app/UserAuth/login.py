from flask import Blueprint, request
from bson.json_util import dumps
import json
mod_data = Blueprint('login', __name__,)
from DButils import DButils

@mod_data.route('/helloworld')
def get_hello_word():
    return {"data": "Hello World"}, 200



@mod_data.route("/add-new-user")
def add_new_user():
    user_email = request.args.get("email")
    password = request.args.get("password")
    try:
        data =DButils().get_collection("LOGIN", "user_info").insert({"_id": user_email,
                                                                     "email": user_email,
                                                                     "password": password})
        if (data):
            return dumps({"data": "SUCCESS"}), 200, {"Content Type": "application/json"}
        else:
            return dumps({"error": "FAILED TO SET UP INFO"}), 200, {"Content Type": "application/json"}
    except:
        return dumps({"error": "USER ALREADY PRESENT"}), 200, {"Content Type": "application/json"}





## POST Call -> new user
@mod_data.route("/signup-user", methods=['POST'])
def signup_user():
    print("-=-=-=")
    data_received = request.get_data()
    record = json.loads(data_received)
    try:
        data = DButils().get_collection("moviesnow", "user_data").insert(record)
        if (data):
            return dumps({"data": "SUCCESS"}), 200, {"Content Type": "application/json"}
        else:
            return dumps({"error": "FAILED TO SET UP INFO"}), 200, {"Content Type": "application/json"}
    except:
        return dumps({"error": "USER ALREADY PRESENT"}), 200, {"Content Type": "application/json"}
    # print(data_received)


## GET CALL -> USER DETAILS VERIFY ?
@mod_data.route("/verify-login")
def verify_login():
    user_email = request.args.get("email")
    password = request.args.get("password")
    data =DButils().get_collection("moviesnow", "user_data").find_one({"email": user_email,
                                                                 "password": password})
    if data:
        return dumps({"data": "SUCCESS"}), 200, {"Content Type": "application/json"}
    else:
        return dumps({"error": "FAILED TO SET UP INFO"}), 200, {"Content Type": "application/json"}

##