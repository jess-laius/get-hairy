const express = require('express');
const expressJwt = require('express-jwt');

const DataModel = require('../models/data');
const config = require('../config');

const dataRoute = express.Router();

const authorize = expressJwt({ secret: config.secret });

dataRoute.use(authorize);

dataRoute.route('/')
    .get((req, res) => {
        DataModel.find((err, datas) => {
            if (err) {
                res.status(500).send(err);
            } else {
                res.status(200).send(datas);
            }
        });
    })
    .post((req, res) => {
        let newData = new DataModel(req.body);
        
        newData.save((err, data) => {
            if (err) {
                res.status(500).send(err);
            } else {
                res.status(201).send(data);
            }
        });
    });
dataRoute.route('/:id')
    .get((req, res) => {
        DataModel.findById(req.params.id, (err, data) => {
            if (err) {
                res.status(500).send(err);
            } else {
                if (data === null) {
                    res.status(404).send({
                        success: false,
                        err: "Result not found!"
                    });
                } else {
                    res.status(200).send(data);
                }
            }
        });
    })
    .delete((req, res) => {
        DataModel.findByIdAndRemove(req.params.id, (err, data) => {
            if (err) {
                res.status(500).send(err);
            } else {
                if (data === null) {
                    res.status(404).send({
                        success: true,
                        err: "Result not found!"
                    });
                } else {
                    res.stauts(200).send({
                        success: true,
                        id: data._id
                    });
                }
            }
        })
    })
    .put((req, res) => {
        DataModel.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, data) => {
            if (err) {
                res.status(500).send(err);
            } else {
                if (data === null) {
                    res.status(404).send({
                        success: false,
                        err: "Result not found!"
                    });
                } else {
                    res.status(200).send(data);
                }
            }
        });
    });

module.exports = dataRoute;