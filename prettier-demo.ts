// Этот файл демонстрирует работу Prettier в TypeScript

// Пример 1: Исходная функция с добавлением типов и плохим форматированием
function poorlyFormattedFunction(arg1: number, arg2: number): number {
console.log('Это очень длинная строка, которая определенно превышает установленный лимит в 80 символов, чтобы показать, как Prettier переносит строки кода для лучшей читаемости и соблюдения правил проекта')
  const obj = {key1:'value1', key2: "value2" ,key3: `template literal`} // Неправильные кавычки, нет пробелов в скобках, нет висячей запятой, смешанные кавычки

    const arr = [1, 2, 3,4,5,6,7,8,9,10,11,12,13,14,15 ] // Лишний пробел перед точкой с запятой, нет висячей запятой, длинный массив

 return arg1+arg2;
}

const result: number = poorlyFormattedFunction( 5,10 )

console.log('Результат:', result);

// Пример 2: Object shorthand
const firstName = "John";
const lastName = 'Doe';
const age = 30;

// Плохое форматирование: разные кавычки, нет shorthand
const person1 = { firstName: firstName, lastName: lastName, age: age };

// Плохое форматирование: частично shorthand, лишние пробелы
const person2 = { firstName,   lastName: lastName, age };

const person3 = { firstName,   lastName: lastName, age:30 };

console.log(person1, person2, person3);

// Пример 3: Arrow функции
const add = (a:number, b:number): number => { return a + b }; // Нет пробелов вокруг =>, точка с запятой
const square = x => x*x; // Нет скобок вокруг аргумента

console.log(add(2, 3), square(4));

// Пример 4: Тернарный оператор
const checkValue = (val: number) => val > 10 ? "Больше 10" : 'Меньше или равно 10'; // Смешанные кавычки, нет переноса строки

console.log(checkValue(15));
console.log(checkValue(5));

// Пример 5: Цепочка вызовов
const numbers = [1, 2, 3, 4, 5];
const doubledEvenSum = numbers.filter(n => n % 2 === 0).map(n => n * 2).reduce((sum, n) => sum + n, 0);
// Prettier должен разбить эту цепочку на несколько строк для читаемости

console.log('Сумма удвоенных четных чисел:', doubledEvenSum);

// Пример 6: Непоследовательные отступы
if (true) {
 console.log('Первый уровень');
  if (false) {
   console.log('Второй уровень - неправильный отступ');
  } else {
        console.log('Еще один неправильный отступ');
  }
    }

// Пример 7: Комментарии и пустые строки

const unusedVariable = 'test'; // Этот комментарий слишком близко


function anotherFunction(){
    // Здесь слишком много пустых строк


    return null;
}

anotherFunction();
