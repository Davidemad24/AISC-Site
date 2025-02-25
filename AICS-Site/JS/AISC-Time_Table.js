/* -------------------------------- Add Appointment -------------------------------- */
let btn_add = document.querySelector(".add");
let course_select = document.querySelector(".add-alert .course select");

btn_add.addEventListener("click",() => {
    // remove msg error from container
    document.querySelector("#container p").style.display = "none";

    // get courses list form local storage
    let courses = (localStorage.courses) ? JSON.parse(localStorage.courses) : [];

    // load courses
    courses.forEach((course) => {
        // create option 
        let opt = document.createElement("option");
        opt.value = course.toLowerCase();
        opt.textContent = course;

        // add option to course select
        course_select.appendChild(opt);
    });

    // add script when click on course selet
    course_select.addEventListener("click",() => {
        // check if courses list is empty
        if (courses.length === 0){
            // add msg to course select
            document.querySelector(".add-alert .course p").textContent = "Oops! You don't entered any courses yet.";
            document.querySelector(".add-alert .course p").style.display = "inline";
        }
    });

    // show alert and change page scrolling
    document.querySelector(".add-alert").style.display = "flex";
    document.body.style.overflow = "hidden";
    document.documentElement.scrollTop = 0;
});


/* -------------------------------- close Appointment -------------------------------- */
let btn_close_add = document.querySelector(".add-alert .close-model");

function close_model(type){
    // clear all input
    document.querySelector(`.${type.toLowerCase()}-alert .time select option[value = 'null']`).selected = true;
    document.querySelector(`.${type.toLowerCase()}-alert .day select option[value = 'null']`).selected = true;
    document.querySelector(`.${type.toLowerCase()}-alert .course select option[value = 'null']`).selected = true;
    document.querySelector(`.${type.toLowerCase()}-alert .d-name input`).value = "";
    document.querySelector(`.${type.toLowerCase()}-alert .place input`).value = "";

    // remove option from course select
    document.querySelectorAll(`.${type.toLowerCase()}-alert .course select option`).forEach((opt) => {
        if (opt.value !== "null"){
            document.querySelector(`.${type.toLowerCase()}-alert .course select`).removeChild(opt);
        }
    }); 

    // remove all msg
    document.querySelectorAll(`.${type.toLowerCase()}-alert p`).forEach((p) => {
        p.style.display = "none";
    });

    // remove alert and change page scrolling
    document.querySelector(`.${type.toLowerCase()}-alert`).style.display = "none";
    document.body.style.overflow = "visible";
}

btn_close_add.addEventListener("click",() => {
    close_model("add");
}); 


/* -------------------------------- save Appointment -------------------------------- */
let btn_save_add = document.querySelector(".add-alert .save");

btn_save_add.addEventListener("click",() => {
    // get field 
    let appointment_select = document.querySelector(".add-alert .time select");
    let day_select = document.querySelector(".add-alert .day select");
    let course_select = document.querySelector(".add-alert .course select");
    let doc_input = document.querySelector(".add-alert .d-name input");
    let place_input = document.querySelector(".add-alert .place input");

    // get appointments from local storage if it is exist
    let appointments = (localStorage.appointments) ? JSON.parse(localStorage.appointments) 
                    : {
                        saturday: [
                            {courseName: '',docName: '',place: ''},
                            {courseName: '',docName: '',place: ''},
                            {courseName: '',docName: '',place: ''},
                            {courseName: '',docName: '',place: ''},
                            {courseName: '',docName: '',place: ''}
                        ],
                        sunday: [
                            {courseName: '',docName: '',place: ''},
                            {courseName: '',docName: '',place: ''},
                            {courseName: '',docName: '',place: ''},
                            {courseName: '',docName: '',place: ''},
                            {courseName: '',docName: '',place: ''}
                        ],
                        monday: [
                            {courseName: '',docName: '',place: ''},
                            {courseName: '',docName: '',place: ''},
                            {courseName: '',docName: '',place: ''},
                            {courseName: '',docName: '',place: ''},
                            {courseName: '',docName: '',place: ''}
                        ],
                        tuesday: [
                            {courseName: '',docName: '',place: ''},
                            {courseName: '',docName: '',place: ''},
                            {courseName: '',docName: '',place: ''},
                            {courseName: '',docName: '',place: ''},
                            {courseName: '',docName: '',place: ''}
                        ],
                        wednesday: [
                            {courseName: '',docName: '',place: ''},
                            {courseName: '',docName: '',place: ''},
                            {courseName: '',docName: '',place: ''},
                            {courseName: '',docName: '',place: ''},
                            {courseName: '',docName: '',place: ''}
                        ],
                        thursday: [
                            {courseName: '',docName: '',place: ''},
                            {courseName: '',docName: '',place: ''},
                            {courseName: '',docName: '',place: ''},
                            {courseName: '',docName: '',place: ''},
                            {courseName: '',docName: '',place: ''}
                        ],
                        friday: [
                            {courseName: '',docName: '',place: ''},
                            {courseName: '',docName: '',place: ''},
                            {courseName: '',docName: '',place: ''},
                            {courseName: '',docName: '',place: ''},
                            {courseName: '',docName: '',place: ''}
                        ],
                    };

    // check if appointment is have null value
    if (appointment_select.value !== "null"){
        // remove all msg 
        document.querySelectorAll(".add-alert p").forEach((p) => {
            p.style.display = "none";
        }); 

        // check if day is have null value
        if (day_select.value !== "null"){
            // remove all msg 
            document.querySelectorAll(".add-alert p").forEach((p) => {
                p.style.display = "none";
            });

            // check if course have null value
            if (course_select.value !== "null"){
                // remove all msg 
                document.querySelectorAll(".add-alert p").forEach((p) => {
                    p.style.display = "none";
                });

                if (doc_input.value !== "" && doc_input.value.includes("Dr. ")){
                    // remove all msg 
                    document.querySelectorAll(".add-alert p").forEach((p) => {
                        p.style.display = "none";
                    }); 

                    if (place_input.value !== ""){
                        // add data to list
                        appointments[day_select.value.toLowerCase()][Number(appointment_select.value) - 1].courseName = course_select.value;
                        appointments[day_select.value.toLowerCase()][Number(appointment_select.value) - 1].docName = doc_input.value;
                        appointments[day_select.value.toLowerCase()][Number(appointment_select.value) - 1].place = place_input.value;

                        // return data to local storage
                        localStorage.appointments = JSON.stringify(appointments);

                        // reload page
                        location.reload();
                    } else {
                        // add msg to appointment div
                        document.querySelector(".add-alert .place p").textContent = "Error: Please, Enter doc name as \'Dr.****\'";
                        document.querySelector(".add-alert .place p").style.display = "inline";
                    }
                } else if (!doc_input.value.includes("Dr. ")){
                    // add msg to appointment div
                    document.querySelector(".add-alert .d-name p").textContent = "Error: Please, Enter doc name as \'Dr.****\'";
                    document.querySelector(".add-alert .d-name p").style.display = "inline";
                } else {
                    // add msg to appointment div
                    document.querySelector(".add-alert .d-name p").textContent = "Please, Enter doc name.";
                    document.querySelector(".add-alert .d-name p").style.display = "inline";
                }
            } else {
                // add msg to appointment div
                document.querySelector(".add-alert .course p").textContent = "Please, Select day option.";
                document.querySelector(".add-alert .course p").style.display = "inline";
            }
        } else {
            // add msg to appointment div
            document.querySelector(".add-alert .day p").textContent = "Please, Select day option.";
            document.querySelector(".add-alert .day p").style.display = "inline";
        }
    } else {
        // add msg to appointment div
        document.querySelector(".add-alert .time p").textContent = "Please, Select appointment option.";
        document.querySelector(".add-alert .time p").style.display = "inline";
    }
}); 


/* -------------------------------- update Appointment -------------------------------- */
let btn_update = document.querySelector("#container .update");

btn_update.addEventListener("click",() => {
    let appointments = {
        saturday: [
            {courseName: '',docName: '',place: ''},
            {courseName: '',docName: '',place: ''},
            {courseName: '',docName: '',place: ''},
            {courseName: '',docName: '',place: ''},
            {courseName: '',docName: '',place: ''}
        ],
        sunday: [
            {courseName: '',docName: '',place: ''},
            {courseName: '',docName: '',place: ''},
            {courseName: '',docName: '',place: ''},
            {courseName: '',docName: '',place: ''},
            {courseName: '',docName: '',place: ''}
        ],
        monday: [
            {courseName: '',docName: '',place: ''},
            {courseName: '',docName: '',place: ''},
            {courseName: '',docName: '',place: ''},
            {courseName: '',docName: '',place: ''},
            {courseName: '',docName: '',place: ''}
        ],
        tuesday: [
            {courseName: '',docName: '',place: ''},
            {courseName: '',docName: '',place: ''},
            {courseName: '',docName: '',place: ''},
            {courseName: '',docName: '',place: ''},
            {courseName: '',docName: '',place: ''}
        ],
        wednesday: [
            {courseName: '',docName: '',place: ''},
            {courseName: '',docName: '',place: ''},
            {courseName: '',docName: '',place: ''},
            {courseName: '',docName: '',place: ''},
            {courseName: '',docName: '',place: ''}
        ],
        thursday: [
            {courseName: '',docName: '',place: ''},
            {courseName: '',docName: '',place: ''},
            {courseName: '',docName: '',place: ''},
            {courseName: '',docName: '',place: ''},
            {courseName: '',docName: '',place: ''}
        ],
        friday: [
            {courseName: '',docName: '',place: ''},
            {courseName: '',docName: '',place: ''},
            {courseName: '',docName: '',place: ''},
            {courseName: '',docName: '',place: ''},
            {courseName: '',docName: '',place: ''}
        ],
    };

    if (localStorage.appointments !== JSON.stringify(appointments)){
        // remove some input until user enter day and time
        document.querySelector(".update-alert .course").style.display = "none";
        document.querySelector(".update-alert .d-name").style.display = "none";
        document.querySelector(".update-alert .place").style.display = "none";

        // get courses list form local storage and course selector
        let courses = (localStorage.courses) ? JSON.parse(localStorage.courses) : [];
        let course_select = document.querySelector(".update-alert .course select");

        // load courses
        courses.forEach((course) => {
            // create option 
            let opt = document.createElement("option");
            opt.value = course.toLowerCase();
            opt.textContent = course;

            // add option to course select
            course_select.appendChild(opt);
        });

        // show alert and change page scrolling
        document.querySelector(".update-alert").style.display = "flex";
        document.body.style.overflow = "hidden";
        document.documentElement.scrollTop = 0;

    } else {
        // add msg error if appointments is not exist
        document.querySelector("#container > p").textContent = "Error: You don't enter any appointment yet."
        document.querySelector("#container > p").style.display = "block";
    }
});


/* -------------------------------- close update Appointment -------------------------------- */
let btn_close_update = document.querySelector(".update-alert .close-model");

btn_close_update.addEventListener("click",() => {
    // remove some input until user enter day and time
    document.querySelector(".update-alert .course").style.display = "none";
    document.querySelector(".update-alert .d-name").style.display = "none";
    document.querySelector(".update-alert .place").style.display = "none";

    // show to appointment and day divs
    document.querySelector(".update-alert .time").style.display = 'block';
    document.querySelector(".update-alert .day").style.display = 'block';

    close_model("update");

    // remove save btn and show check btn
    document.querySelector(".update-alert .save").style.display = "none";
    document.querySelector(".update-alert .check").style.display = "block";
});


/* -------------------------------- check update Appointment -------------------------------- */
let btn_check_update = document.querySelector(".update-alert .check");

btn_check_update.addEventListener("click",() => {
    // get two select
    let appointment_select = document.querySelector(".update-alert .time select");
    let day_select = document.querySelector(".update-alert .day select");

    if (appointment_select.value !== 'null'){
        // remove all msg
        document.querySelectorAll(".update-alert p").forEach((p) => {
            p.style.display = "none";
        });

        if (day_select.value !== 'null') {
            // remove all msg
            document.querySelectorAll(".update-alert p").forEach((p) => {
                p.style.display = "none";
            });

            // get appointment from local storage
            let appointments = JSON.parse(localStorage.appointments);
        
            if (appointments[day_select.value.toLowerCase()][Number(appointment_select.value) - 1]['courseName'] !== ""){
                // remove all msg
                document.querySelectorAll(".update-alert p").forEach((p) => {
                    p.style.display = "none";
                });

                // show course name select and add value to it
                document.querySelector(".update-alert .course").style.display = "block";
                document.querySelector(".update-alert .course select").value = 
                                        appointments[day_select.value.toLowerCase()][Number(appointment_select.value) - 1]['courseName'];
                
                // show doc name field and add value to it
                document.querySelector(".update-alert .d-name").style.display = "block";
                document.querySelector(".update-alert .d-name input").value = 
                                        appointments[day_select.value.toLowerCase()][Number(appointment_select.value) - 1]['docName'];
        
                // show place input and add value to it
                document.querySelector(".update-alert .place").style.display = "block";
                document.querySelector(".update-alert .place input").value =        
                                        appointments[day_select.value.toLowerCase()][Number(appointment_select.value) - 1]['place'];

                // remove first two field
                document.querySelector(".update-alert .time").style.display = "none"; 
                document.querySelector(".update-alert .day").style.display = "none"; 

                // show save btn and remove check btn
                document.querySelector(".update-alert .save").style.display = "block";
                document.querySelector(".update-alert .check").style.display = "none";
            } else {
                // show msg if appoinment is not exist
                document.querySelector(".update-alert > div > p").textContent = "Error: This appointment is not exist.";
                document.querySelector(".update-alert > div > p").style.display = 'inline';
            }
        } else {
            // show msg if day select is empty
            document.querySelector(".update-alert .day p").textContent = "Please, select day.";
            document.querySelector(".update-alert .day p").style.display = 'inline';
        }
    } else {
        // show msg if appointment select is empty
        document.querySelector(".update-alert .time p").textContent = "Please, select appointment.";
        document.querySelector(".update-alert .time p").style.display = 'inline';
    }
});


/* -------------------------------- save update Appointment -------------------------------- */
let btn_save_update = document.querySelector(".update-alert .save");

btn_save_update.addEventListener("click",() => {
    // get appointment from local storage
    let appointments = JSON.parse(localStorage.appointments);

    // get all field
    let appointment_select = document.querySelector(".update-alert .time select");
    let day_select = document.querySelector(".update-alert .day select");
    let course_select = document.querySelector(".update-alert .course select");
    let doc_input = document.querySelector(".update-alert .d-name input");
    let place_input = document.querySelector(".update-alert .place input");

    // check if course select is empty
    if (course_select.value !== "null"){
        // remove all msg
        document.querySelectorAll(".update-alert p").forEach((p) => {
            p.style.display = "none";
        });

        // check if doc name input is empty
        if (doc_input.value !== "" && doc_input.value.includes("Dr. ")){
            // remove all msg
            document.querySelectorAll(".update-alert p").forEach((p) => {
                p.style.display = "none";
            });

            // check if place input is empty
            if (place_input.value !== ''){
                // change data in particular appointment
                appointments[day_select.value.toLowerCase()][Number(appointment_select.value) - 1]['courseName'] = course_select.value;
                appointments[day_select.value.toLowerCase()][Number(appointment_select.value) - 1]['docName'] = doc_input.value;
                appointments[day_select.value.toLowerCase()][Number(appointment_select.value) - 1]['place'] = place_input.value;

                // return appointments to local storage
                localStorage.appointments = JSON.stringify(appointments);

                // reload page
                location.reload(); 
            } else {
                // add msg to appointment div
                document.querySelector(".add-alert .place p").textContent = "Error: Please, Enter doc name as \'Dr.****\'";
                document.querySelector(".add-alert .place p").style.display = "inline";
            }
        } else if (!doc_input.value.includes("Dr. ")){
            // add msg to appointment div
            document.querySelector(".add-alert .d-name p").textContent = "Error: Please, Enter doc name as \'Dr.****\'";
            document.querySelector(".add-alert .d-name p").style.display = "inline";
        } else {
            // add msg to appointment div
            document.querySelector(".add-alert .d-name p").textContent = "Please, Enter doc name.";
            document.querySelector(".add-alert .d-name p").style.display = "inline";
        }
    } else {
        // show msg if appointment select is empty
        document.querySelector(".update-alert .course p").textContent = "Please, select course name.";
        document.querySelector(".update-alert .course p").style.display = 'inline';
    }
});


/* -------------------------------- delete Appointment -------------------------------- */
let btn_del = document.querySelector(".delete");

btn_del.addEventListener("click",() => {
    let appointments = {
        saturday: [
            {courseName: '',docName: '',place: ''},
            {courseName: '',docName: '',place: ''},
            {courseName: '',docName: '',place: ''},
            {courseName: '',docName: '',place: ''},
            {courseName: '',docName: '',place: ''}
        ],
        sunday: [
            {courseName: '',docName: '',place: ''},
            {courseName: '',docName: '',place: ''},
            {courseName: '',docName: '',place: ''},
            {courseName: '',docName: '',place: ''},
            {courseName: '',docName: '',place: ''}
        ],
        monday: [
            {courseName: '',docName: '',place: ''},
            {courseName: '',docName: '',place: ''},
            {courseName: '',docName: '',place: ''},
            {courseName: '',docName: '',place: ''},
            {courseName: '',docName: '',place: ''}
        ],
        tuesday: [
            {courseName: '',docName: '',place: ''},
            {courseName: '',docName: '',place: ''},
            {courseName: '',docName: '',place: ''},
            {courseName: '',docName: '',place: ''},
            {courseName: '',docName: '',place: ''}
        ],
        wednesday: [
            {courseName: '',docName: '',place: ''},
            {courseName: '',docName: '',place: ''},
            {courseName: '',docName: '',place: ''},
            {courseName: '',docName: '',place: ''},
            {courseName: '',docName: '',place: ''}
        ],
        thursday: [
            {courseName: '',docName: '',place: ''},
            {courseName: '',docName: '',place: ''},
            {courseName: '',docName: '',place: ''},
            {courseName: '',docName: '',place: ''},
            {courseName: '',docName: '',place: ''}
        ],
        friday: [
            {courseName: '',docName: '',place: ''},
            {courseName: '',docName: '',place: ''},
            {courseName: '',docName: '',place: ''},
            {courseName: '',docName: '',place: ''},
            {courseName: '',docName: '',place: ''}
        ],
    };

    if (localStorage.appointments !== JSON.stringify(appointments)){
        // show alert and change page scrolling
        document.querySelector(".delete-alert").style.display = "flex";
        document.body.style.overflow = "hidden";
        document.documentElement.scrollTop = 0;
    } else {
        // add msg error if appointments is not exist
        document.querySelector("#container > p").textContent = "Error: You don't enter any appointment yet."
        document.querySelector("#container > p").style.display = "block";
    }
});


/* -------------------------------- close delete Appointment -------------------------------- */
let btn_close_del = document.querySelector(".delete-alert .close-model");

btn_close_del.addEventListener("click",() => {
    // clear all input
    document.querySelector(`.delete-alert .time select option[value = 'null']`).selected = true;
    document.querySelector(`.delete-alert .day select option[value = 'null']`).selected = true; 

    // remove all msg
    document.querySelectorAll(`.delete-alert p`).forEach((p) => {
        p.style.display = "none";
    });

    // remove alert and change page scrolling
    document.querySelector(`.delete-alert`).style.display = "none";
    document.body.style.overflow = "visible";
    document.documentElement.scrollTop = 0;
});


/* -------------------------------- save delete Appointment -------------------------------- */
let btn_save_del = document.querySelector(".delete-alert .save");

btn_save_del.addEventListener("click",() => {
    // get two select 
    let appointment_select = document.querySelector(".delete-alert .time select");
    let day_select = document.querySelector(".delete-alert .day select");

    // check if appointment select is empty
    if (appointment_select.value !== 'null'){
        // remove all msg
        document.querySelectorAll(`.delete-alert p`).forEach((p) => {
            p.style.display = "none";
        });

        // check if day select is empty
        if (day_select.value !== 'null'){
            // remove all msg
            document.querySelectorAll(`.delete-alert p`).forEach((p) => {
                p.style.display = "none";
            });

            // get appointment data from local storage
            let appointments = JSON.parse(localStorage.appointments);

            // check if appointment is not exist
            if (appointments[day_select.value.toLowerCase()][Number(appointment_select.value) - 1]['courseName'] !== ""){
                // change data in particular appointment
                appointments[day_select.value.toLowerCase()][Number(appointment_select.value) - 1]['courseName'] = '';
                appointments[day_select.value.toLowerCase()][Number(appointment_select.value) - 1]['docName'] = '';
                appointments[day_select.value.toLowerCase()][Number(appointment_select.value) - 1]['place'] = '';

                // return appointments to local storage
                localStorage.appointments = JSON.stringify(appointments);

                // reload page
                location.reload(); 
            } else {
                // show msg if appointment select is empty
                document.querySelector(".delete-alert > div > p").textContent = "Error: This appointment is not exist.";
                document.querySelector(".delete-alert > div > p").style.display = 'inline';
            }
        } else {
            // show msg if appointment select is empty
            document.querySelector(".delete-alert .day p").textContent = "Please, select day.";
            document.querySelector(".delete-alert .day p").style.display = 'inline';
        }
    } else {
        // show msg if appointment select is empty
        document.querySelector(".delete-alert .time p").textContent = "Please, select appointment.";
        document.querySelector(".delete-alert .time p").style.display = 'inline';
    }
});


/* -------------------------------- load table data Appointment -------------------------------- */
let appointments = {
    saturday: [
        {courseName: '',docName: '',place: ''},
        {courseName: '',docName: '',place: ''},
        {courseName: '',docName: '',place: ''},
        {courseName: '',docName: '',place: ''},
        {courseName: '',docName: '',place: ''}
    ],
    sunday: [
        {courseName: '',docName: '',place: ''},
        {courseName: '',docName: '',place: ''},
        {courseName: '',docName: '',place: ''},
        {courseName: '',docName: '',place: ''},
        {courseName: '',docName: '',place: ''}
    ],
    monday: [
        {courseName: '',docName: '',place: ''},
        {courseName: '',docName: '',place: ''},
        {courseName: '',docName: '',place: ''},
        {courseName: '',docName: '',place: ''},
        {courseName: '',docName: '',place: ''}
    ],
    tuesday: [
        {courseName: '',docName: '',place: ''},
        {courseName: '',docName: '',place: ''},
        {courseName: '',docName: '',place: ''},
        {courseName: '',docName: '',place: ''},
        {courseName: '',docName: '',place: ''}
    ],
    wednesday: [
        {courseName: '',docName: '',place: ''},
        {courseName: '',docName: '',place: ''},
        {courseName: '',docName: '',place: ''},
        {courseName: '',docName: '',place: ''},
        {courseName: '',docName: '',place: ''}
    ],
    thursday: [
        {courseName: '',docName: '',place: ''},
        {courseName: '',docName: '',place: ''},
        {courseName: '',docName: '',place: ''},
        {courseName: '',docName: '',place: ''},
        {courseName: '',docName: '',place: ''}
    ],
    friday: [
        {courseName: '',docName: '',place: ''},
        {courseName: '',docName: '',place: ''},
        {courseName: '',docName: '',place: ''},
        {courseName: '',docName: '',place: ''},
        {courseName: '',docName: '',place: ''}
    ],
};

if (localStorage.appointments !== JSON.stringify(appointments)){
    // get appointment from local storage
    appointments = JSON.parse(localStorage.appointments);

    // select all tr
    document.querySelectorAll(".table tr").forEach((tr) => {
        let piece = [
            {courseName: '',docName: '',place: ''},
            {courseName: '',docName: '',place: ''},
            {courseName: '',docName: '',place: ''},
            {courseName: '',docName: '',place: ''},
            {courseName: '',docName: '',place: ''}
        ];

        // check if day not have appointment
        if (JSON.stringify(appointments[`${tr.className}`]) !== JSON.stringify(piece)){
            tr.querySelectorAll("td").forEach((td,index) => {
                if (td.className !== 'day'){
                    piece = {courseName: '',docName: '',place: ''};

                    // check if appointment is empty
                    if (JSON.stringify(appointments[`${tr.className}`][index - 1]) !== JSON.stringify(piece)){
                        td.innerHTML = `
                            ${appointments[`${tr.className}`][index - 1]['courseName']}<br>
                            ${appointments[`${tr.className}`][index - 1]['docName']}<br>
                            ${appointments[`${tr.className}`][index - 1]['place']}
                        `;
                    }
                }
            });
        }
    });
}



if (document.querySelector("#container").scrollHeight > "550"){
    document.querySelector("#container").style.height = "fit-content";
}