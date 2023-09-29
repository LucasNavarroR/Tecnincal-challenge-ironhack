const router = require("express").Router();
const phoneList = require("../data/phones.json")
console.log(phoneList)

router.get("/phones", (req, res, next) => {
  res.json(phoneList);
});

router.get("/phones/:id", (req, res, next) => {

 const phoneId = req.params.id
console.log(phoneId)

function thePhone(phone) {
  return phone.id == phoneId
}
 const phoneDetails = phoneList.find(thePhone)
 console.log(phoneDetails)



  res.json(phoneDetails);
});

module.exports = router;
