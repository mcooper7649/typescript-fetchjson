import axios from 'axios';

var url = 'https://jsonplaceholder.typicode.com/todos/1';

interface Todo {
  id: number,
  title: string,
  completed: boolean;
}

axios.get(url).then((response) => {
  const todo = response.data as Todo;
  const ID = todo.id;
  const title = todo.title;
  const finished = todo.completed;

  console.log(`
The TODO with an ID: ${ID}
Has a title of: ${title}
Is it finished: ${finished}
`);
});
