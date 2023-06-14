const mongoose = require("mongoose"),
    { Schema } = mongoose;

const LessonSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  videoLink: {
    type: String,
    required: true,
  },
  blogLink: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
    },
    section: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Section"
    }
})
const SectionSchema = new Schema({
  title: {
    type: String,
    required: true,
    },
    course: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Course"
  },
  lessons: [{
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Lesson"
  }]
})
const CourseSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  sections: [{
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Section"
  }]
})

const CourseModel = mongoose.model("Course", CourseSchema)
const SectionModel = mongoose.model("Section", SectionSchema)
const LessonModel = mongoose.model("Lesson", LessonSchema)

module.exports = {
    CourseModel,
    SectionModel,
    LessonModel
}

