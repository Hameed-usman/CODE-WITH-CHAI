// FIRSTLY AND MAIN IMPORTANT TOPIC OF JAVASCRIPT

// *************************DATATYPE(str,number,boolean) CONVERSION********************************** 

// let score = 33;
// console.log(typeof score); //OUTPUT : Number


// let newScore = "33";
// console.log(typeof newScore);  //OUTPUT : String

// // Sometime in BACKEND side we need only number even that is written in string so we have method 

// let modernScore = Number (newScore);
// console.log(typeof modernScore); //OUT[PUT NUMBER

// // If we write NUmber so they compulsory give us numbe ras typeOF 

// NOW FOR STRING EXAMPLE CONVERSION 

// let name = "11Alpha";
// console.log(typeof name );  //OUTPUT : STRING
 
// let updateName = Number (name);
// console.log(typeof updateName); //OUTPUT : NUMBER



// ****************************OPERATION IN JAVASCRIPT**********************************

// DATE & TIME TOPIC 

                 // NOW FROM HERE BASIC 02 WILL START IN THE SERIES OF JAVASCRIPT 

// ++++++++++++++++++++++++++++// 1ST TOPIC IS "ARRAY IN JAVASCRIPT"--------------------------------------

// METHODS IN ARRAY 

// let arr = [1,2,3,4,5];
// arr.push(6);
// console.log (arr); //output : [1,2,3,4,5,6];

// let myArr = [10,11,12,13,14,15];
// myArr.pop();
// console.log(myArr); //output : [10,11,12,13,14]


// COMBINING OR JOINING ARRAY OR CONCATINATING Array 
//   There are multiple ways to join Array some rare methdods Are: 

// let places = ["Peshawar","Abbotabad","Kashmir"];
// let province = ["KPK","Punjab","Sindh"];

// places.push(province);
// console.log(places);    //OUTPUT : [ 'Peshawar', 'Abbotabad', 'Kashmir', [ 'KPK', 'Punjab', 'Sindh' ] ]
    // The above output is look little informal the formal way is:

// let places = ["Peshawar","Abbotabad","Kashmir"];
// let province = ["KPK","Punjab","Sindh"];
// let country = ["Pakistan","India","CHina"];
// let combine = places.concat(province,country);
// console.log(combine);  //OUTPUT : [ 'Peshawar', 'Abbotabad', 'Kashmir', 'KPK', 'Punjab', 'Sindh' ]



// $$$$$$$$$$$$$$$$$"Converting String,Number etc..! Into ARRAY"$444$$$$$$

// let score = 200;
// let name = "Usman";
// let age = 15;

// console.log(Array.of(score,name,age));  //OUPTUT : [ 200, 'Usman', 15 ]


// --------------------
                    //   2ND MOST IMPORTANT TOPIC----------------------------

// =================
            // ============= "OBJECTS IN JS" ======
                                       //  ====================

// SYNTAX OF OBJECT:
//  const firstobj = {

//  }
       
// =>There are two ways to decalre objetec;
// -> Literal
// ->Singleton

// THIS IS "SINGLETON METHOD" OF DECLARING OBJECT:

// DECLARATION OF OBJECT :

const firstObj = {
    name : "Usman Hameed",
    age : 19,
    email : "xyz022@gamil.com",
    gender : "Male",
    Country : "Pakistan",
}
// console.log(firstObj);  
// OUTPUT : {
// name: 'Usman Hameed',
//   age: 19,
//   email: 'xyz022@gamil.com',
//   gender: 'Male',
//   Country: 'Pakistan'
// }
// console.log(firstObj ["email"]);
// OUTPUT :
// xyz022@gamil.com
// firstObj.age = 20,
// console.log(firstObj); 
// OUTPUT :
// {
//     name: 'Usman Hameed',
//      age: 20,
//      email: 'xyz022@gamil.com',
//      gender: 'Male',
//      Country: 'Pakistan'
//   }


// CONCATINATING OF OBEJCTS 

// const stObj = {
//     1 : "Usman",
//     2 : "abc@gmail.com",
// }

// const ndObj = {
//     3 : "HAmees",
//     4 : "example@gamil.com",
// }

// // const obj3 = Object.assign({}, stObj, ndObj);

// const obj3 = {...stObj,...ndObj}


// console.log(obj3)


// +++++===========   "MAP" ,,, "fILTER"  ,,  "CHAIN" ,  REDUCE ==========+++++++++++++ 

// FILTER :

let books = [
    {
        title : `Book One` , Genre : `Fiction`, publish : `1998`, Edition : `2010`
    },
    
    {
        title : `Book Two` , Genre : `Non-Fiction`, publish : `1999`, Edition : `2010`
    },

    {
        title : `Book Three` , Genre : `History`, publish : `1998`, Edition : `2010`
    },

    {
        title : `Book FOur` , Genre : `History`, publish : `1998`, Edition : `2010`
    },

    {
        title : `Book Five` , Genre : `Fiction`, publish : `1998`, Edition : `2010`
    },
]

// const userBooks =  books.filter( (bk) => bk.Genre === `History`)
// console.log(userBooks);

// MAP:

// let arr = [1,2,3,4,5];
// const newArr = arr.map ( (num) => num + 10)
// console.log(newArr);  //OUTPUT : [ 11, 12, 13, 14, 15 ]


// CHAIN :

// RELATE WITH ABOVE EXAMPLE OF   

// let arr = [1,2,3,4,5];
// const newArr = arr.map ( (num) => num * 10) .filter((num) =>  num >= 40)
// console.log(newArr);

// REDUCE :

// let arr = [1,2,3];

// const myTotal = arr.reduce ( (acc,currentVal) => acc + currentVal,0 )
// console.log(myTotal);

// ANOTHER EXAMPLE ON REDUCE METHOD (SHOPPING CART)

// let shoppingItems = [
//     {
//         itemName : `Jacket`,
//         price : 999,
//     },

//     {
//         itemName : `Pant`,
//         price : 1499,
//     },

//     {
//         itemName : `TrackSuit`,
//         price : 2499,
//     },

//     {
//         itemName : `UnderWear`,
//         price : 899,
//     },
// ]

//tO SUMUP ALL ITEMS PRICE
// const totalPrice = shoppingItems.reduce ((acc,items)  => acc + items.price,0 )
// console.log(totalPrice);//OUTPUT : 5896

// Map,REDUCE & FILTER There methods we use just in Array Without Array we use for each loop 

// / [[[[[[[[[  +++++++++================
                                        //   "BEIGNING OF DOM"                   ]]]]]]]]]


// document.getElementById(`heading-st`)     work on console

// MAIN TOPIC HOW TO ADD CONTENT IN DOMException;

//a) textcontent= it gives the text which is present inside the Element,div,h1 etc... 
// b)innerText  = also do same work like textContent but if does not print the value if you have added display none 
// c)innerHTML = Same as textContent BUT it gives full html in the text which you have written 
// THEN ...
// 2)Queory Selectors in JS ./
// 3)Queory Selector ALL = In this we should have to give node numbber when we want to change like
// .we should have to add [0],[1] in this selector.
// 4)getElementByClass = In class they give us in node or list an dwe want to convert that into an Array 
// by using "Array.from" method;


// -----------------------  
                //    ++++++++++++  "CREATING NEW ELEMENT IN DOM & PARENT- CHILD"++++++++++    
// . 

// THAT IS ON HTML FILE 



// NOW HOW TO CREATE A NODE 