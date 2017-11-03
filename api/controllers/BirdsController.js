/**
 * BirdsController
 *
 * @description :: Server-side logic for managing birds
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	version1:function(req,res){
    Birds.find({visible:'true'}).exec(function (err, results){
  if (err) {
    return res.serverError(err);
  }
  sails.log('getting the details of visible birds.:');
  return res.json(results);
})
  }


/*birds.findOne({
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
});*/
 /**
   * `SystemController.version()`
   */
/*  version: function (req, res) {
    return res.json({
      version: '0.1'
    });
  }*/

};
	//Birds.find({ select: ['birds'], visible: 'true'})
	
//Birds.query('SELECT *FROM birds WHERE visible = 'true'', function (err, results) {
//	 if(err) {
  //    res.badRequest('reason');
    //}
    //res.json(results);
  // stuff
//});
	


