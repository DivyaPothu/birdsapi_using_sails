/**
 * BirdsController
 *
 * @description :: Server-side logic for managing birds
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	/*birds.find({visible:'true'}).exec(function (err, results){
  if (err) {
    return res.serverError(err);
  }
  sails.log('Wow, there are %d users named Finn.  Check it out:');
  return res.json(usersNamedFinn);
})*/


birds.findOne({
  visible:'true'
}).exec(function (err, finn){
  if (err) {
    return res.serverError(err);
  }
  if (!finn) {
    return res.notFound('Could not find Finn, sorry.');
  }

  sails.log('Found "%s"', finn.fullName);
  return res.json(finn);
});


};
	//Birds.find({ select: ['birds'], visible: 'true'})
	
//Birds.query('SELECT *FROM birds WHERE visible = 'true'', function (err, results) {
//	 if(err) {
  //    res.badRequest('reason');
    //}
    //res.json(results);
  // stuff
//});
	


