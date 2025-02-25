/* ----------------------------------------- load courses ----------------------------------------- */
if (localStorage.courses){
    let courses = JSON.parse(localStorage.courses);

    // get table body
    let tbody = document.querySelector(".table tbody");

    // load all courses
    courses.forEach((course) => {
        // create tr
        let tr = document.createElement("tr");
        tr.className = course.toLowerCase();

        // create td for course name and add it
        let td = document.createElement("td");
        td.textContent = course;
        td.className = course.toLowerCase();
        tr.appendChild(td);

        // create td for each col
        for (let i = 0;i < 12;i++){
            let td = document.createElement("td");
            tr.appendChild(td);
        }

        // add tr to table body
        tbody.appendChild(tr);
    });
}


/* ----------------------------------------- load lessons ----------------------------------------- */
if (localStorage.lessons){
    // get lessons form local storage
    let lessons = JSON.parse(localStorage.lessons);

    // get all tr 
    document.querySelectorAll(".table tr").forEach((tr) => {
        tr.querySelectorAll("td").forEach((td,index) => {
            if (td.classList.length === 0){
                if (lessons[tr.className][index - 1] !== ""){
                    td.textContent = lessons[tr.className][index - 1].slice(0,lessons[tr.className][index - 1].indexOf(","));

                    // check marked
                    if (lessons[tr.className][index - 1].endsWith("1")){
                        td.style.fontWeight = "900";
                        td.className = 'text-success';
                    }
                } 
            }
        });
    }); 
}


/* ----------------------------------------- add lesson ----------------------------------------- */
let btn_add = document.querySelector(".add");

function loadCourseSelect(type){
    // load courses in course select
    if (localStorage.courses){
        // loop on courses
        JSON.parse(localStorage.courses).forEach((course) => {
            let option = document.createElement("option");
            option.value = course.toLowerCase();
            option.textContent = course;

            // add course to select
            document.querySelector(`.${type}-alert .course select`).appendChild(option);
        });
    }
}

function openModel(type){
    if (type !== "add"){
        if (localStorage.courses && localStorage.lessons){
            // show alert and change page scrolling
            document.querySelector(`.${type}-alert`).style.display = "flex";
            document.body.style.overflow = "hidden";
        } else if (!localStorage.lessons){
            // add msg error for 
            document.querySelector("#container p").textContent = `
                Oops!, You don't enter any lessons yet.
            `;
            document.querySelector("#container p").style.display = "block";
        } else {
            // add msg error for 
            document.querySelector("#container p").textContent = `
                Oops!, You don't enter any course name yet.<br>
                Please, Go to Degree page to add your courses.
            `;
            document.querySelector("#container p").style.display = "block";
        }
    } else {
        if (localStorage.courses){
            // show alert and change page scrolling
            document.querySelector(`.${type}-alert`).style.display = "flex";
            document.body.style.overflow = "hidden";

            // remove msg
            document.querySelector("#container p").style.display = "none";
        } else {
            // add msg error for 
            document.querySelector("#container p").textContent = `
                Oops!, You don't enter any course name yet.<br>
                Please, Go to Degree page to add your courses.
            `;
            document.querySelector("#container p").style.display = "block";
        }
    }
}

btn_add.addEventListener("click",() => {
    loadCourseSelect('add');
    openModel('add');
});


/* ----------------------------------------- close add lesson ----------------------------------------- */
let btn_close_add = document.querySelector(".add-alert .close-model");

function closeModel(type){
    // clear all field
    document.querySelector(`.${type}-alert .week select option[value = 'null']`).selected = true;
    document.querySelector(`.${type}-alert .course select option[value = 'null']`).selected = true;
    if (type === "add"){
        document.querySelector(`.${type}-alert .lesson input`).value = "";
    }

    // remove all msg 
    document.querySelectorAll(`.${type}-alert p`).forEach((p) => {
        p.style.display = "none";
    });

    // show alert and change page scrolling
    document.querySelector(`.${type}-alert`).style.display = "none";
    document.body.style.overflow = "visible";
}

btn_close_add.addEventListener("click",() => {
    closeModel("add");
});


/* ----------------------------------------- save add lesson ----------------------------------------- */
let btn_save_add = document.querySelector(".add-alert .save");

btn_save_add.addEventListener("click",() => {
    // get all field
    let week_select = document.querySelector(".add-alert .week select");
    let course_select = document.querySelector(".add-alert .course select");
    let lesson_input = document.querySelector(".add-alert .lesson input");

    // check if week selct empty
    if (week_select.value !== "null"){
        // remove all msg 
        document.querySelectorAll(`.add-alert p`).forEach((p) => {
            p.style.display = "none";
        });

        // check if course select is empty
        if (course_select.value !== 'null'){
            // remove all msg 
            document.querySelectorAll(`.add-alert p`).forEach((p) => {
                p.style.display = "none";
            });

            //check if lesson input is empty
            if (lesson_input.value !== ""){
                // remove all msg 
                document.querySelectorAll(`.-alert p`).forEach((p) => {
                    p.style.display = "none";
                });

                // get lessons form local storage
                let lessons = (localStorage.lessons) ? JSON.parse(localStorage.lessons) : {};

                // check if lessons is empty
                if (Object.keys(lessons).length === 0){
                    let courses = JSON.parse(localStorage.courses);

                    // fill list
                    courses.forEach((course) => {
                        lessons[course.toLowerCase()] = ["","","","","","","","","","","",""];
                    });

                    // add lesson
                    lessons[course_select.value][Number(week_select.value) - 1] = lesson_input.value + ",0";

                    // return list to local storage
                    localStorage.lessons = JSON.stringify(lessons);

                    // reload page
                    location.reload();
                } else {
                    // check if lesson already has been entered
                    if (lessons[course_select.value][Number(week_select.value) - 1] === '') {
                        // add lesson
                        lessons[course_select.value][Number(week_select.value) - 1] = lesson_input.value + ",0";

                        // return list to local storage
                        localStorage.lessons = JSON.stringify(lessons);

                        // reload page
                        location.reload();
                    } else {
                        // show msg error
                        document.querySelector(".add-alert > div > p").textContent = "This course already have data in this week.";
                        document.querySelector(".add-alert > div > p").style.display = "inline";
                    }
                }
            } else {
                // show msg error
                document.querySelector(".add-alert .lesson p").textContent = "Please, Enter lesson name.";
                document.querySelector(".add-alert .lesson p").style.display = "inline";
            }
        } else {
            // show msg error
            document.querySelector(".add-alert .course p").textContent = "Please, Select course name.";
            document.querySelector(".add-alert .course p").style.display = "inline";
        }
    } else {
        // show msg error
        document.querySelector(".add-alert .week p").textContent = "Please, Select week number.";
        document.querySelector(".add-alert .week p").style.display = "inline";
    }
});


/* ----------------------------------------- remove lesson ----------------------------------------- */
let btn_remove = document.querySelector(".remove");

loadCourseSelect('remove');

btn_remove.addEventListener("click",() => {
    openModel('remove');
});


/* ----------------------------------------- close remove lesson ----------------------------------------- */
let btn_close_remove = document.querySelector(".remove-alert .close-model");

btn_close_remove.addEventListener("click",() => {
    closeModel('remove');
});


/* ----------------------------------------- save remove lesson ----------------------------------------- */
let btn_save_remove = document.querySelector(".remove-alert .save");

btn_save_remove.addEventListener("click",() => {
    // get all field
    let week_select = document.querySelector(".remove-alert .week select");
    let course_select = document.querySelector(".remove-alert .course select");

    // check if week selct empty
    if (week_select.value !== "null"){
        // remove all msg 
        document.querySelectorAll(`.remove-alert p`).forEach((p) => {
            p.style.display = "none";
        });

        // check if course select is empty
        if (course_select.value !== 'null'){
            // get lessons form local storage
            let lessons = JSON.parse(localStorage.lessons);

            // check if course have value in this field
            if (lessons[course_select.value][Number(week_select.value) - 1] !== ""){
                // remove lesson
                lessons[course_select.value][Number(week_select.value) - 1] = "";

                // return list to local storage
                localStorage.lessons = JSON.stringify(lessons);

                // reload page
                location.reload();
            } else {
                // show msg error
                document.querySelector(".remove-alert > div > p").textContent = "This is empty lesson field,can not remove it.";
                document.querySelector(".remove-alert > div > p").style.display = "inline";
            }
        } else {
            // show msg error
            document.querySelector(".remove-alert .course p").textContent = "Please, Select course name.";
            document.querySelector(".remove-alert .course p").style.display = "inline";
        }
    } else {
        // show msg error
        document.querySelector(".remove-alert .week p").textContent = "Please, Select week number.";
        document.querySelector(".remove-alert .week p").style.display = "inline";
    }
});


/* ----------------------------------------- Mark lesson ----------------------------------------- */
let btn_mark = document.querySelector(".mark");

loadCourseSelect("mark");

btn_mark.addEventListener("click",() => {   
    openModel("mark");
});


/* ----------------------------------------- close Mark lesson ----------------------------------------- */
let btn_close_mark = document.querySelector(".mark-alert .close-model");

btn_close_mark.addEventListener("click",() => {
    closeModel("mark");
});


/* ----------------------------------------- save Mark lesson ----------------------------------------- */
let btn_save_mark = document.querySelector(".mark-alert .save");

btn_save_mark.addEventListener("click",() => {
    // get all field
    let week_select = document.querySelector(".mark-alert .week select");
    let course_select = document.querySelector(".mark-alert .course select");

    // check if week selct empty
    if (week_select.value !== "null"){
        // mark all msg 
        document.querySelectorAll(`.mark-alert p`).forEach((p) => {
            p.style.display = "none";
        });

        // check if course select is empty
        if (course_select.value !== 'null'){
            // get lessons form local storage
            let lessons = JSON.parse(localStorage.lessons);

            // check if course have value in this field
            if (lessons[course_select.value][Number(week_select.value) - 1] !== ""){
                // mark lesson
                lessons[course_select.value][Number(week_select.value) - 1] = 
                            lessons[course_select.value][Number(week_select.value) - 1].slice(0,
                                lessons[course_select.value][Number(week_select.value) - 1].indexOf(",")
                            ) + ",1";

                // return list to local storage
                localStorage.lessons = JSON.stringify(lessons);

                // reload page
                location.reload();
            } else {
                // show msg error
                document.querySelector(".mark-alert > div > p").textContent = "This is empty lesson field,can not mark it.";
                document.querySelector(".mark-alert > div > p").style.display = "inline";
            }
        } else {
            // show msg error
            document.querySelector(".mark-alert .course p").textContent = "Please, Select course name.";
            document.querySelector(".mark-alert .course p").style.display = "inline";
        }
    } else {
        // show msg error
        document.querySelector(".mark-alert .week p").textContent = "Please, Select week number.";
        document.querySelector(".mark-alert .week p").style.display = "inline";
    }
});