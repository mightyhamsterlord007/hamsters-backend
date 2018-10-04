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
    },
    updateVoteCount: (id) => {
        return new Promise((resolve, reject) => {          
            Hamster.findById(id)
                .then(foundHamster => {

                    let currentHamsterVote = foundHamster.votes;

                    let hamsterVoteObject = {}

                    hamsterVoteObject.votes = currentHamsterVote += 1;
  
                    Hamster.findByIdAndUpdate(id, hamsterVoteObject, {new: true})
                    .then(hamster => {
                        resolve(hamster)
                    })
                    .catch(err => {
                        console.log(err)
                        reject(id)
                    })

                })
                .catch(err => {
                    reject(err);
                })

        })

    }
}