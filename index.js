const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000;

app.use(cors());

const categories = require('./data/course_category.json')
const courses = require('./data/courses.json')

app.get('/', (req, res) => {
    res.send('Courses API running')
});

app.get('/course-category', (req, res) => {
    res.send(categories)
})
app.get('/course-category/:id', (req, res) => {
    const id = req.params.id;
    // res.send(courses)
    const category_course = courses.find(n => n.category_id == id)
    res.send(category_course)
})

app.get('/courses', (req, res) => {
    res.send(courses);
})
app.get('/courses/:id', (req, res) => {
    const id = req.params.id;
    const selectCourses = courses.find(n => n._id === id)
    res.send(selectCourses)
})

app.listen(port, () => {
    console.log('Brain sailor server running on port', port)
})