var express = require ('express');
var router = express.Router();

const cleAPI = '8fd797f1';
const urlAPI ='http://www.omdbapi.com/';

router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

module.exports = router;

let users = [{ 
    user: "Arthur",
    id:"0"
    }];

router.get('/',(req, res) => {
    res.status(200).json({user});
});

router.get('/:id',(req, res)=> {
    const {id}= req.params;
    const user =_.find(users, ["id",id]);
    res.status(200).json({
        message: 'User found!',
    });
});



