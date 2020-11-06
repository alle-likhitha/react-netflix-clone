from flask import Blueprint, request
from bson.json_util import dumps
from DButils import DButils

mod_data = Blueprint('DrugInfo', __name__, )


@mod_data.route("/get-all")
def get_all():
    try:
        data = list(DButils().get_collection("moviesnow", "tvshows").find({}))
        for d in data:
            d["_id"] = str(d["_id"])
        return dumps({"data": data}), 200, {"Content Type": "application/json"}
    except:
        return dumps({"error": "Database ERROR"}), 500, {"Content Type": "application/json"}


@mod_data.route("/get-by-category")
def get_by_category():
    try:
        data = list(DButils().get_collection("moviesnow", "tvshows").find({'Genre': {"$regex": ".*Comedy.*"}}))
        for d in data:
            d["_id"] = str(d["_id"])
        return dumps({"data": data}), 200, {"Content Type": "application/json"}
    except:
        return dumps({"error": "Database ERROR"}), 500, {"Content Type": "application/json"}
