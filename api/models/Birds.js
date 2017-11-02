/**
 * Birds.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
  	id : {
  		required:true,
    type : 'string'
    },
    name : {
    	required:true,
    type : 'string'		
    },
    family : {
    	required:true,
    type : 'string'		
    },
    continents : {
    	required:true,
    type : 'string'		
    },
    added : {
    	required:true,
    type : 'string'		
    },
    visible : {
    	required:true,
    type : 'string'		
    }
    /*createdAt:{
    	required:true,
    	type:'string'
    },
    updatedAt:{
    	required:true,
    	type:'string'
    }*/
  },
  //tableName: 'birds'
};
