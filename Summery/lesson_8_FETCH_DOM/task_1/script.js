// 1. Отправить fetch get-запрос по ссылке https://dummyjson.com/todos 
// и полученные по запросу данные вывести в консоль
const tasksContainer = document.querySelector('.tasks_container');
const tasksForm = document.querySelector('.task_form');

let todos_data = [];

fetch('https://dummyjson.com/todos')
    .then(res => res.json())
    .then(json => {
        getData(json.todos);
        renderTasks(todos_data)
    })

const getData = arr => todos_data = arr;

// 2. Написать функцию renderTasks(), которая принимает в качестве 
// аргумента массив с объектами и для каждого объекта создает карточку 
// задачи (todo). Карточка должна состоять из одного параграфа с 
// описанием todo

const renderTasks = arr => {
    tasksContainer.innerText = '';
    arr.forEach(el => {
        const taskCard = document.createElement('div');
        const taskElem = document.createElement('p');
        const statysElem = document.createElement('p');
        statysElem.innerText = el.completed ? 'Status: task done' : 'Status: not done';

        const del_btn = document.createElement('button');
        del_btn.classList.add('del_btn')
        del_btn.innerText = 'X';

        taskElem.innerText = `Task: ${el.todo}`;
        taskCard.classList.add('task_card');

        taskCard.style.backgroundColor = el.completed ? 'lightgreen' : 'lightgray';

        // taskCard.addEventListener('click', () => {
        //     const new_arr = arr.map(task => {
        //         if(task.id === el.id) {
        //             task.completed = task.completed
        //         }
        //         return task
        //     })
        //     renderTasks(new_arr)
        // })

        taskCard.addEventListener('click', () => {
            el.completed = !el.completed;
            renderTasks(arr)
          });

        del_btn.addEventListener('click', (e) => {
            e.stopPropagation()
            let new_arr = arr.filter(task => task.id !== el.id);
            renderTasks(new_arr)
        })
    
        taskCard.append(taskElem, statysElem, del_btn);
        tasksContainer.append(taskCard);
      });
    }

    const taskInput = document.createElement('input')
    const taskBtn = document.createElement('button')
    taskBtn.innerText = 'Submit new task'

    taskInput.type = 'text'
    taskInput.placeholder = 'title'
    taskInput.name = 'tittle'

    tasksForm.append(taskInput, taskBtn)

    tasksForm.addEventListener('submit', (e) => {
        e.preventDefault()
        const {title} = e.target

        const new_task = {
            id: Date.now(),
            todo: title.value,
            completed: false
        }

        todos_data.push(new_task);
        renderTasks(todos_data);
        e.target.reset();
    })

// 3. Добавить созданные карточки (30 штук) в div.tasks_container

// 4. Стилизовать карточки (border, padding, border-radius). 
// 5. Стилизовать контейнер (грид)
// 6. Если задача выполнена, то покрасить карточку в светло-зеленый, 
// если не выполнена, то в светло-серый

// 7. К каждой карточке добавить параграф со статусом.  
// Если задача выполнена, то написать "Status: task done". Если не выполнена, то - "Status: not done"
// 8. При клике на карточку менять ее статус на противоположный
// 9. Каждой карточке добавить крестик в правый верхний угол, при клике на который карточка удаляется.
// 10. Добавить форму (1 инпут + кнопка), которая собирает 
// данные о todo. При сабмита формы, формируется объект с 
// ключами todo и completed (по умолчанию false) и выводится в консоль

