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

// kids2 convictions logic
router.get('/kids2/kids-convictions-page', function (req, res) {
  var convictions = req.query.convictions

if (convictions === 'no') {
   res.redirect('/kids2/kidsrestrictions')
 } else {
   res.render('kids2/ineligible')
   }
})

// kids2 restrictions logic
router.get('/kids2/kids-restrictions-page', function (req, res) {
  var restrictions = req.query.restrictions

if (restrictions === 'no') {
   res.redirect('/kids2/kidsregulations')
 } else {
   res.render('kids2/ineligible')
   }
})
module.exports = router

// kids2 restrictions logic
router.get('/kids2/kids-regulations-page', function (req, res) {
  var regulations = req.query.regulations

if (regulations === 'no') {
   res.redirect('/kids2/passport-number')
 } else {
   res.render('kids2/ineligible')
   }
})

// kids2 resident visa logic
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

// ********** end kids2 logic ************

// ------------ start of kids v3 logic ----------------

router.get('/kids3reason', function (req, res) {
  // get the answer from the query string (eg. ?answer=a)
  var answer = req.query.answer

if (answer === 'kids3tourism') {
  res.redirect('/kids3/kidsconvictions')

} else if (answer === 'kids3transit') {
   res.redirect('/kids3/kidsconvictions')

 } else if (answer === 'kids3medical') {
   res.redirect('/kids3/kidsconvictions')

 } else if (answer === 'kids3study') {
   res.redirect('/kids3/study-visa')

 } else if (answer === 'kids3resident') {
   res.redirect('/kids3/resident-visa')

 } else if (answer === 'kids3diplomatic') {
   res.redirect('/kids3/kidsconvictions')

 } else {
     res.render('kids3/kidsconvictions')
   }
})

// kids3reason convictions logic
router.get('/kids3/kids-convictions-page', function (req, res) {
  var convictions = req.query.convictions

if (convictions === 'no') {
   res.redirect('/kids3/kidsrestrictions')
 } else {
   res.render('kids3/ineligible')
   }
})

// kids3transit restrictions logic
router.get('/kids3/kids-restrictions-page', function (req, res) {
  var restrictions = req.query.restrictions

if (restrictions === 'no') {
   res.redirect('/kids3/kidsregulations')
 } else {
   res.render('kids3/ineligible')
   }
})
module.exports = router

// kids3 restrictions logic
router.get('/kids3/kids-regulations-page', function (req, res) {
  var regulations = req.query.regulations

if (regulations === 'no') {
   res.redirect('/kids3/passport-number')
 } else {
   res.render('kids3/ineligible')
   }
})

// kids3 resident visa logic
router.get('/kids3/resident-gotvisa', function (req, res) {
  var kids2residentvisa = req.query.kids2residentvisa

if (kids2residentvisa === 'no') {
   res.redirect('/kids3/resident-gotvisa-no')
 } else {
   res.render('kids3/resident-gotvisa-yes')
   }
})

// kids3 study visa logic
router.get('/kids3/study-gotvisa', function (req, res) {
  var kids2studyvisa = req.query.kids2studyvisa

if (kids2studyvisa === 'no') {
   res.redirect('/kids3/ineligible')
 } else {
   res.render('kids3/kidsconvictions')
   }
})

// kids resident got visa no page /kids3/resident-gotvisa-no

router.get('/kids3residentnoreason', function (req, res) {
  // get the answer from the query string (eg. ?answer=a)
  var residentgotvisano = req.query.residentgotvisano

if (residentgotvisano === 'noneofthese') {
  res.redirect('/kids3/ineligible')
 } else {
     res.render('kids3/kidsconvictions')
   }
})

// ********** end kids3 logic ************

// ------------ start of kids v4 logic ----------------

router.get('/kids4reason', function (req, res) {
  // get the answer from the query string (eg. ?answer=a)
  var answer = req.query.answer

  if (answer === 'kids3study') {
     res.redirect('/kids4/study-visa')

   } else if (answer === 'kids3resident') {
     res.redirect('/kids4/resident-visa-status')

   } else if (answer === 'kids3diplomatic') {
     res.redirect('/kids4/kidsconvictions')

   } else {
       res.render('kids4/kidsconvictions')
     }
  })

// travelled4times.html logic
router.get('/kids4/kidstravelled4times', function (req, res) {
  var kidstravelled4times = req.query.kidstravelled4times

if (kidstravelled4times === 'no') {
   res.redirect('/kids4/ineligible')
 } else {
   res.render('kids4/kidsconvictions')
   }
})


// kids4reason convictions logic
router.get('/kids4/kids-convictions-page', function (req, res) {
  var convictions = req.query.convictions

if (convictions === 'no') {
   res.redirect('/kids4/kidsrestrictions')
 } else {
   res.render('kids4/ineligible')
   }
})

// kids4transit restrictions logic
router.get('/kids4/kids-restrictions-page', function (req, res) {
  var restrictions = req.query.restrictions

if (restrictions === 'no') {
   res.redirect('/kids4/kidsregulations')
 } else {
   res.render('kids4/ineligible')
   }
})

// kids4 restrictions logic
router.get('/kids4/kids-regulations-page', function (req, res) {
  var regulations = req.query.regulations

if (regulations === 'no') {
   res.redirect('/kids4/passport-number')
 } else {
   res.render('kids4/ineligible')
   }
})

// ********** end kids4 logic ************

// ------------ start renewals-it3 logic ---------------

// renewals-it3/passport-changed page logic

router.get('/RenewalsPassportChanged', function (req, res) {
  var changed = req.query.changed
  if (changed === 'no') {
     res.redirect('/renewals-it3/visa-changed')
   } else {
     res.render('renewals-it3/passport-nationality')
     }
  })

// renewals-it3/visa-changed page logic

  router.get('/RenewalsVisaChanged', function (req, res) {
    var changed = req.query.changed
    if (changed === 'no') {
       res.redirect('/renewals-it3/email')
     } else {
       res.render('renewals-it3/why-are-you-coming')
       }
    })

// renewals-it3/RenewalsEligible page logic

    router.get('/RenewalsEligible', function (req, res) {
      // get the answer from the query string (eg. ?answer=a)
      var answer = req.query.answer

    if (answer === 'married') {
       res.redirect('/renewals-it3/email')
     } else if (answer === 'businesswork') {
       res.redirect('/renewals-it3/businesswork-visa')
     } else if (answer === 'study') {
       res.redirect('/renewals-it3/academicstudy-visa')
     } else if (answer === 'resident') {
       res.redirect('/renewals-it3/resident')
     } else if (answer === 'partner') {
       res.redirect('/renewals-it3/partner-visa')
     } else if (answer === 'work') {
       res.redirect('/renewals-it3/work-visa')
     } else if (answer === 'diplomat') {
       res.redirect('/renewals-it3/diplomat-visa')
     } else if (answer === 'diplomatv2') {
       res.redirect('/renewals-it3/diplomat-visa')
     } else {
         res.render('renewals-it3/email')
       }
    })


// /renewals-it3/business-visa.html page logic

    router.get('/RenewalBusinessGotvisa', function (req, res) {
  var businessvisa = req.query.businessvisa

if (businessvisa === 'no') {
   res.redirect('/renewals-it3/businesswork-novisa')
 } else {
     res.render('renewals-it3/businesswork-whichvisa')
   }
})

router.get('/RenewalBusinessWorkNovisa', function (req, res) {
  var businesswork6months = req.query.businesswork6months

if (businesswork6months === 'no') {
   res.redirect('/renewals-it3/whatwillyoubedoing')
 } else {
     res.render('renewals-it3/email')
   }
})

// /renewals-it3/academicstudy-visa.html logic

router.get('/RenewalsAcademicstudyVisapage', function (req, res) {
  var academicstudyvisapage = req.query.academicstudyvisapage

if (academicstudyvisapage === 'yes') {
   res.redirect('/renewals-it3/email')
 } else {
     res.render('renewals-it3/academicstudy-novisa')
   }
})

// /renewals-it3/academicstudy-novisa.html logic

router.get('/RenewalsAcademicstudy6months', function (req, res) {
  var academicstudy6months = req.query.academicstudy6months

if (academicstudy6months === 'no') {
   res.redirect('/renewals-it3/whatwillyoubedoing-academic')
 } else {
     res.render('renewals-it3/email')
   }
})

// /renewals-it3/partner-visa.html logic

router.get('/RenewalsPartnerGotvisa', function (req, res) {
  var partnervisa = req.query.partnervisa

if (partnervisa === 'no') {
   res.redirect('/renewals-it3/email')
 } else {
     res.render('renewals-it3/partner-page')
   }
})

router.get('/RenewalsDiplomatGotvisa', function (req, res) {
  var diplomatvisa = req.query.diplomatvisa

if (diplomatvisa === 'no') {
   res.redirect('/renewals-it3/diplomat-no-page')
 } else {
   res.render('renewals-it3/email')
   }
})


module.exports = router
