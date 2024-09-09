
// function hello(){
//     console.log('Hello, User!');
// }
// module.exports = {
//     variable : number,
//     sayHello : hello
// };
// exports.variable=number;
// exports.sayHello=hello;

// function User(name)//функция конструктор
// {
//     this.name = name;
//     this.sayHello = () => {
//         console.log('Hello ', this.name);
//     };
// }

// var Jhon = new User('Jhon');

// Jhon.sayHello();
// console.log(Jhon.name);




///////////////////////////////////////CLASS WORK////////////////////
//var number = 10;
// function Sum(a, b) {
//     return a + b;
// }
// function Min(a, b) {
//     return a - b;
// }
// function Mult(a, b) {
//     return a * b;
// }
// function Div(a, b) {
//     return a / b;
// }
// exports.Calc = (a, b) => {
//     console.log('Sum:' + Sum(a, b));
//     console.log('Min:' + Min(a, b));
//     console.log('Mult:' + Mult(a, b));
//     console.log('Div:' + Div(a, b));
//     };




////////////////////////////////////////HOME WORK/////////////////////
//TASK1
// function Point(x,y)//функция конструктор
// {
//     this.x = x;
//     this.y = y;
//     this.sayHello = () => {
//         console.log('x= ', this.x);
//         console.log('y= ', this.y);
//     };
// }
// var point1 = new Point(2, 2);
// var point2 = new Point(2, 5);
// function ParallelToOrdinate(point1,point2)
// {
//     if(point1.y===point2.y)
//     {
//         console.log('Parallel to the ordinate X');
//     }
//     else if (point1.x===point2.x)
//     {
//         console.log('Parallel to the ordinate Y');
//     }
//     else 
//     {
//         console.log('No Parallel to the ordinate X or Y'); 
//     }
// }
// exports.point1=point1;
// exports.point2=point2;
// exports.ParallelToOrdinate = ParallelToOrdinate;

//TASK2
// function User(name,surname,age,gender,passportID)//функция конструктор
// {
//     this.name = name;
//     this.surname = surname;
//     this.age = age;
//     this.gender=gender;
//     this.passportID=passportID;
//     this.printData = () => {
//         console.log('Name: ', this.name);
//         console.log('Surname: ', this.surname);
//         console.log('Age: ', this.age);
//         console.log('Gender: ', this.gender);
//         console.log('PassportID: ', this.passportID);
//     };
// }
// var Jhon = new User('Jhon','Zaiats',19,'male','GB10122004');
// exports.Jhon=Jhon;




// //TASK3
// function Fraction(numerator, denominator) //функция конструктор
// {
//     this.numerator = numerator;
//     this.denominator = denominator;
//     this.sayHello = () => {
//         console.log(this.numerator);
//         console.log('-');
//         console.log(this.denominator);
//     };
// //algorithm euclid
// //большее число делим на меньшее.
// //если делится без остатка, то меньшее число и есть НОД (следует выйти из цикла).
// //если есть остаток, то большее число заменяем на остаток от деления.
//     this.NOD = (a, b) => {
//         while (a != 0 && b != 0) {
//             if (a > b) {//если а больше б, то а присваиваем а/б
//                 a = a % b;//10=10%5=0
//             } else {//наоборот
//                 b = b % a;
//             }
//         }
//         return a + b;//0+5=5-наибольший общий делитель
//     };

//     this.cut = () => {//  3/10
//         var nod = this.NOD(this.numerator, this.denominator);//1
//         this.numerator /= nod;//  3/1=3
//         this.denominator /= nod;// 10/1=10
//     };

//     this.commonDenominator = (denom1, denom2) => {
//         var nod = this.NOD(denom1, denom2);//5
//         return (denom1 * denom2) / nod;//10*5:5=50:5=10
//     };
    



//     this.add = (fraction1, fraction2) => {
//         var commonDenom = this.commonDenominator(fraction1.denominator, fraction2.denominator);//10
        
//         var newNumerator1 = fraction1.numerator * (commonDenom / fraction1.denominator);//1*(10/10)=1*1=1
//         var newNumerator2 = fraction2.numerator * (commonDenom / fraction2.denominator);//1*(10/5)=1*2=2

//         var sumNumerator = newNumerator1 + newNumerator2;//1+2=3

//         var resFraction = new Fraction(sumNumerator, commonDenom);//  3/10
//         resFraction.cut();//  3/10

//         return resFraction;
//     };


    
//     this.subtract = (fraction1, fraction2) => {
//         var commonDenom = this.commonDenominator(fraction1.denominator, fraction2.denominator);//10
        
//         var newNumerator1 = fraction1.numerator * (commonDenom / fraction1.denominator);//1*(10/10)=1*1=1
//         var newNumerator2 = fraction2.numerator * (commonDenom / fraction2.denominator);//1*(10/5)=1*2=2

//         var sumNumerator = newNumerator1 - newNumerator2;//1-2=-1

//         var resFraction = new Fraction(sumNumerator, commonDenom);//  -1/10
//         resFraction.cut();//  -1/10

//         return resFraction;
//     };



//     this.multiplication = (fraction1, fraction2) => {
       
//         var newNumerator = fraction1.numerator * fraction2.numerator;
//         var newDenominator = fraction1.denominator * fraction2.denominator;

//         var resFraction = new Fraction(newNumerator, newDenominator);//   1/50
//         resFraction.cut();// 1/50
//         return resFraction;
//     };

    
//     this.division = (fraction1, fraction2) => {
       
//         var newNumerator = fraction1.numerator / fraction2.numerator;
//         var newDenominator = fraction1.denominator / fraction2.denominator;

//         var resFraction = new Fraction(newNumerator, newDenominator);//   1/2
//         resFraction.cut();// 1/50
//         return resFraction;
//     };
// }


// var fraction1 = new Fraction(1, 10);
// var fraction2 = new Fraction(1, 5);

// exports.fraction1=fraction1;
// exports.fraction2=fraction2;
// exports.Calc = () => {
//     var add = fraction1.add(fraction1, fraction2);
//     var sub = fraction1.subtract(fraction1, fraction2);
//     var div = fraction1.division(fraction1, fraction2);
//     var mult = fraction1.multiplication(fraction1, fraction2);

//     console.log("Add:");
//     add.sayHello();
//     console.log("Subtract:");
//     sub.sayHello();
//     console.log("Multiplication:");
//     mult.sayHello();
//     console.log("Division:");
//     div.sayHello();
// };



//TASK4


// function Student(name,surname,age,groupNumber,studentID)//функция конструктор
// {
//     this.name = name;
//     this.surname = surname;
//     this.age = age;
//     this.groupNumber=groupNumber;
//     this.studentID = studentID;
//     this.printData = () => {
//         console.log('Name: ', this.name);
//         console.log('Surname: ', this.surname);
//         console.log('Age: ', this.age);
//         console.log('Group number: ', this.groupNumber);
//     };
// }



// function Group() {
//     this.students = [];

//     this.addStudent = function(student) {
//         this.students.push(student);
//     };

//     this.removeStudent = function(studentID) {
//         for (var i = 0; i < this.students.length; i++) {
//             if (this.students[i].studentID === studentID) {
//                 this.students.splice(i, 1);
//             }
//         }
//     };

//     this.editDataOfStudent = function(studentID, newName, newSurname, newGroupNumber) {
//         for (var i = 0; i < this.students.length; i++) {
//             var student = this.students[i];
//             if (student.studentID === studentID) {
//                 student.name = newName;
//                 student.surname = newSurname;
//                 student.groupNumber = newGroupNumber;
//             }
//         }
//     };
    

//     this.printStudents = function() {
//         for (var i = 0; i < this.students.length; i++) {
//             var student = this.students[i];
//             student.printData()
//         }
//     };
// }

// var Mary = new Student('Mary','Zaiats',19,'P-222',1);
// var Victor = new Student('Victor','Pronchatov',19,'P-222',2);
// var Group= new Group();
// exports.Mary=Mary;
// exports.Victor=Victor;
// exports.Group = Group;