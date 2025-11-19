
const baseUrl = 'http://localhost:3000/todos';

export async function getTodos() {
    const res = await fetch(baseUrl);
    const data = await res.json();
    return data;
} 

export async function addTodo(label) {
    const newTodo = {text: label, done: false};
    const res = await fetch(baseUrl, {
        method: 'POST',
        body: JSON.stringify(newTodo)
    });

    const created = await res.json();
    return created;
  }