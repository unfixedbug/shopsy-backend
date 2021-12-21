const {verify}  = require("crypto");
const router = require("express").Router();

router.put("./:id",verifyTokenAndAuth,(req,res)=>{
    // if(req)
})

module.exports = router;
