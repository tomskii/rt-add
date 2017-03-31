var express = require('express')
var router = express.Router()

// Route index page
router.get('/', function (req, res) {
  res.render('index')
})

// add your routes here

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
     res.render('restrictions')
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

module.exports = router
