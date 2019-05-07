var Game = require('../models/game');

exports.index = function(req, res) {
    res.send('NOT IMPLEMENTED: Index');
};

exports.game_create = function(req, res) {
    res.send('NOT IMPLEMENTED: Game create');
};

exports.game_update = function(req, res) {
    res.send('NOT IMPLEMENTED: Game update');
};

exports.game_list = function(req, res) {
    res.send('NOT IMPLEMENTED: Game list');
};

exports.game_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: Game detail: ' + req.params.id);
};

exports.game_delete= function(req, res) {
    res.send('NOT IMPLEMENTED: Game delete');
};