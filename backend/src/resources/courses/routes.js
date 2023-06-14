const route = require("express").Router();
const courseController = require("./controller");


route.get('/', courseController.getCourses);
route.post('/', courseController.createCourse);
route.get('/:courseId', courseController.getCourse);
route.put('/:courseId', courseController.updateCourse);
route.delete('/:courseId', courseController.deleteCourse);
route.get('/:courseId/sections', courseController.getSections);
route.post('/:courseId/sections', courseController.createSection);
route.get('/:courseId/sections/:sectionId', courseController.getSection);
route.put('/:courseId/sections/:sectionId', courseController.updateSection);
route.delete('/:courseId/sections/:sectionId', courseController.deleteSection);
route.get('/:courseId/sections/:sectionId/lessons', courseController.getLessons);
route.post('/:courseId/sections/:sectionId/lessons', courseController.createLesson);
route.get('/:courseId/sections/:sectionId/lessons/:lessonId', courseController.getLesson);
route.put('/:courseId/sections/:sectionId/lessons/:lessonId', courseController.updateLesson);
route.delete('/:courseId/sections/:sectionId/lessons/:lessonId', courseController.deleteLesson);


module.exports = route;
