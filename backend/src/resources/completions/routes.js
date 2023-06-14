const router = require("express").Router(),
  {
    lessonCompletion,
    courseCompletion,
    sectionCompletion,
    completeCourse,
    completeSection,
    completeLesson,
  } = require("./controller");

router.get("/", courseCompletion);
router.get("/:courseId/", sectionCompletion);
router.get("/:courseId/:sectionId/", lessonCompletion);

router.put("/:courseId", completeCourse);
router.put("/:courseId/:sectionId", completeSection);
router.put("/:courseId/:sectionId/:lessonId", completeLesson);
module.exports = router;
