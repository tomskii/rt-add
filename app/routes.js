var express = require('express')
var router = express.Router()

// Route index page
router.get('/', function (req, res) {
  res.render('index')
})

// add your routes here



// ------------ start of kids v1 logic ----------------
router.get('/eligible', function (req, res) {
  // get the answer from the query string (eg. ?answer=a)
  var answer = req.query.answer

if (answer === 'kidstourism') {
  res.redirect('/kids/kidsrestrictions')

 } else if (answer === 'kidstransit') {
   res.redirect('/kids/kidsrestrictions')

 } else if (answer === 'kidsmedical') {
   res.redirect('/kids/kidsrestrictions')

 } else if (answer === 'kidsstudy') {
   res.redirect('/kids/study-visa')

 } else if (answer === 'kidsresident') {
   res.redirect('/kids/resident-visa')

 } else if (answer === 'kidsdiplomatic') {
   res.redirect('/kids/kidsrestrictions')

 } else {
     res.render('kids/kidsrestrictions')
   }
})

// kids study visa logic
router.get('/kids/study-gotvisa', function (req, res) {
  var kidsstudyvisa = req.query.kidsstudyvisa

if (kidsstudyvisa === 'no') {
   res.redirect('/kids/ineligible')
 } else {
   res.render('kids/kidsrestrictions')
   }
})

// kids resident visa laogic
router.get('/kids/resident-gotvisa', function (req, res) {
  var kidsresidentvisa = req.query.kidsresidentvisa

if (kidsresidentvisa === 'no') {
   res.redirect('/kids/resident-gotvisa-no')
 } else {
   res.render('kids/resident-gotvisa-yes')
   }
})

router.get('/kids/kids-restrictions-page', function (req, res) {
  // get the answer from the query string (eg. ?answer=a)
  var convictions = req.query.convictions
  var regulations = req.query.regulations
  var restrictions = req.query.restrictions

if (convictions === 'yes' || regulations === 'yes' || restrictions === 'yes') {
   res.redirect('ineligible')

 } else {
     res.render('kids/passport-number')
   }
})

// ------------ end of kids v1 logic ----------------


// ------------ start of kids v2 logic ----------------

router.get('/kids2reason', function (req, res) {
  // get the answer from the query string (eg. ?answer=a)
  var answer = req.query.answer

if (answer === 'kids2tourism') {
  res.redirect('/kids2/kidsconvictions')

} else if (answer === 'kids2transit') {
   res.redirect('/kids2/kidsconvictions')

 } else if (answer === 'kids2medical') {
   res.redirect('/kids2/kidsconvictions')

 } else if (answer === 'kids2study') {
   res.redirect('/kids2/study-visa')

 } else if (answer === 'kids2resident') {
   res.redirect('/kids2/resident-visa')

 } else if (answer === 'kids2diplomatic') {
   res.redirect('/kids2/kidsconvictions')

 } else {
     res.render('kids2/kidsconvictions')
   }
})

// kids2 convictions laogic
router.get('/kids2/kids-convictions-page', function (req, res) {
  var convictions = req.query.convictions

if (convictions === 'no') {
   res.redirect('/kids2/kidsrestrictions')
 } else {
   res.render('kids2/ineligible')
   }
})

// kids2 restrictions laogic
router.get('/kids2/kids-restrictions-page', function (req, res) {
  var restrictions = req.query.restrictions

if (restrictions === 'no') {
   res.redirect('/kids2/kidsregulations')
 } else {
   res.render('kids2/ineligible')
   }
})
module.exports = router

// kids2 restrictions laogic
router.get('/kids2/kids-regulations-page', function (req, res) {
  var regulations = req.query.regulations

if (regulations === 'no') {
   res.redirect('/kids2/passport-number')
 } else {
   res.render('kids2/ineligible')
   }
})

// kids2 resident visa laogic
router.get('/kids2/resident-gotvisa', function (req, res) {
  var kids2residentvisa = req.query.kids2residentvisa

if (kids2residentvisa === 'no') {
   res.redirect('/kids2/resident-gotvisa-no')
 } else {
   res.render('kids2/resident-gotvisa-yes')
   }
})

// kids study visa logic
router.get('/kids2/study-gotvisa', function (req, res) {
  var kids2studyvisa = req.query.kids2studyvisa

if (kids2studyvisa === 'no') {
   res.redirect('/kids2/ineligible')
 } else {
   res.render('kids2/kidsconvictions')
   }
})

// kids resident got visa no page /kids2/resident-gotvisa-no

router.get('/kids2residentnoreason', function (req, res) {
  // get the answer from the query string (eg. ?answer=a)
  var residentgotvisano = req.query.residentgotvisano

if (residentgotvisano === 'noneofthese') {
  res.redirect('/kids2/ineligible')
 } else {
     res.render('kids2/kidsconvictions')
   }
})

module.exports = router
