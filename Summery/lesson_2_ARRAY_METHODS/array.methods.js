// Objects

const users = [
    {
      id: 1,
      first_name: 'Olga',
      last_name: 'Petrova',
      age: 30,
      score: 44.52
    },
    {
      id: 2,
      first_name: 'Kirill',
      last_name: 'Shmanov',
      age: 13,
      score: 144.33
    },
    {
      id: 3,
      first_name: 'Petr',
      last_name: 'Ivanov',
      age: 54,
      score: 10.08
    },
    {
      id: 4,
      first_name: 'Irina',
      last_name: 'Sokolova',
      age: 29,
      score: 78.94
    },
    {
      id: 5,
      first_name: 'Boris',
      last_name: 'Pechkin',
      age: 24,
      score: 18.25
    }
  ]

// 1. Дан массив с польз., вывести в консоль первого и последнего пользователя в списке

// console.log(users[0]); // первый элемент
// console.log(users[users.length - 1]); // последний элемент


// 2. Вывести в консоль имена первого и последнего пользователя в списке
// console.log(users[0].first_name); 
// console.log(users[users.length-1].first_name); 


// 3. Вывести в консоль каждый элемент массива
// users.forEach(elem => console.log(elem))


// 4. Вывести в консоль для каждого пользователя сообщение в формате: Имя Фамилия: возраст
// users.map(elem => console.log(`${elem.first_name} ${elem.last_name} ${elem.age}`))


// 5. Получить из каждого объекта имя и фамилию пользователя и сформировать из этих имен новый массив
// const fullNames = users.map(elem => `${elem.first_name}, ${elem.last_name}`)
// console.log(fullNames);


// 6. Получить из массива пользователя с именем Kirill и записать его в отдельную переменную. 
// Вывести переменную в консоль
// let nameKirill = users.find(elem => elem.first_name === 'Kirill') // возвращает элемент, подошедший по условию
// let nameKirill2 = users.filter(elem => elem.first_name === 'Kirill') // возвр массив элементов
// console.log(nameKirill)
// console.log(nameKirill2)


// 8. Сформировать новый массив совершеннолетних пользователей
// let newArr2 = users.filter(elem => elem.age >= 18)
// console.log(newArr2);



// 9. Сформировать новый массив строк, куда попадет информация о совершеннолетних пользователях 
// в формате Имя Фамилия: возраст
// => ['Olga Petrova: 30', 'Petr Ivanov: 54', 'Irina Sokolova: 29', 'Boris Pechkin: 24']


const adults = users.filter(elem => elem.age >= 18).map(elem => `${elem.first_name} ${elem.last_name}: ${elem.age}`)
console.log(adults);