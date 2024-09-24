
//Question1
let car = {
    make: 'Toyota',
    model: 'model1',
    year: 2020
};
Object.freeze(car);
car.model = 'Camry'; 
console.log(car.model);


//Question2
let user = {
    name: 'Chandu',
    age: 22,
    email: 'Chandu@example.com'
};
console.log(Object.isFrozen(user));


//Question3
let product = {
    name: 'Laptop',
    category: 'Electronics',
    price: 1000
};
console.log(Object.isSealed(product));


//Question4
let laptop = {
    brand: 'HP',
    model: 'i5',
    price: 58500
};
console.log(Object.keys(laptop)); 


//Question5
let house = {
    location: 'New York',
    size: '2000 sq ft',
    price: 500000
};
console.log(Object.values(house));


//Question6
let smartphone = {
    brand: 'Apple',
    model: 'iPhone 14',
    price: 999
};
Object.seal(smartphone);
smartphone.price = 899; 
console.log(Object.isSealed(smartphone)); 
console.log(smartphone.price); 



//Question7
let book = {
    title: '1984',
    author: 'George Orwell',
    publishedYear: 1949
};
Object.freeze(book);
book.publishedYear = 2021; 
console.log(Object.isFrozen(book));
console.log(book.publishedYear);



//Question8
let person = {
    firstName: 'Chandana',
    lastName: 'Utla',
    age: 25
};
console.log(Object.keys(person)); 
console.log(Object.values(person));



//Question9
let course = {
    title: 'JavaScript Basics',
    instructor: 'Smith',
    duration: '3 hours'
};
console.log(Object.entries(course)); 
delete course.duration;
console.log(course);



//Question10
let employee = {
    name: 'Chandu',
    position: 'Developer',
    salary: 60000
};
Object.seal(employee);
employee.position = 'Senior Developer'; 
employee.department = 'IT';
console.log(Object.keys(employee)); 
console.log(employee.department);