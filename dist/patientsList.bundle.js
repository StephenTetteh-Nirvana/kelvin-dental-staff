/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./List Patients/script.js":
/*!*********************************!*\
  !*** ./List Patients/script.js ***!
  \*********************************/
/***/ (() => {

eval("const patients = localStorage.getItem(\"patients\") !== null ? JSON.parse(localStorage.getItem(\"patients\")) : []\r\nconst arrowBox = document.querySelector(\".arrowBox\")\r\nconst table = document.getElementById(\"data_table\")\r\n\r\narrowBox.addEventListener(\"click\",()=>{\r\n    window.history.back()\r\n})\r\n\r\ndocument.addEventListener('DOMContentLoaded',()=>{\r\n    patientsList()\r\n})\r\n\r\nconst patientsList = () => {\r\n    if (patients.length > 0) {\r\n        patients.forEach((patient) => {\r\n            table.innerHTML += `  \r\n                <tr>\r\n                    <td>${patient.name}</td>\r\n                    <td>${patient.age}</td>\r\n                    <td>${patient.contact}</td>\r\n                    <td>${patient.date}</td>\r\n                </tr>\r\n            `;\r\n        });\r\n    } else {\r\n        table.innerHTML += `\r\n            <tr>\r\n                <td>No patients yet</td>\r\n            </tr>\r\n        `;\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://kelvin-dental-staff/./List_Patients/script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./List Patients/script.js"]();
/******/ 	
/******/ })()
;