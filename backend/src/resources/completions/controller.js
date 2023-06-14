const asyncHandler = require("express-async-handler"),
  { ObjectId } = require("mongoose").Types,
  DAL = require("../../common/dal"),
  {
    LessonCompletionModel,
    CourseCompletionModel,
    SectionCompletionModel,
  } = require("./model"),
  Course = require("../courses/model"),
  ccDAL = DAL(CourseCompletionModel),
  lcDAL = DAL(LessonCompletionModel),
  scDAL = DAL(SectionCompletionModel),
  sDAL = DAL(Course.SectionModel),
  lDAL = DAL(Course.LessonModel),
  cDAL = DAL(Course.CourseModel);

const courseCompletion = asyncHandler(async (req, res) => {
  const { userId } = req.body;
  coursesCompleted = await ccDAL.getOne({ completedBy: ObjectId(userId) });
  res.status(coursesCompleted ? 200 : 400).json(coursesCompleted || {});
});

const sectionCompletion = asyncHandler(async (req, res) => {
  const { userId } = req;
  const { courseId } = req.params;

  const sectionCompletions = await scDAL.getOne({
    completedBy: ObjectId(userId),
    courseId: ObjectId(courseId),
  });

  res.json(sectionCompletion);
});

const lessonCompletion = asyncHandler(async (req, res) => {
  const { userId } = req;
  const { courseId, sectionId } = req.params;
  const lessonCompletions = await lcDAL.getOne({
    completedBy: ObjectId(userId),
    courseId: ObjectId(courseId),
    sectionId: ObjectId(sectionId),
  });
  res.json(lessonCompletions);
  res.statusCode = 400;
  throw new Error("Bad request");
});

const completeCourse = asyncHandler(async (req, res) => {
  const { userId } = req;
  const { courseId } = req.params;

  coursesCompleted = await ccDAL.getOne({ completedBy: ObjectId(userId) });
  if (coursesCompleted && courseCompleted.includes(courseId)) {
    res.statusCode = 200;
    throw new Error("User has already completed the Course.");
  }
  courseSections = new Set(await sDAL.getAll({ course: ObjectId(courseId) }));
  if (!courseSections) {
    res.statusCode = 400;
    throw new Error("Invalid course");
  }
  sections = await scDAL.getAll({
    completedBy: ObjectId(userId),
    courseId: ObjectId(courseId),
  });
  for (let section of sections) {
    if (courseSections.has(section)) {
      courseSections.delete(section);
    } else {
      break;
    }
  }
  if (courseSections.size > 0) {
    res.statusCode = 400;
    throw new Error("User has not finished sections under this course");
  }

  const updateCompletion = await ccDAL.getOne(
    {
      completedBy: ObjectId(userId),
    },
    {
      push: { courses: ObjectId(userId) },
    }
  );
  res.status(200).json({
    success: "Completed the course successfully",
  });
});

const completeSection = asyncHandler(async (req, res) => {
  let { userId } = req;
  let { courseId, sectionId } = req.params;
  (userId = ObjectId(userId)),
    (courseId = ObjectId(courseId)),
    (sectionId = ObjectId(sectionId));

  sectionsCompleted = await scDAL.getOne({ completedBy: userId, courseId });
  if (sectionsCompleted && sectionsCompleted.includes(sectionId)) {
    res.statusCode = 200;
    throw new Error("User has already completed the Course.");
  }
  sectionLessons = new Set(
    await lDAL.getAll({ course: courseId, section: sectionId })
  );
  if (!sectionLessons) {
    res.statusCode = 400;
    throw new Error("Invalid lesson");
  }
  lessons = await scDAL.getAll({
    completedBy: userId,
    sectionId,
  });
  for (let lesson of lessons) {
    if (sectionLessons.has(lesson)) {
      sectionLessons.delete(lesson);
    } else {
      break;
    }
  }
  if (sectionLessons.size > 0) {
    res.statusCode = 400;
    throw new Error("User has not finished sections under this course");
  }

  const updateCompletion = await lcDAL.updateOne(
    {
      completedBy: userId,
      sectionId,
    },
    {
      push: { lessons: lessonId },
    }
  );
  res.status(200).json({
    success: "Completed the section successfully",
  });
});

const completeLesson = asyncHandler(async (req, res) => {
  let { userId } = req;
  let { sectionId, lessonId } = req.params;
  (userId = ObjectId(userId)),
    (lessonId = ObjectId(lessonId)),
    (sectionId = ObjectId(sectionId));

  lessonsCompleted = await lcDAL.getOne({ completedBy: userId, sectionId });
  if (lessonsCompleted && lessonsCompleted.includes(lessonId)) {
    res.statusCode = 200;
    throw new Error("User has already completed the lesson.");
  }

  const updateCompletion = await lcDAL.updateOne(
    {
      completedBy: userId,
      sectionId,
    },
    {
      push: { lessons: lessonId },
    }
  );
  res.status(200).json({
    success: "Completed the lesson successfully",
  });
});

module.exports = {
  lessonCompletion,
  courseCompletion,
  sectionCompletion,
  completeCourse,
  completeSection,
  completeLesson,
};
