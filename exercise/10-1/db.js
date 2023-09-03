var MongoClient = require("mongodb").MongoClient;
var ObjectId = require('mongodb').ObjectId;
module.exports = function(mongodbUri, dbName, collectionName) {
    var cache;

    function connect(callback) {
        if (!cache) {
            var client = new MongoClient(mongodbUri);
            client.connect().then(function() {
                var db = client.db(dbName);
                cache = db;
                callback(null, cache.collection(collectionName));
            }, function(err) {
                callback(err, null);
            });
        } else {
            callback(null, cache.collection(collectionName));
        }
    }
    this.insert = function(insertObject, success, error) {
        connect(function(err, dbc) {
            if (!err) {
                dbc.insertOne(insertObject).then(function(result) {
                    if (success) success(result);
                }, function(err) {
                    if (error) error(err);
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
                q.toArray().then(function(data) {
                    if (success) success(data);
                }, function(err) {
                    if (error) error(err);
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
                dbc.updateOne({ _id: new ObjectId(id) }, updateObject).then(function(data) {
                    if (success) success(data);
                }, function(err) {
                    if (error) error(err);
                });
            } else {
                if (error) error(err);
            }
        });
    }
    this.remove = function(id, success, error) {
        connect(function(err, dbc) {
            if (!err) {
                dbc.deleteOne({ _id: new ObjectId(id) }).then(function(data) {
                    if (success) success(data);
                }, function(err) {
                    if (error) error(err);
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