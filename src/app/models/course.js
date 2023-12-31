const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const slug = require("mongoose-slug-updater");
mongoose.plugin(slug);
const Course = new Schema({
  name: { type: String, required: true },
  decs: { type: String },
  image: { type: String },
  slug: { type: String, slug: "name", unique: true },
  level: { type: String },
  videoID: { type: String, required: true },
  CreateAt: { type: Date, default: Date.now },
  updateAt: { type: Date, default: Date.now },
});
module.exports = mongoose.model("Course", Course);
