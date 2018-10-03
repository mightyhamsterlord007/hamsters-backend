var Hamster = require('../models/Hamster');
var methods = require('../utils/methods');

module.exports = {

    find: (params) => {
        return new Promise( (resolve, reject) => {
            Hamster.find(params)
                .then(hamsters => {
                    resolve(hamsters);
                })
                .catch(err => {
                    reject(err);
                })
        });  
    },
    create: (params) => {

        params.votes = methods.generateVoteCount();

        return new Promise( (resolve, reject) => {
            Hamster.create(params)
                .then(hamster => {
                    resolve(hamster);
                })
                .catch(err => {
                    reject(err);
                });
        });
    }
}