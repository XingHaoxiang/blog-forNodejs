var User = require('../lib/mongo').User;

module.exports = {
  // 注册一个用户
  create: function create(user) {
    return User.create(user).exec();
  },

  // 通过用户名获取登录用户
  getUserByName: function getUserByName(name) {
  	return User
  			.findOne({ name: name })
  			.addCreatedAt()
  			.exec();
  }
};