/**
 * Created by qxue on 3/5/15.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    name: String
    //age: Number,
    //sex: String,
    //birth: Date,
    //meta:{
    //    createAt:{
    //        type:Date,
    //        Default:Date.now()
    //    },
    //    updateAt:{
    //        type:Date,
    //        Default:Date.now()
    //    }
    //}
});

//UserSchema.pre('save',function(next){
//    if(this.isNew){
//        this.meta.createAt = this.meta.updateAt = Date.now();
//    }else{
//        this.meta.updateAt = Date.now();
//    }
//    next();
//});

UserSchema.statics = {
    findAll:function(cb){
        return this
            .find({})
            //.sort('meta.updateAt')
            .exec(cb);
    },
    findById:function(id,cb){
        return this
            .findOne({_id:id})
            .exec(cb);
    }
};

module.exports = mongoose.model('User', UserSchema);



