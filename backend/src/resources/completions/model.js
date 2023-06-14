const mongoose = require("mongoose"),
  { Types } = mongoose;

const courseCompletionSchema = new mongoose.Schema({
  completedBy: {
    type: Types.ObjectId,
    required: true,
    ref: "users",
  },
  courses: [{ type: Types.ObjectId, ref: "Courses" }],

  completionDate: {
    type: Date,
    default: Date.now(),
  },
});
const sectionCompletionSchema = new mongoose.Schema({
  completedBy: {
    type: Types.ObjectId,
    required: true,
    ref: "users",
  },
  courseId: {
    type: Types.ObjectId,
    required: true,
    ref: "Courses",
  },
  sections: [{ type: Types.ObjectId, ref: "Sections" }],

  completionDate: {
    type: Date,
    default: Date.now(),
  },
});
const lessonCompletionSchema = new mongoose.Schema({
  completedBy: {
    type: Types.ObjectId,
    required: true,
    ref: "users",
  },
  sectionId: {
    type: Types.ObjectId,
    required: true,
    ref: "Sections",
  },
  lessons: [{ type: Types.ObjectId, ref: "Lessons" }],
  completionDate: {
    type: Date,
    default: Date.now(),
  },
});

const CourseCompletionModel = mongoose.model(
    "CourseCompletions",
    courseCompletionSchema
  ),
  SectionCompletionModel = mongoose.model(
    "SectionCompletions",
    sectionCompletionSchema
  ),
  LessonCompletionModel = mongoose.model(
    "LessonCompletions",
    lessonCompletionSchema
  );

module.exports = {
  CourseCompletionModel,
  SectionCompletionModel,
  LessonCompletionModel,
};
