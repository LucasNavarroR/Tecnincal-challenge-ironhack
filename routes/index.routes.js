const router = require("express").Router();
const phoneList = require("../data/phones.json")
console.log(phoneList)

router.get("/phones", (req, res, next) => {
  res.json(phoneList);
});

router.get("/phones/:id", (req, res, next) => {

 const phoneId = req.params.id
console.log(phoneId)
 const phoneDetails =  phoneList.find( phone => phone.id === phoneId)
 console.log(phoneDetails)



  res.json(phoneDetails);
});

module.exports = router;
