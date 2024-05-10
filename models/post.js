const mongoose = require('mongoose');

//建立schema
const postSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: [true, 'Content 未填寫'],
    },
    image: {
      type: String,
      default: '',
    },
    createdAt: {
      type: Date,
      default: Date.now, //確保每筆資料時間不同
      select: false,
    },
    // name: {
    //     type: String,
    //     required: [true, '貼文姓名未填寫']
    // },
    likes: {
      type: mongoose.Schema.ObjectId,
      ref: 'user',
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: 'user',
      required: [true, 'user ID 未填寫'],
    },
  },
  {
    versionKey: false,
  }
);
// 建立model
const Post = mongoose.model('Post', postSchema);

module.exports = Post;
