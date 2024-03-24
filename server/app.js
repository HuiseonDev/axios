const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors());


app.use(express.json());

app.use(express.urlencoded({ extended: false }));

let id = 2;


const todoList = [{
  id: 1,
  text: '할일1',
  done: false,
  date: new Date(),
}]


app.get('/api/todo', (req, res) => {
  console.log("re", todoList);
  res.json(todoList);
})



app.post('/api/todo', (req, res) => {
  const { text, done, date } = req.body;
  todoList.push({
    id: id++,
    text,
    done,
    date,
  })
  return res.send('success')
})




app.listen(4000, () => {
  console.log("Server is running on port 4000")
})
