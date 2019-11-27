var express = require ('express');
var router = express.Router();

const _ = require('lodash');
const axios = require('axios').default;

const cleAPI = '8fd797f1';
const urlAPI ='http://www.omdbapi.com/';


let movies = [{ 
    user: "Arthur",
    id:"0"
    }];

/* GET movies listing */
router.get('/',(req, res) => {
    res.status(200).json({movies});
});
/* GET one user */
router.get('/:id',(req, res)=> {
    const {id}= req.params;
    const movie =_.find(users, ["id",id]);
    res.status(200).json({
        message: 'Movie found!',
        title
    });
});

/* PUT new movie. */
router.put('/', (req, res) => {
    // Get the data from request from request
    const { movie } = req.body;
    // Create new unique id
    const id = _.uniqueId();

    axios({
        method: 'get',
        url:'http://www.omdbapi.com/t=${name}&cleAPI=8fd797f1'
        responseType: 'json'
    })

    .then(function (response){
        const data = response.data;
        tab_movies.push({data, id});

        res.status(200).json({
            message: 'Movie added ${id}',
            movie: {data, id}
        });
    });



  /* DELETE user. */
  router.delete('/:id', (req, res) => {
    // Get the :id of the user we want to delete from the params of the request
    const { id } = req.params;
  
    // Remove from "DB"
    _.remove(movies, ["id", id]);
  
    // Return message
    res.json({
      message: `Movie removed ${id}`
    });
  });
  
  /* UPDATE user. */
  router.post('/:id', (req, res) => {
    // Get the :id of the user we want to update from the params of the request
    const { id } = req.params;
    // Get the new data of the user we want to update from the body of the request
    const { title } = req.body;
    // Find in DB
    const userToUpdate = _.find(movies, ["id", id]);
    // Update data with new data (js is by address)
    titleToUpdate.title = title;
  
    // Return message
    res.json({
      message: `Movie updated ${id} with ${user}`
    });
  });
  
  module.exports = router;
  


