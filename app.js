// 1. Declare an empty array using JS literal notation to store
// student names in future.


// let studentName = [];
// console.log(studentName);

// 2. Declare an empty array using JS object notation to store
// student names in future

// 3. Declare and initialize a strings array.

// let empty = ["john doe"];
// console.log(empty);

// 4. Declare and initialize a numbers array.

// let numbers = [1,2,3,4,5];
// console.log(numbers);


// 5. Declare and initialize a boolean array.

// let boolean1 = [true, false];
// console.log(boolean1);

// 6. Declare and initialize a mixed array
// let mixedArray = ['John Doe', 123, true];
// console.log(mixedArray);


// 7. Declare and Initialize an array and store available 
// education qualifications in Pakistan (e.g. SSC, HSC, BCS, 
// BS, BCOM, MS, M. Phil., PhD). Show the listed 
// qualifications in your browser like:


// let availableEducation = ['SSC', 'HSC', 'BCS', 'BS','BCOM','MS','M.PHIL','PHD'];
// console.log(availableEducation);


// 8. Write a program to store 3 student names in an array.Take
// another array to store score of these three students. 
// Assume that total marks are 500 for each student, display 
// the scores & percentages of students like:


// let student1 = ['Score of michael is 320.Percentage: 64%'];
// let student2 = ["Score of john is 230. Percentage: 46%"];
// let student3 = ["score of tony is 480. Percentage: 96%"];
// console.log(student1);
// console.log(student2)
// console.log(student3)


// 9. Initialize an array with color names. Display the array
// elements in your browser.
// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.
// b. Ask the user what color he/she wants to add to the end 
// & add that color to the end of the array. Display the 
// updated array in your browser.
// c. Add two more color to the beginning of the array. 
// Display the updated array in your browser.
// d. Delete the first color in the array. Display the updated
// array in your browser.
// e. Delete the last color in the array. Display the updated
// array in your browser.
// f. Ask the user at which index he/she wants to add a color 
// & color name. Then add the color to desired 
// position/index. . Display the updated array in your 
// browser.
// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then
// Arrays | JAVASCRIPT
// Page 3 of 6
// remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser.



// let colors = ["Red", "Green", "Blue", "Yellow"];
    
    
//     function displayArray() {
//         document.getElementById("output").innerHTML = `Current colors: ${colors.join(", ")}`;
//     }
    
    
//     displayArray();

//     let colorToAddBeginning = prompt("What color do you want to add to the beginning?");
//     colors.unshift(colorToAddBeginning);
//     displayArray();

    
//     let colorToAddEnd = prompt("What color do you want to add to the end?");
//     colors.push(colorToAddEnd);
    
    
//     let indexToRemove = parseInt(prompt("At which index do you want to remove colors?"));
//     let numToRemove = parseInt(prompt("How many colors do you want to remove?"));
//     colors.splice(indexToRemove, numToRemove);
    
//     displayArray();

    
//     let color1 = prompt("Add another color to the beginning:");
//     let color2 = prompt("Add one more color to the beginning:");
//     colors.unshift(color1, color2);
//     displayArray();

    
//     colors.shift();
//     displayArray();

   
//     colors.pop();
//     displayArray();

    
//     let indexToAdd = parseInt(prompt("At which index do you want to add a color?"));
//     let colorToAddAtIndex = prompt("What color do you want to add?");
//     colors.splice(indexToAdd, 0, colorToAddAtIndex);
//     displayArray();

//     let indexToDelete = parseInt(prompt("At which index do you want to delete colors?"));
//     let numberToDelete = parseInt(prompt("How many colors do you want to delete?"));
//     colors.splice(indexToDelete, numberToDelete);
//     displayArray();


// 10. Write a program to store student scores in an array & 
// sort the array in ascending order using Array’s sort 
// method.


// let students = [320,230,480,120];
// document.write(students + "<br>");
// let studentOrder = students.sort();

// document.write(studentOrder);

// 11. Write a program to initialize an array with city names. 
// Copy 3 array elements from cities array to selectedCities 
// array.


// let cities = ["karachi", "lahore", "Islamabad", "Quetta", "Peshawar"];
// document.write(cities + "<br>");

// let citiesList = cities.slice(2, 4);
// document.write(citiesList);


// 12. Write a program to create a single string from the 
// below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method

// let arr = ["This", "is", "my", "cat"];
// document.write(arr + "<br>");
// let str = arr.join("");
// document.write(str);

// 13. Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they 
// were stored. (FIFO-First In First Out)



// let devices  = [];
// devices.unshift("keyboard");
// document.write(devices + "<br>");
// devices.push("mouse");
// document.write(devices + "<br>");
// devices.push("printer");
// document.write(devices + "<br>");
// devices.push("monitor");
// document.write(devices + "<br>");
// devices.shift();
// document.write(devices + "<br>");
// devices.shift();
// document.write(devices + "<br>");
// devices.shift();
// document.write(devices + "<br>");
// devices.shift();
// document.write(devices + "<br>");
// devices.shift();
// document.write(devices + "<br>");

//15.  Write a program to store phone manufacturers (Apple,
//     Samsung, Motorola, Nokia, Sony & Haier) in an array. 
//     Display the following dropdown/select menu in your 
//     browser using document.write() method

// let program = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
// document.write(program);

//            The END