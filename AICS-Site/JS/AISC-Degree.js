/* ----------------------------------------- add columns --------------------------------------- */
if (!localStorage.columns){
    localStorage.columns = JSON.stringify(["Assignment","Sheet","Quiz","Mid","Practical","Project","Final","Total"]);
}


/* ----------------------------------------- add column ----------------------------------------- */
let btn_col_add = document.querySelector("#container .btns .add-col");

btn_col_add.addEventListener("click",() => {
    // scroll page to top
    document.documentElement.scrollTop = 0;

    // show alert
    document.querySelector(".add-C-alert").style.display = "flex";
    document.documentElement.scrollTop = 0;
    document.body.style.overflow = "hidden";
});


/* ----------------------------------------- close add column ----------------------------------------- */
let btn_add_col_close = document.querySelector(".add-C-alert .close-model");

btn_add_col_close.addEventListener("click",() => {
    // clear input
    document.querySelector(".add-C-alert #name").value = "";

    // remove msg error if it appeared
    document.querySelector(".add-C-alert .name p").style.display = "none";

    // close alert
    document.querySelector(".add-C-alert").style.display = "none";
    document.documentElement.scrollTop = 20;
    document.body.style.overflow = "visible";
});


/* ----------------------------------------- save add column ----------------------------------------- */
let btn_save_col = document.querySelector(".add-C-alert .save");

btn_save_col.addEventListener("click",() => {
    // get columns list and input
    let columns = (localStorage.columns) ? JSON.parse(localStorage.columns)
            : ["Assignment","Sheet","Quiz","Mid","Practical","Project","Final","Total"];
    let col_name_inp = document.querySelector(".add-C-alert #name");

    if (col_name_inp.value !== ""){
        // remove msg error if it appeared
        document.querySelector(".add-C-alert .name p").style.display = "none";

        // check if input value is exist
        let dup = false;
        columns.forEach((col) => {
            if (col === col_name_inp.value){
                dup = true;
            }
        });

        if (dup === false){
            //add new column to list
            columns[columns.length] = col_name_inp.value;

            // swap last two column
            let temp = columns[columns.length - 1];
            columns[columns.length - 1] = columns[columns.length - 2];
            columns[columns.length - 2] = temp;

            // add new column to degrees list in each course 
            if (localStorage.degrees){
                // get degrees list
                let degrees = JSON.parse(localStorage.degrees);

                // get courses list
                let courses = JSON.parse(localStorage.courses);

                // add new column to degrees list in each course   
                courses.forEach((course) => {
                    if (degrees[course.toLowerCase()][col_name_inp.value] === undefined){
                        degrees[course.toLowerCase()][col_name_inp.value] = '';
                    }
                });

                // return degree list to local storage
                localStorage.degrees = JSON.stringify(degrees);
            }

            // return data to local storage
            localStorage.columns = JSON.stringify(columns);

            // reload page
            location.reload();
        } else {
            // add msg error for col name input
            document.querySelector(".add-C-alert .name p").textContent = "Error: Column name is already exist.";
            document.querySelector(".add-C-alert .name p").style.display = "inline";
        }
    } else {
        // add msg error for col name input
        document.querySelector(".add-C-alert .name p").textContent = "Please, Enter column name.";
        document.querySelector(".add-C-alert .name p").style.display = "inline";
    }
})


/* ----------------------------------------- remove column ----------------------------------------- */
let btn_col_rem = document.querySelector("#container .btns .rem-col");

btn_col_rem.addEventListener("click",() => {
    // scroll page to top
    document.documentElement.scrollTop = 0;

    // show alert
    document.querySelector(".rem-C-alert").style.display = "flex";
    document.documentElement.scrollTop = 0;
    document.body.style.overflow = "hidden";

    // fill div columns checkbox
    let columns = (localStorage.columns) ? JSON.parse(localStorage.columns)
                : ["Assignment","Sheet","Quiz","Mid","Practical","Project","Final","Total"];

    columns.forEach((col) => {
        // remove total col because it is important
        if (col !== "Total"){
            // create div
            let div = document.createElement("div");
            div.className = col.toLowerCase();

            // create checkbox and label by innerHtml
            div.innerHTML = `
                <input type="checkbox" value="${col.toLowerCase()}" id="${col.toLowerCase()}">
                <label for="${col.toLowerCase()}">${col}</label>
            `;

            // add div to form
            document.querySelector(".rem-C-alert form div div").appendChild(div);
        }
    });
});


/* ----------------------------------------- close remove column ----------------------------------------- */
let btn_rem_col_close = document.querySelector(".rem-C-alert .close-model");

btn_rem_col_close.addEventListener("click",() => {
    // remove checkbox
    let parent_div = document.querySelector(".rem-C-alert form div div");
    let divs = document.querySelectorAll(".rem-C-alert form div div div");

    // remove msg error for column list
    document.querySelector(".rem-C-alert form div p").style.display = "none";

    divs.forEach((div) => {
        parent_div.removeChild(div);
    });

    // close alert
    document.querySelector(".rem-C-alert").style.display = "none";
    document.documentElement.scrollTop = 20;
    document.body.style.overflow = "visible";
});


/* ----------------------------------------- save remove column ----------------------------------------- */
let btn_save_rem_col = document.querySelector(".rem-C-alert .save");

btn_save_rem_col.addEventListener("click",() => {
    let box_checked = Array.from(document.querySelectorAll(".rem-C-alert form div div input[type='checkbox']:checked"))
        .map(checkbox => checkbox.value);

    if (box_checked.length !== 0){
        // remove msg error for column list
        document.querySelector(".rem-C-alert form div p").style.display = "none";

        // get columns list from local storage
        let columns = (localStorage.columns) ? JSON.parse(localStorage.columns)
                    : ["Assignment","Sheet","Quiz","Mid","Practical","Project","Final","Total"];

        // make degrees and courses var global
        let degrees  = {};
        let courses = [];

        // check if degree is exist
        if (localStorage.degrees){
            // get degrees list
            degrees = JSON.parse(localStorage.degrees);

            // get courses list
            courses = JSON.parse(localStorage.courses);
        }

        // remove columns from list
        box_checked.forEach((box) => {
            columns.forEach((col,index) => {
                if (box === col.toLowerCase()){
                    for (let i = index;i < columns.length-1;i++){
                        columns[i] = columns[i+1];
                    }
                }
            });

            // remove column from degrees list in each course 
            if (localStorage.degrees){
                courses.forEach((course) => {
                    delete degrees[course.toLowerCase()][box];
                });
            }
        });

        // return degrees to local storage if is exist
        if (localStorage.degrees){
            localStorage.degrees = JSON.stringify(degrees);
        }

        // resizing for list
        columns.length -= box_checked.length;

        // return list to local storage
        localStorage.columns = JSON.stringify(columns);

        // reload page
        location.reload();
    } else {
        // add msg error for column list
        document.querySelector(".rem-C-alert form div p").textContent = "Please, Select at least one column.";
        document.querySelector(".rem-C-alert form div p").style.display = "inline";
    }
});


/* ----------------------------------------- add Course ----------------------------------------- */
let btn_cor_add = document.querySelector("#container .btns .add-crs");

btn_cor_add.addEventListener("click",() => {
    // scroll page to top
    document.documentElement.scrollTop = 0;

    // show alert
    document.querySelector(".add-co-alert").style.display = "flex";
    document.documentElement.scrollTop = 0;
    document.body.style.overflow = "hidden";
});


/* ----------------------------------------- close add course ----------------------------------------- */
let btn_add_cor_close = document.querySelector(".add-co-alert .close-model");

btn_add_cor_close.addEventListener("click",() => {
    // clear input
    document.querySelector(".add-co-alert #name").value = "";

    // remove msg error if it appeared
    document.querySelector(".add-co-alert .name p").style.display = "none";

    // close alert
    document.querySelector(".add-co-alert").style.display = "none";
    document.documentElement.scrollTop = 20;
    document.body.style.overflow = "visible";
});


/* ----------------------------------------- save add course ----------------------------------------- */
let btn_save_crs = document.querySelector(".add-co-alert .save");

btn_save_crs.addEventListener("click",() => {
    let crs_input = document.querySelector(".add-co-alert #name");

    if (crs_input.value !== "" && crs_input.value.length > 1){
        // remove error msg if it appeared
        document.querySelector(".add-co-alert .name p").style.display = "none";

        // get course list
        let courses = (localStorage.courses) ? JSON.parse(localStorage.courses) : [];

        // check if input value is already exist
        let dup = false
        courses.forEach((course) => {
            if (course.toLowerCase() === crs_input.value.toLowerCase()){
                dup = true;
            }
        });

        if (!dup){
            // var for new course name and value of input
            let newCourse = "";
            let input_value = crs_input.value.replace(/[-_?@^*%$!+]/g," "); // remove all noisy sign

            // change value of input to capitalize or upper case
            if (input_value.length === 2 || input_value.length === 3 || input_value.length === 4){
                newCourse = input_value.toUpperCase().replace(" ","_");
            } else {
                // get list form string
                let value_list = input_value.split(" ");

                value_list.forEach((value,index) => {
                    // get first letter in word 
                    newCourse += value.slice(0,1).toUpperCase();

                    // assign remaining letters of word
                    newCourse += value.slice(1);

                    // add space after each word
                    if (index !== value_list.length - 1){
                        newCourse += " ";
                    }
                });
            }

            // add new course to courses list
            courses[courses.length] = newCourse;

            // change degrees list by add new course and its attribute
            if (localStorage.degrees){
                // get degree list 
                let degrees = JSON.parse(localStorage.degrees);

                // get columns list
                let columns = JSON.parse(localStorage.columns);

                // add course to degrees list
                degrees[newCourse.toLowerCase()] = {};

                // add attribute for new course
                columns.forEach((col) => {
                    degrees[newCourse.toLowerCase()][col.toLowerCase()] = '';   
                });

                // return degrees list to local
                localStorage.degrees = JSON.stringify(degrees);
            } else {
                // get degree list 
                let degrees = {};

                // get columns list
                let columns = JSON.parse(localStorage.columns);

                // add course to degrees list
                degrees[newCourse.toLowerCase()] = {};

                // add attribute for new course
                columns.forEach((col) => {
                    degrees[newCourse.toLowerCase()][col.toLowerCase()] = '';   
                });

                // return degrees list to local
                localStorage.degrees = JSON.stringify(degrees);
            }

            // return new courses list to local storage
            localStorage.courses = JSON.stringify(courses);

            // reload page
            location.reload();
        } else {
            // add msg error for user about length of input
            document.querySelector(".add-co-alert .name p").textContent = "Error: Course name is already exist.";
            document.querySelector(".add-co-alert .name p").style.display = "inline";
        }
    } else if (crs_input.value !== "" && crs_input.value.length === 1){
        // add msg error for user about length of input
        document.querySelector(".add-co-alert .name p").textContent = "Error: Course name at least have 2 letters.";
        document.querySelector(".add-co-alert .name p").style.display = "inline";
    } else {
        // add msg error for user about length of input
        document.querySelector(".add-co-alert .name p").textContent = "Please, Enter course name.";
        document.querySelector(".add-co-alert .name p").style.display = "inline";
    }
});


/* ----------------------------------------- remove course ----------------------------------------- */
let btn_crs_rem = document.querySelector("#container .btns .rem-crs");

btn_crs_rem.addEventListener("click",() => {
    // scroll page to top
    document.documentElement.scrollTop = 0;

    // show alert
    document.querySelector(".rem-co-alert").style.display = "flex";
    document.documentElement.scrollTop = 0;
    document.body.style.overflow = "hidden";

    // fill div columns checkbox
    let courses = (localStorage.courses) ? JSON.parse(localStorage.courses)
                : [];

    if (courses.length !== 0){
        courses.forEach((course) => {
            // create div
            let div = document.createElement("div");
            div.className = course;
    
            // create checkbox and label by innerHtml
            div.innerHTML = `
                <input type="checkbox" value="${course.toLowerCase()}" id="${course.toLowerCase()}">
                <label for="${course.toLowerCase()}">${course}</label>
            `;
    
            // add div to form
            document.querySelector(".rem-co-alert form div div").appendChild(div);
        });
    } else {
        document.querySelector(".rem-co-alert form div div").textContent = "You don't enter any course name yet.";
        setTimeout(() => {
            document.querySelector(".rem-co-alert").style.display = "none";
            document.documentElement.scrollTop = 20;
            document.body.style.overflow = "visible";
        }, 4000);
    }
});


/* ----------------------------------------- close remove course ----------------------------------------- */
let btn_rem_crs_close = document.querySelector(".rem-co-alert .close-model");

btn_rem_crs_close.addEventListener("click",() => {
    // remove checkbox
    let parent_div = document.querySelector(".rem-co-alert form div div");
    let divs = document.querySelectorAll(".rem-co-alert form div div div");

    // remove msg error for column list
    document.querySelector(".rem-co-alert form div p").style.display = "none";

    divs.forEach((div) => {
        parent_div.removeChild(div);
    });

    // close alert
    document.querySelector(".rem-co-alert").style.display = "none";
    document.documentElement.scrollTop = 20;
    document.body.style.overflow = "visible";
});


/* ----------------------------------------- save remove course ----------------------------------------- */
let btn_save_rem_crs = document.querySelector(".rem-co-alert .save");

btn_save_rem_crs.addEventListener("click",() => {
    let box_checked = Array.from(document.querySelectorAll(".rem-co-alert input[type='checkbox']:checked")).map(checkbox => checkbox.value);

    // check if user select at least one checkbox
    if (box_checked.length !== 0){
        // get courses list from local storage
        let courses = JSON.parse(localStorage.courses);

        // create degrees var for make it global
        let degrees = {};

        // get degrees list from local storage if exist
        if (localStorage.degrees){
            degrees = JSON.parse(localStorage.degrees);
        }

        // remove all courses from list
        box_checked.forEach((value) => {
            // remove course from courses list
            courses = courses.filter(course => course.toLowerCase() !== value);

            // remove course from degrees if it exist
            if (localStorage.degrees){
                delete degrees[value];
            }
        });

        // return degrees to local storage if exist
        if (localStorage.degrees){
            localStorage.degrees = JSON.stringify(degrees);
        }
        
        // return courses after change it to local storage
        localStorage.courses = JSON.stringify(courses);

        // reload page
        location.reload();
    } else {
        // add error msg
        document.querySelector(".rem-co-alert form p").textContent = "Please, Select at least one checkbox.";
        document.querySelector(".rem-co-alert form p").style.display = "inline";
    }
});


/* ----------------------------------------- add degree ----------------------------------------- */
let btn_add_deg = document.querySelector("#container .add-dgr");

btn_add_deg.addEventListener("click",() => {
    // fill courses select option body
    let courses = (localStorage.courses) ? JSON.parse(localStorage.courses) : [];
    let select_course = document.querySelector(".add-d-alert .c-name select");

    courses.forEach((course) => {
        let option = document.createElement("option");
        option.value = course.toLowerCase();
        option.textContent = course;
        select_course.appendChild(option);
    });
    select_course.addEventListener("click",() => {
        // remove degree type msg
        document.querySelector(".add-d-alert .d-type p").style.display = "none";

        if (courses.length === 0){
            // add normal msg for empty courses
            document.querySelector(".add-d-alert .c-name p").textContent = "oops! You had been entered any course yet.";
            document.querySelector(".add-d-alert .c-name p").style.display = "inline";
        }
    });

    // fill column select option body
    let columns = (localStorage.columns) ? JSON.parse(localStorage.columns)
                : ["Assignment","Sheet","Quiz","Mid","Practical","Project","Final","Total"];
    let select_column = document.querySelector(".add-d-alert .d-type select");

    columns.forEach((col) => {
        let option = document.createElement("option");
        option.value = col.toLowerCase();
        option.textContent = col;
        select_column.appendChild(option);
    });
    select_column.addEventListener("click",() => {
        // remove course type msg
        document.querySelector(".add-d-alert .c-name p").style.display = "none";

        if (columns.length === 0){ 
            // add degree type msg
            document.querySelector(".add-d-alert .d-type p").textContent = "Oops! You had been entered degree column yet.";
            document.querySelector(".add-d-alert .d-type p").style.display = "inline";
        }
    });

    // appear alert to user
    document.querySelector(".add-d-alert").style.display = "flex";
    document.documentElement.scrollTop = 0;
    document.body.style.overflow = "hidden";
});


/* -----------------------------------------close add degree ----------------------------------------- */
let btn_add_deg_close = document.querySelector(".add-d-alert .close-model");

btn_add_deg_close.addEventListener("click",() => {
    // remove value form input and select
    document.querySelector(".add-d-alert .s-mark input").value = "";    
    document.querySelector(".add-d-alert .t-mark input").value = "";  
    document.querySelector(".add-d-alert .c-name select option[value='null']").selected = true;
    document.querySelector(".add-d-alert .d-type select option[value='null']").selected = true;

    // remove all msg
    let ps = document.querySelectorAll(".add-d-alert p");

    ps.forEach((p) => {
        p.textContent = "";
        p.style.display = "none";
    });

    // remove all course option
    document.querySelectorAll(".add-d-alert .c-name select option").forEach((opt) => {
        if (opt.value !== "null"){
            document.querySelector(".add-d-alert .c-name select").removeChild(opt);
        }
    });

    // remove all course option
    document.querySelectorAll(".add-d-alert .d-type select option").forEach((opt) => {
        if (opt.value !== "null"){
            document.querySelector(".add-d-alert .d-type select").removeChild(opt);
        }
    });

    // appear alert to user
    document.querySelector(".add-d-alert").style.display = "none";
    document.documentElement.scrollTop = 20;
    document.body.style.overflow = "visible";
}); 


/* ----------------------------------------- save add degree ----------------------------------------- */
let btn_save_deg = document.querySelector(".add-d-alert .save");

btn_save_deg.addEventListener("click",() => {
    // get all input and option
    let s_mark_input = document.querySelector(".add-d-alert .s-mark input");
    let t_mark_input = document.querySelector(".add-d-alert .t-mark input");
    let course_opt = document.querySelector(".add-d-alert .c-name select").value;
    let column_opt = document.querySelector(".add-d-alert .d-type select").value;
    let degrees = (localStorage.degrees) ? JSON.parse(localStorage.degrees) : {};
    
    //check user value in student mark input
    if (s_mark_input.value !== ""){
        // remove error msg for s-mark div
        document.querySelectorAll(".add-d-alert .s-mark p").forEach((p) => {
            p.style.display = "none";
        });   

        // check t-mark input value
        if (t_mark_input.value !== "" && t_mark_input.value >= s_mark_input.value){
            // remove error msg for t-mark div
            document.querySelectorAll(".add-d-alert .s-mark p").forEach((p) => {
                p.style.display = "none";
            }); 

            // check c-name
            if (course_opt !== "null"){
                // remove error msg for c-name div
                document.querySelectorAll(".add-d-alert .s-mark p").forEach((p) => {
                    p.style.display = "none";
                }); 

                // check d-type 
                if (column_opt !== "null"){
                    // remove error msg for d-type div
                    document.querySelectorAll(".add-d-alert .s-mark p").forEach((p) => {
                        p.style.display = "none";
                    }); 

                    // check if degree is already entered
                    if (degrees[course_opt.toLowerCase()][column_opt.toLowerCase()] === ""){                        
                        // add degree to its place
                        degrees[course_opt.toLowerCase()][column_opt.toLowerCase()] = `${s_mark_input.value}/${t_mark_input.value}`;

                        // return degree list 
                        localStorage.degrees = JSON.stringify(degrees);

                        // reload page
                        location.reload();
                    } else {
                        // add error msg for d-type div
                        document.querySelector(".add-d-alert > div > p").textContent = "Error: This column it already have value.";
                        document.querySelector(".add-d-alert > div > p").style.display = "inline";
                    }
                } else {
                    // add error msg for d-type div
                    document.querySelector(".add-d-alert .d-type p").textContent = "Please, Select course name.";
                    document.querySelector(".add-d-alert .d-type p").style.display = "inline";
                }
            } else {
                // add error msg for c-name div
                document.querySelector(".add-d-alert .c-name p").textContent = "Please, Select course name.";
                document.querySelector(".add-d-alert .c-name p").style.display = "inline";
            }
        } else if (s_mark_input.value > t_mark_input.value){
            // add error msg for t-mark div
            document.querySelector(".add-d-alert .t-mark p").textContent = "Error: Total mark must be greater than or equal to student mark.";
            document.querySelector(".add-d-alert .t-mark p").style.display = "inline";
        } else {
            // add error msg for t-mark div
            document.querySelector(".add-d-alert .t-mark p").textContent = "Please, Enter total mark.";
            document.querySelector(".add-d-alert .t-mark p").style.display = "inline";
        }
    } else {
        // add error msg for s-mark div
        document.querySelector(".add-d-alert .s-mark p").textContent = "Please, Enter your mark.";
        document.querySelector(".add-d-alert .s-mark p").style.display = "inline";
    }
});


/* ----------------------------------------- remove degree ----------------------------------------- */
let btn_deg_rem = document.querySelector(".btns .rem-dgr");

btn_deg_rem.addEventListener("click",() => {
    // fill courses select option body
    let courses = (localStorage.courses) ? JSON.parse(localStorage.courses) : [];
    let select_course = document.querySelector(".rem-d-alert .c-name select");

    courses.forEach((course) => {
        let option = document.createElement("option");
        option.value = course.toLowerCase();
        option.textContent = course;
        select_course.appendChild(option);
    });
    select_course.addEventListener("click",() => {
        // remove degree type msg
        document.querySelector(".rem-d-alert .d-type p").style.display = "none";

        if (courses.length === 0){
            // add normal msg for empty courses
            document.querySelector(".rem-d-alert .c-name p").textContent = "Oops! You had been entered any course yet.";
            document.querySelector(".rem-d-alert .c-name p").style.display = "inline";
        }
    });

    // fill column select option body
    let columns = (localStorage.columns) ? JSON.parse(localStorage.columns)
                : ["Assignment","Sheet","Quiz","Mid","Practical","Project","Final","Total"];
    let select_column = document.querySelector(".rem-d-alert .d-type select");

    columns.forEach((col) => {
        let option = document.createElement("option");
        option.value = col.toLowerCase();
        option.textContent = col;
        select_column.appendChild(option);
    });
    select_column.addEventListener("click",() => {
        // remove course type msg
        document.querySelector(".rem-d-alert .c-name p").style.display = "none";

        if (columns.length === 0){ 
            // add degree type msg
            document.querySelector(".rem-d-alert .d-type p").textContent = "Oops! You had been entered degree column yet.";
            document.querySelector(".rem-d-alert .d-type p").style.display = "inline";
        }
    });

    // appear alert to user
    document.querySelector(".rem-d-alert").style.display = "flex";
    document.documentElement.scrollTop = 0;
    document.body.style.overflow = "hidden";
});


/* ----------------------------------------- close remove degree ----------------------------------------- */
let btn_rem_deg_close = document.querySelector(".rem-d-alert .close-model");

btn_rem_deg_close.addEventListener("click",() => {
    // remove value from select
    document.querySelector(".rem-d-alert .c-name select option[value='null']").selected = true;
    document.querySelector(".rem-d-alert .d-type select option[value='null']").selected = true;

    // remove all course option
    document.querySelectorAll(".rem-d-alert .c-name select option").forEach((opt) => {
        if (opt.value !== 'null'){
            document.querySelector(".rem-d-alert .c-name select").removeChild(opt);
        }
    });

    // remove all degree column option
    document.querySelectorAll(".rem-d-alert .d-type select option").forEach((opt) => {
        if (opt.value !== 'null'){
            document.querySelector(".rem-d-alert .d-type select").removeChild(opt);
        }
    });

    // remove all msg
    let ps = document.querySelectorAll(".rem-d-alert p");

    ps.forEach((p) => {
        p.textContent = "";
        p.style.display = "none";
    });

    // appear alert to user
    document.querySelector(".rem-d-alert").style.display = "none";
    document.documentElement.scrollTop = 20;
    document.body.style.overflow = "visible";
});


/* ----------------------------------------- save remove degree ----------------------------------------- */
let btn_save_rem_deg = document.querySelector(".rem-d-alert .save");

btn_save_rem_deg.addEventListener("click",() => {
    let course_value = document.querySelector(".rem-d-alert .c-name select").value;
    let col_value = document.querySelector(".rem-d-alert .d-type select").value;

    // check course select value
    if (course_value !== "null"){
        document.querySelector(".rem-d-alert .c-name p").style.display = "none";

        // check col select value
        if (col_value !== "null"){
            // get degree list from local storage
            let degrees = JSON.parse(localStorage.degrees);

            // remove degree from list
            degrees[course_value][col_value] = "";

            // return degree list to local storage
            localStorage.degrees = JSON.stringify(degrees);

            // reload page
            location.reload();
        } else {
            // add error msg to col select input
            document.querySelector(".rem-d-alert .d-type p").textContent = "Please, Select column option.";
            document.querySelector(".rem-d-alert .d-type p").style.display = "inline";
        }
    } else {
        // add error msg to course select input
        document.querySelector(".rem-d-alert .c-name p").textContent = "Please, Select course option.";
        document.querySelector(".rem-d-alert .c-name p").style.display = "inline";
    }
}); 


/* ----------------------------------------- load taple by column data ----------------------------------------- */
let thead = document.querySelector("table thead");
let columns = (localStorage.columns) ? JSON.parse(localStorage.columns) 
            : ["Assignment","Sheet","Quiz","Mid","Practical","Project","Final","Total"];

// add course column to table 
let th = document.createElement("th");
th.textContent = "Course";
thead.appendChild(th);

// add all columns to table
columns.forEach((col) => {
    let th = document.createElement("th");
    th.textContent = col;
    thead.appendChild(th);
});


/* ----------------------------------------- load taple by courses data ----------------------------------------- */
let tbody = document.querySelector("table tbody");
let courses = (localStorage.courses) ? JSON.parse(localStorage.courses) : [];

courses.forEach((course) => {
    // create tuple
    let tr = document.createElement("tr");
    tr.className = course.toLowerCase().replace(" ","-");

    // add course name
    let td = document.createElement("td");
    td.textContent = course;
    td.className = 'text-primary';
    tr.appendChild(td);

    // create field for each degree
    columns.forEach((col) => {
        let td = document.createElement("td");
        td.className = col.toLowerCase();
        tr.appendChild(td);
    });

    // add result to table body
    tbody.appendChild(tr);
});


/* ----------------------------------------- calc total degree ----------------------------------------- */
// check degrees list exixtence
if (localStorage.degrees && localStorage.courses){
    let degrees = JSON.parse(localStorage.degrees);
    let courses = JSON.parse(localStorage.courses);
    let columns = JSON.parse(localStorage.columns);

    // calc degree for each course and add it to total column
    courses.forEach((course) => {
        // ignore courses that is not exist
        if (degrees[course.toLowerCase()] !== undefined){
            // get degree of particular course
            let course_deg = degrees[course.toLowerCase()];
            let total_deg = 0;
            let max_total_deg = 0;

            // get degree for each col and add it to result
            columns.forEach((col) => {
                // ignore total col
                if (col.toLowerCase() !== "total"){
                    // get degree from column and max degree
                    let degree = (course_deg[col.toLowerCase()] === "") ? 0 : Number(course_deg[col.toLowerCase()].slice(0,course_deg[col.toLowerCase()].indexOf("/")));
                    let max_deg = (course_deg[col.toLowerCase()] === "") ? 0 : Number(course_deg[col.toLowerCase()].slice(course_deg[col.toLowerCase()].indexOf("/") + 1));

                    // add degree to total and max degree to total max degree
                    total_deg += degree;
                    max_total_deg += max_deg;
                }
            });

            // add total to original tuple
            degrees[course.toLowerCase()]["total"] = `${total_deg}/${max_total_deg}`;
        }

        // check if total mark has zero divisor
        if (degrees[course.toLowerCase()] !== undefined && degrees[course.toLowerCase()]["total"] === '0/0'){
            degrees[course.toLowerCase()]["total"] = '';
        }
    });

    // return degree list to local storage
    localStorage.degrees = JSON.stringify(degrees);
}


/* ----------------------------------------- load degree ----------------------------------------- */
if (localStorage.degrees){
    let degrees = JSON.parse(localStorage.degrees);
    let tr_courses = document.querySelectorAll("table tbody tr");

    if (tr_courses.length !== 0){
        tr_courses.forEach((tr) => {
            // get degree for particular course
            if (degrees[tr.className.replace("-"," ")] !== undefined){
                let tuple_deg = degrees[tr.className.replace("-"," ")];

                console.log(tr.className);

                // get columns of course
                tr.querySelectorAll("td").forEach((td) => {
                    if (td.className !== "text-primary"){
                        td.textContent = tuple_deg[td.className];
                    }
                });
            }
        });
    }
}


/* ----------------------------------------- update container height ----------------------------------------- */
// for phones
console.log(courses.length);
if (window.innerWidth >= 360 && window.innerWidth < 400){
    if (courses.length >= 3){
        document.querySelector("#container").style.height = "fit-content";
    } else {
        document.querySelector("#container").style.height = "100vh";
    }
} // for tablets
else if (window.innerWidth >= 400 && window.innerWidth <= 800){
    if (courses.length >= 5){
        document.querySelector("#container").style.height = "fit-content";
    } else {
        document.querySelector("#container").style.height = "100vh";
    }
} // for labtops
else {
    if (courses.length >= 8){
        document.querySelector("#container").style.height = "fit-content";
    } else {
        document.querySelector("#container").style.height = "86vh";
    }
}