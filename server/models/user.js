const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

let salt = bcrypt.genSaltSync(10);

const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    admin: {
        type: Boolean,
        default: false
    },
    contests: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "data"
    }]
});

UserSchema.pre('save', function(next) {
    this.password = bcrypt.hashSync(this.password, salt);
    next();
});

UserSchema.methods.auth = function(attempt, cb) {
    bcrypt.compare(attempt, this.password, (err, isMatch) => {
        if (err) {
            console.error(err);
            cb(false);
        } else {
            cb(isMatch)
        }
    });
}

UserSchema.methods.withoutPwd = function() {
    let user = this.toObject();
    delete user.password;
    return user;
}

module.exports = mongoose.model('user', UserSchema);