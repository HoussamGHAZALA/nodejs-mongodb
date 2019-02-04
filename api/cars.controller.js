const express = require('express');
const Car = require('../domain/data-base/car.model');

exports.findAllCars = (req, res, next) => {
    Car.find({}, (err, cars) => {
        if (err) return next(err);
        res.send(cars);
    });
};

exports.createCar = (req, res, next) => {
    let car = new Car(
        {
            marque: req.body.marque,
            annee: req.body.annee,
            kilometrage: req.body.kilometrage,
            prix: req.body.prix,
            devise: req.body.devise
        }
    );
    car.save(function (err) {
        if (err) {
            return next(err);
        }
        res.status(201).end()
    })
};
