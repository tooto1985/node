var MongoClient = require("mongodb").MongoClient;
var ObjectId = require('mongodb').ObjectID;
module.exports = function(mongodbUri, collectionName) {
    var cache;

    function connect(callback) {
        if (!cache) {
            MongoClient.connect(mongodbUri, function(err, db) {
                if (!err) {
                    cache = db;
                    callback(null, cache.collection(collectionName));
                } else {
                    callback(err, null);
                }
            });
        } else {
            callback(null, cache.collection(collectionName));
        }
    }
    this.insert = function(insertObject, success, error) {
        connect(function(err, dbc) {
            if (!err) {
                dbc.insert(insertObject, function(err, result) {
                    if (!err) {
                        if (success) success(result);
                    } else {
                        if (error) error(err);
                    }
                });
            } else {
                if (error) error(err);
            }
        });
    }
    this.select = function(filter, success, error, fetch) {
        connect(function(err, dbc) {
            if (!err) {
                if (typeof filter !== "function") {
                    if (!filter) {
                        filter = {};
                    }
                    var q = dbc.find(filter);
                    if (fetch) {
                        q = q.limit(fetch);
                    }
                } else {
                    q = filter(dbc);
                }
                q.toArray(function(err, data) {
                    if (!err) {
                        if (success) success(data);
                    } else {
                        if (error) error(err);
                    }
                });
            } else {
                if (error) error(err);
            }
        });
    }
    this.update = function(id, updateObject, success, error) {
        connect(function(err, dbc) {
            if (!err) {
                if (!updateObject.$set && !updateObject.$unset) {
                    updateObject = { $set: updateObject };
                }
                dbc.update({ _id: new ObjectId(id) }, updateObject, function(err, data) {
                    if (!err) {
                        if (success) success(data);
                    } else {
                        if (error) error(err);
                    }
                });
            } else {
                if (error) error(err);
            }
        });
    }
    this.remove = function(id, success, error) {
        connect(function(err, dbc) {
            if (!err) {
                dbc.remove({ _id: new ObjectId(id) }, function(err, data) {
                    if (!err) {
                        if (success) success(data);
                    } else {
                        if (error) error(err);
                    }
                });
            } else {
                if (error) error(err);
            }
        });
    }
    this.id = function(id) {
        return new ObjectId(id);
    }
}