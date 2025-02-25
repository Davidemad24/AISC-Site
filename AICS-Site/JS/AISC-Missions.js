/* -------------------------------- style for alret [with = 360 -> 400] -------------------------------- */
// for phone 
if (window.innerWidth >= 360 && window.innerWidth < 400){
    // alert style
    document.querySelector(".myAlert").style.width = "90%";
    document.querySelector(".myAlert").style.margin = "0 5%";
} // for tablet
else if (window.innerWidth >= 400 && window.innerWidth <= 800){
    // alert style
    document.querySelector(".myAlert").style.width = "70%";
    document.querySelector(".myAlert").style.margin = "0 15%";
}

/* -------------------------------- load mission script -------------------------------- */
function loadMission(){
    const missions = (localStorage.missions) ? JSON.parse(localStorage.missions) : {study: [],course: [],section: [],lecture: []};

    // declartion for list of msg
    let msgs = [
        "Keep pushing forward, You're closer than you think.",
        "Believe in yourself; You are capable of amazing things.",
        "Every chanllenge is a step toward growth, Keep going.",
        "You are stronger than any abstacle in your way.",
        "Success starts with believing in yourself, Keep moving.",
        "Your hard work will pay off-stay determined.",
        "One step at a time, You are making progress.",
        "Don't stop now; Your breakthrough is coming.",
        "You are unstoppable, Keep shining."
    ];

    // check study mission list
    if (missions.study.length !== 0){
        // get study mission div
        let study_div = document.querySelector(".missions .study .tasks p");

        missions.study.forEach((task,index) => {
            let task_div = document.createElement("div");
            task_div.className = "task";
            task_div.innerHTML = `
                <div class="task-head">
                    <h2 style = "width: 40px">#${index+1}</h2>
                    <div class="form-control text"><span class="priority text-primary">#${index+1} : </span>${task['missionText']}</div>
                </div>
                <div class="task-btn">
                    <div class="remove btn btn-danger">Remove</div>
                    <div class="finish btn btn-warning">Finish</div>
                </div>
            `;

            study_div.before(task_div);
        });

        // show msg if mission greater than or equal 4
        if (missions.study.length >= 4){
            document.querySelector(".missions .study .tasks p").textContent = `✅\"${msgs[Math.floor(Math.random() * msgs.length)]}\"`;
            document.querySelector(".missions .study .tasks p").style.display = "block";
        } else {
            document.querySelector(".missions .study .tasks p").style.display = "none";
        }
    } else {
        document.querySelector(".missions .study").style.display = "none";
        document.querySelectorAll(".missions hr").forEach((hr,index) => {
            if (index === 0){
                hr.style.display = "none";
            }
        });
    }

    // check course mission list
    if (missions.course.length !== 0){
        // get course mission div
        let course_div = document.querySelector(".missions .course .tasks p");

        missions.course.forEach((task,index) => {
            let task_div = document.createElement("div");
            task_div.className = "task";
            task_div.innerHTML = `
                <div class="task-head">
                    <h2 style = "width: 40px">#${index+1}</h2>
                    <div class="form-control text"><span class="priority text-primary">#${index+1} : </span>${task['missionText']}</div>
                </div>
                <div class="task-btn">
                    <div class="remove btn btn-danger">Remove</div>
                    <div class="finish btn btn-warning">Finish</div>
                </div>
            `;
            course_div.before(task_div);
        });

        // show msg if mission greater than or equal 4
        if (missions.course.length >= 4){
            document.querySelector(".missions .course .tasks p").textContent = `✅\"${msgs[Math.floor(Math.random() * msgs.length)]}\"`;
            document.querySelector(".missions .course .tasks p").style.display = "block";
        } else {
            document.querySelector(".missions .course .tasks p").style.display = "none";
        }
    } else {
        document.querySelector(".missions .course").style.display = "none";
        document.querySelectorAll(".missions hr").forEach((hr,index) => {
            if (index === 1){
                hr.style.display = "none";
            }
        });
    }

    // check section mission list
    if (missions.section.length !== 0){
        // get section mission div
        let section_div = document.querySelector(".missions .section .tasks p");

        missions.section.forEach((task,index) => {
            let task_div = document.createElement("div");
            task_div.className = "task";
            task_div.innerHTML = `
                <div class="task-head">
                    <h2 style = "width: 40px">#${index+1}</h2>
                    <div class="form-control text"><span class="priority text-primary">#${index+1} : </span>${task['missionText']}</div>
                </div>
                <div class="task-btn">
                    <div class="remove btn btn-danger">Remove</div>
                    <div class="finish btn btn-warning">Finish</div>
                </div>
            `;
            section_div.before(task_div);
        });

        // show msg if mission greater than or equal 4
        if (missions.section.length >= 4){
            document.querySelector(".missions .section .tasks p").textContent = `✅\"${msgs[Math.floor(Math.random() * msgs.length)]}\"`;
            document.querySelector(".missions .section .tasks p").style.display = "block";
        } else {
            document.querySelector(".missions .section .tasks p").style.display = "none";
        }
    } else {
        document.querySelector(".missions .section").style.display = "none";
        document.querySelectorAll(".missions hr").forEach((hr,index) => {
            if (index === 2){
                hr.style.display = "none";
            }
        });
    }

    // check lecture mission list
    if (missions.lecture.length !== 0){
        // get lecture mission div
        let lecture_div = document.querySelector(".missions .lecture .tasks p");

        missions.lecture.forEach((task,index) => {
            let task_div = document.createElement("div");
            task_div.className = "task";
            task_div.innerHTML = `
                <div class="task-head">
                    <h2 style = "width: 40px">#${index+1}</h2>
                    <div class="form-control text"><span class="priority text-primary">#${index+1} : </span>${task['missionText']}</div>
                </div>
                <div class="task-btn">
                    <div class="remove btn btn-danger">Remove</div>
                    <div class="finish btn btn-warning">Finish</div>
                </div>
            `;
            lecture_div.before(task_div);
        });

        // show msg if mission greater than or equal 4
        if (missions.lecture.length >= 4){
            document.querySelector(".missions .lecture .tasks p").textContent = `✅\"${msgs[Math.floor(Math.random() * msgs.length)]}\"`;
            document.querySelector(".missions .lecture .tasks p").style.display = "block";
        } else {
            document.querySelector(".missions .lecture .tasks p").style.display = "none";
        }
    } else {
        document.querySelector(".missions .lecture").style.display = "none";
        if (missions.section.length !== 0){
            document.querySelectorAll("hr").forEach((hr,index) => {
                if (index === 2){
                    hr.style.display = "none";
                }
            });
        } else if (missions.course.length !== 0){
            document.querySelectorAll("hr").forEach((hr,index) => {
                if (index === 1){
                    hr.style.display = "none";
                }
            });
        } else if (missions.study.length !== 0){
            document.querySelectorAll("hr").forEach((hr,index) => {
                if (index === 0){
                    hr.style.display = "none";
                }
            });
        }
    }
}

loadMission();

/* -------------------------------- Search bar script -------------------------------- */
let input = document.querySelector("#container .head form input");

    // get missions from local storage
    let missions_load = (localStorage.missions) ? JSON.parse(localStorage.missions) 
    : {study: [],course: [],section: [],lecture: []};

    // create new div for all mission type
    let div = document.createElement("div");
    div.className = "s-missions";

    // load study mission
    missions_load.study.forEach((mission,index) => {
        let task_div = document.createElement("div");
        task_div.classList = "task study";
        task_div.innerHTML = `
            <div class="task-head">
            <h2 style = "width: 250px">#${index+1} in Study</h2>
            <div class="form-control text"><span class="priority text-primary">#${index+1} in Study : </span>${mission['missionText']}</div>
            </div>
            <div class="task-btn">
            <div class="remove btn btn-danger">Remove</div>
            <div class="finish btn btn-warning">Finish</div>
            </div>
        `;
        div.appendChild(task_div);
    });

    // load course mission
    missions_load.course.forEach((mission,index) => {
        let task_div = document.createElement("div");
        task_div.classList = "task course";
        task_div.innerHTML = `
        <div class="task-head">
            <h2 style = "width: 250px">#${index+1} in Course</h2>
            <div class="form-control text"><span class="priority text-primary">#${index+1} in Course : </span>${mission['missionText']}</div>
            </div>
            <div class="task-btn">
            <div class="remove btn btn-danger">Remove</div>
            <div class="finish btn btn-warning">Finish</div>
            </div>
        `;
        div.appendChild(task_div);
    });

    // load section mission
    missions_load.section.forEach((mission,index) => {
        let task_div = document.createElement("div");
        task_div.classList = "task section";
        task_div.innerHTML = `
        <div class="task-head">
        <h2 style = "width: 250px">#${index+1} in Section</h2>
        <div class="form-control text"><span class="priority text-primary">#${index+1} in Section : </span>${mission['missionText']}</div>
        </div>
        <div class="task-btn">
        <div class="remove btn btn-danger">Remove</div>
        <div class="finish btn btn-warning">Finish</div>
        </div>
        `;
        div.appendChild(task_div);
    });

    // load lecture mission
    missions_load.lecture.forEach((mission,index) => {
        let task_div = document.createElement("div");
        task_div.classList = "task lecture";
        task_div.innerHTML = `
            <div class="task-head">
            <h2 style = "width: 250px">#${index+1} in Lecture</h2>
            <div class="form-control text"><span class="priority text-primary">#${index+1} in Lecture : </span>${mission['missionText']}</div>
            </div>
            <div class="task-btn">
            <div class="remove btn btn-danger">Remove</div>
            <div class="finish btn btn-warning">Finish</div>
            </div>
        `;
        div.appendChild(task_div);
    });

    // get finished missions
    let mission_finished_load = (localStorage.mission_finished) ? JSON.parse(localStorage.mission_finished) : []

input.addEventListener("input",() => {
    if (input.value !== ""){
        // remove mission div page and remove msg
        document.querySelector(".missions").style.display = "none";
        document.querySelector("#container > p").style.display = "none";

        // add searching mission div to body after head
        document.querySelector(".head").after(div);

        // add remove script for each btn
        if (missions_load.study.length !== 0){
            // get study mission botton remove
            let btns_remove = document.querySelectorAll(".s-missions .study .remove");

            // get mission that we will remove it
            btns_remove.forEach((btn,index) => {
                btn.addEventListener("click",() => {
                    // remove mission from list
                    missions_load.study = missions_load.study.filter(mission => JSON.stringify(mission) !== JSON.stringify(missions_load.study[index]));

                    // return new object to local storage
                    localStorage.missions = JSON.stringify(missions_load);

                    // reload page
                    location.reload();
                });
            });
        }
        if (missions_load.course.length !== 0){
            // get study mission botton remove
            let btns_remove = document.querySelectorAll(".s-missions .course .remove");

            // get mission that we will remove it
            btns_remove.forEach((btn,index) => {
                btn.addEventListener("click",() => {
                    // remove mission from list
                    missions_load.course = missions_load.course.filter(mission => JSON.stringify(mission) !== JSON.stringify(missions_load.course[index]));
                    console.log(missions_load);

                    // return new object to local storage
                    localStorage.missions = JSON.stringify(missions_load);

                    // reload page
                    location.reload();
                });
            });
        }
        if (missions_load.section.length !== 0){
            // get section mission botton remove
            let btns_remove = document.querySelectorAll(".s-missions .section .remove");

            // get mission that we will remove it
            btns_remove.forEach((btn,index) => {
                btn.addEventListener("click",() => {
                    // remove mission from list
                    missions_load.section = missions_load.section.filter(mission => JSON.stringify(mission) !== JSON.stringify(missions_load.section[index]));

                    // return new object to local storage
                    localStorage.missions = JSON.stringify(missions_load);

                    // reload page
                    location.reload();
                });
            });
        }
        if (missions_load.lecture.length !== 0){
            // get lecture mission botton remove
            let btns_remove = document.querySelectorAll(".s-missions .lecture .remove");

            // get mission that we will remove it
            btns_remove.forEach((btn,index) => {
                btn.addEventListener("click",() => {
                    // remove mission from list
                    missions_load.lecture = missions_load.lecture.filter(mission => JSON.stringify(mission) !== JSON.stringify(missions_load.lecture[index]));

                    // return new object to local storage
                    localStorage.missions = JSON.stringify(missions_load);

                    // reload page
                    location.reload();
                });
            });
        }

        // add finish script for each btn
        if (missions.study.length !== 0){
            // get all finish btn in study div and all missions
            let btns_finish = document.querySelectorAll(".s-mission .study .finish");
            let study_missions = document.querySelectorAll(".s-missions .study .text");

            // get mission that we had finished it
            btns_finish.forEach((btn,index) => {
                btn.addEventListener("click",() => {
                    // add mission to finish list
                    mission_finished_load[mission_finished_load.length] = {
                        mission_name: missions.study[index]['missionText'],
                        mission_type: "Study",
                        start_date: missions.study[index]['startDate'],
                        end_date: new Date().toLocaleDateString()
                    }

                    // remove mission
                    missions.study = missions.study.filter(mission => JSON.stringify(mission) !== JSON.stringify(missions.study[index]));

                    // return two list to local storage
                    localStorage.missions = JSON.stringify(missions);
                    localStorage.mission_finished = JSON.stringify(mission_finished_load);

                    // reload page
                    location.reload();
                });
            }); 
        }
        if (missions.course.length !== 0){
            // get all finish btn in course div and all missions
            let btns_finish = document.querySelectorAll(".s-missions .course .finish");
            let course_missions = document.querySelectorAll(".s-missions .course .text");

            // get mission that we had finished it
            btns_finish.forEach((btn,index) => {
                btn.addEventListener("click",() => {
                    // add mission to finish list
                    mission_finished_load[mission_finished_load.length] = {
                        mission_name: missions.course[index]['missionText'],
                        mission_type: "Course",
                        start_date: missions.course[index]['startDate'],
                        end_date: new Date().toLocaleDateString()
                    }

                    // remove mission
                    missions.course = missions.course.filter(mission => JSON.stringify(mission) !== JSON.stringify(missions.course[index]));

                    // return two list to local storage
                    localStorage.missions = JSON.stringify(missions);
                    localStorage.mission_finished = JSON.stringify(mission_finished_load);

                    // reload page
                    location.reload();
                });
            }); 
        }
        if (missions.section.length !== 0){
            // get all finish btn in section div and all missions
            let btns_finish = document.querySelectorAll(".s-missions .section .finish");
            let section_missions = document.querySelectorAll(".s-missions .section .text");

            // get mission that we had finished it
            btns_finish.forEach((btn,index) => {
                btn.addEventListener("click",() => {
                    // add mission to finish list
                    mission_finished_load[mission_finished_load.length] = {
                        mission_name: missions.section[index]['missionText'],
                        mission_type: "Section",
                        start_date: missions.section[index]['startDate'],
                        end_date: new Date().toLocaleDateString()
                    }

                    // remove mission
                    missions.section = missions.section.filter(mission => JSON.stringify(mission) !== JSON.stringify(missions.section[index]));

                    // return two list to local storage
                    localStorage.missions = JSON.stringify(missions);
                    localStorage.mission_finished = JSON.stringify(mission_finished_load);

                    // reload page
                    location.reload();
                });
            }); 
        }
        if (missions.lecture.length !== 0){
            // get all finish btn in lecture div and all missions
            let btns_finish = document.querySelectorAll(".s-missions .lecture .finish");
            let lecture_missions = document.querySelectorAll(".s-missions .lecture .text");

            // get mission that we had finished it
            btns_finish.forEach((btn,index) => {
                btn.addEventListener("click",() => {
                    // add mission to finish list
                    mission_finished_load[mission_finished_load.length] = {
                        mission_name: missions.lecture[index]['missionText'],
                        mission_type: "Lecture",
                        start_date: missions.lecture[index]['startDate'],
                        end_date: new Date().toLocaleDateString()
                    }

                    // remove mission
                    missions.lecture = missions.lecture.filter(mission => JSON.stringify(mission) !== JSON.stringify(missions.lecture[index]));

                    // return two list to local storage
                    localStorage.missions = JSON.stringify(missions);
                    localStorage.mission_finished = JSON.stringify(mission_finished_load);

                    // reload page
                    location.reload();
                });
            }); 
        }

        // get all missions name div
        let tasks = document.querySelectorAll(".s-missions .task");

        // check if input match mission name
        tasks.forEach((task) => {
            // remove priority form task
            let t_text = task.querySelector(".form-control").textContent.slice(task.querySelector(".form-control").textContent.indexOf(":") + 2);

            // check matching
            if (t_text.toLowerCase().includes(input.value.toLowerCase())){
                task.style.display = "flex";
                task.classList.remove("removed");   
            } else {
                task.style.display = "none";
                task.classList.add("removed");
            }
        });

        // fill page if mission is less
        if (document.querySelectorAll(".s-missions > div:not(.removed)").length > 6){
            document.querySelector(".s-missions").style.height = "fit-content";
        } else {
            document.querySelector(".s-missions").style.height = "48.1vh";
        }

        // check if user open page from phone
        if (window.innerWidth >= 360 && window.innerWidth < 400){
            // head style
            document.querySelectorAll(".s-missions .priority").forEach((p) => {
                p.style.display = "inline";
            });

            // fill page if mission is less
            if (document.querySelectorAll(".s-missions > div:not(.removed)").length > 3){
                document.querySelector(".s-missions").style.height = "fit-content";
            } else {
                document.querySelector(".s-missions").style.height = "41vh";
            }
        } // check if user open page form tablet
        else if (window.innerWidth >= 400 && window.innerWidth <= 800){
            // s missions
            document.querySelector(".s-missions").style.width = "95%";
            document.querySelector(".s-missions").style.margin = "0 3%";

            // missions name style
            document.querySelectorAll(".s-missions > div .form-control").forEach((div) => {
                div.style.width = "400px";
            });

            // missions searching style
            document.querySelectorAll(".s-missions > div h2").forEach((h2) => {
                h2.style.fontSize = "24px";
                h2.style.width = "140px";
            });
        }

        // show s-mission div if not showing
        document.querySelector(".s-missions").style.display = "block";
    } else {
        document.querySelector(".missions").style.display = "block";
        document.querySelector("#container > p").style.display = "block";
        document.querySelector(".s-missions").style.display = "none";
    }
});


/* -------------------------------- Add mission script -------------------------------- */
let btn_add = document.querySelector("#container .head form .btn");

btn_add.addEventListener("click",() => {
    document.documentElement.scrollTop = 0;
    document.querySelector("#container .dialog").style.display = "flex";
    document.querySelector("#container .dialog .myAlert").style.height = "fit-content";
    document.body.style.overflow = "hidden";
});


/* -------------------------------- close add mission script -------------------------------- */
let btn_close = document.querySelector("#container .dialog .myAlert .model-footer .close-model");

function closeModel(){
    // clear data form inputs
    document.querySelector(".myAlert #name").value = "";
    document.querySelector(".myAlert #priority").value = "";

    // remove all msg
    let Ps = document.querySelectorAll(".myAlert p");
    Ps.forEach((p) => {
        p.style.display = "none";
    });

    // remove checked field
    let checkedType = document.querySelector(".mission-type input[name = 'm-type']:checked");
    if (checkedType !== null){
        checkedType.checked = false;
    }

    document.querySelector("#container .dialog").style.display = "none";
    document.body.style.overflow = "visible";
}

btn_close.addEventListener("click",() => {
    closeModel();
});


/* -------------------------------- save mission -------------------------------- */
let btn_save = document.querySelector("#container .dialog .myAlert .model-footer .save");

btn_save.addEventListener("click",() => {
    // get missions
    let missions = (localStorage.missions) ? JSON.parse(localStorage.missions) : {study: [],course: [],section: [],lecture: []};
    if (localStorage.missions){
        missions = JSON.parse(localStorage.missions);
    }

    // get radio value
    const radioValue = document.querySelector("input[name='m-type']:checked");

    // get mission text and priority and prioity div
    const missionText = document.querySelector("#name").value;
    const priority = document.querySelector("#priority").value;

    if (radioValue !== null){
        if (radioValue.value === "study"){
            // remove all msg appeared 
            document.querySelectorAll(".myAlert p").forEach((msg) => {
                msg.style.display = "none";
            });

            // check priority 
            if (priority <= missions.study.length + 1 && priority != "" && priority != 0){
                // remove all msg appeared 
                document.querySelectorAll(".myAlert p").forEach((msg) => {
                    msg.style.display = "none";
                });

                // check if mission is exist
                let dup = false;
                missions.study.forEach((mission) => {
                    if (missionText.toLowerCase() === mission['missionText'].toLowerCase()){
                        dup = true;
                    }
                });
    
                // check if mission input is empty
                if (missionText !== "" && !dup){
                    // shift all data in list for new mission
                    for (let i = missions.study.length;i > priority - 1;i--){
                        missions.study[i] = missions.study[i - 1];
                    }

                    // add new mission 
                    missions.study[priority - 1] = {missionText: missionText,startDate: new Date().toLocaleDateString()};

                    // add mission object to local storage
                    localStorage.setItem("missions",JSON.stringify(missions));

                    // reload page 
                    location.reload();
                } else if (dup){
                    // add message error for mission input div
                    document.querySelector(".myAlert .name p").textContent = "Error: Mission is aleady exist.";
                    document.querySelector(".myAlert .name p").style.display = "inline";
                    document.querySelector(".myAlert").style.height = "60%";
                } else {
                    // add message error for mission input div
                    document.querySelector(".myAlert .name p").textContent = "Please, Enter your mission.";
                    document.querySelector(".myAlert .name p").style.display = "inline";
                    document.querySelector(".myAlert").style.height = "60%";
                }
            } else if (priority == 0 && priority !== ""){
                // add message error for priority input div
                document.querySelector(".myAlert .priority p").textContent = "Error: You can not enter zero for priority.   ";
                document.querySelector(".myAlert .priority p").style.display = "inline";
                document.querySelector(".myAlert").style.height = "60%";
            } else if (!(priority <= missions.lecture.length + 1) && priority != "" && priority != 0) {
                // add message error for priority input div
                document.querySelector(".myAlert .priority p").textContent = "Error: Invalid priority in study list.";
                document.querySelector(".myAlert .priority p").style.display = "inline";
                document.querySelector(".myAlert").style.height = "60%";
            } else {
                // add message error for priority input div
                document.querySelector(".myAlert .priority p").textContent = "Please, Enter priority of mission.";
                document.querySelector(".myAlert .priority p").style.display = "inline";
                document.querySelector(".myAlert").style.height = "60%";
            }
        } else if (radioValue.value === "course"){
            // remove all msg appeared 
            document.querySelectorAll(".myAlert p").forEach((msg) => {
                msg.style.display = "none";
            });

            // check priority 
            if (priority <= missions.course.length + 1 && priority != "" && priority != 0){
                // remove all msg appeared 
                document.querySelectorAll(".myAlert p").forEach((msg) => {
                    msg.style.display = "none";
                });

                // check if mission is exist
                let dup = false;
                missions.course.forEach((mission) => {
                    if (missionText.toLowerCase() === mission['missionText'].toLowerCase()){
                        dup = true;
                    }
                });
    
                // check if mission input is empty
                if (missionText !== "" && !dup){
                    // shift all data in list for new mission
                    for (let i = missions.course.length;i > priority - 1;i--){
                        missions.course[i] = missions.course[i - 1];
                    }

                    // add new mission 
                    missions.course[priority - 1] = {missionText: missionText,startDate: new Date().toLocaleDateString()};

                    // add mission object to local storage
                    localStorage.setItem("missions",JSON.stringify(missions));

                    // reload page 
                    location.reload();
                } else if (dup){
                    // add message error for mission input div
                    document.querySelector(".myAlert .name p").textContent = "Error: Mission is aleady exist.";
                    document.querySelector(".myAlert .name p").style.display = "inline";
                    document.querySelector(".myAlert").style.height = "60%";
                } else {
                    // add message error for mission input div
                    document.querySelector(".myAlert .name p").textContent = "Please, Enter your mission.";
                    document.querySelector(".myAlert .name p").style.display = "inline";
                    document.querySelector(".myAlert").style.height = "60%";
                }
            } else if (priority == 0 && priority !== ""){
                // add message error for priority input div
                document.querySelector(".myAlert .priority p").textContent = "Error: You can not enter zero for priority.   ";
                document.querySelector(".myAlert .priority p").style.display = "inline";
                document.querySelector(".myAlert").style.height = "60%";
            } else if (!(priority <= missions.lecture.length + 1) && priority != "" && priority != 0) {
                // add message error for priority input div
                document.querySelector(".myAlert .priority p").textContent = "Error: Invalid priority in course list.";
                document.querySelector(".myAlert .priority p").style.display = "inline";
                document.querySelector(".myAlert").style.height = "60%";
            } else {
                // add message error for priority input div
                document.querySelector(".myAlert .priority p").textContent = "Please, Enter priority of mission.";
                document.querySelector(".myAlert .priority p").style.display = "inline";
                document.querySelector(".myAlert").style.height = "60%";
            }
        } else if (radioValue.value === "section"){
            // remove all msg appeared 
            document.querySelectorAll(".myAlert p").forEach((msg) => {
                msg.style.display = "none";
            });

            // check priority 
            if (priority <= missions.section.length + 1 && priority != "" && priority != 0){
                // remove all msg appeared 
                document.querySelectorAll(".myAlert p").forEach((msg) => {
                    msg.style.display = "none";
                });

                // check if mission is exist
                let dup = false;
                missions.section.forEach((mission) => {
                    if (missionText.toLowerCase() === mission['missionText'].toLowerCase()){
                        dup = true;
                    }
                });
    
                // check if mission input is empty
                if (missionText !== "" && !dup){
                    // shift all data in list for new mission
                    for (let i = missions.section.length;i > priority - 1;i--){
                        missions.section[i] = missions.section[i - 1];
                    }

                    // add new mission 
                    missions.section[priority - 1] = {missionText: missionText,startDate: new Date().toLocaleDateString()};

                    // add mission object to local storage
                    localStorage.setItem("missions",JSON.stringify(missions));

                    // reload page 
                    location.reload();
                } else if (dup){
                    // add message error for mission input div
                    document.querySelector(".myAlert .name p").textContent = "Error: Mission is aleady exist.";
                    document.querySelector(".myAlert .name p").style.display = "inline";
                    document.querySelector(".myAlert").style.height = "60%";
                } else {
                    // add message error for mission input div
                    document.querySelector(".myAlert .name p").textContent = "Please, Enter your mission.";
                    document.querySelector(".myAlert .name p").style.display = "inline";
                    document.querySelector(".myAlert").style.height = "60%";
                }
            } else if (priority == 0 && priority !== ""){
                // add message error for priority input div
                document.querySelector(".myAlert .priority p").textContent = "Error: You can not enter zero for priority.   ";
                document.querySelector(".myAlert .priority p").style.display = "inline";
                document.querySelector(".myAlert").style.height = "60%";
            } else if (!(priority <= missions.lecture.length + 1) && priority != "" && priority != 0) {
                // add message error for priority input div
                document.querySelector(".myAlert .priority p").textContent = "Error: Invalid priority in section list.";
                document.querySelector(".myAlert .priority p").style.display = "inline";
                document.querySelector(".myAlert").style.height = "60%";
            } else {
                // add message error for priority input div
                document.querySelector(".myAlert .priority p").textContent = "Please, Enter priority of mission.";
                document.querySelector(".myAlert .priority p").style.display = "inline";
                document.querySelector(".myAlert").style.height = "60%";
            }
        } else {
            // remove all msg appeared 
            document.querySelectorAll(".myAlert p").forEach((msg) => {
                msg.style.display = "none";
            });

            // check priority 
            if (priority <= missions.lecture.length + 1 && priority != "" && priority != 0){
                // remove all msg appeared 
                document.querySelectorAll(".myAlert p").forEach((msg) => {
                    msg.style.display = "none";
                });

                // check if mission is exist
                let dup = false;
                missions.lecture.forEach((mission) => {
                    if (missionText.toLowerCase() === mission['missionText'].toLowerCase()){
                        dup = true;
                    }
                });
    
                // check if mission input is empty
                if (missionText !== ""){
                    // shift all data in list for new mission
                    for (let i = missions.lecture.length;i > priority - 1;i--){
                        missions.lecture[i] = missions.lecture[i - 1];
                    }

                    // add new mission 
                    missions.lecture[priority - 1] = {missionText: missionText,startDate: new Date().toLocaleDateString()};

                    // add mission object to local storage
                    localStorage.setItem("missions",JSON.stringify(missions));

                    // reload page 
                    location.reload();
                } else if (dup){
                    // add message error for mission input div
                    document.querySelector(".myAlert .name p").textContent = "Error: Mission is aleady exist.";
                    document.querySelector(".myAlert .name p").style.display = "inline";
                    document.querySelector(".myAlert").style.height = "60%";
                } else {
                    // add message error for mission input div
                    document.querySelector(".myAlert .name p").textContent = "Please, Enter your mission.";
                    document.querySelector(".myAlert .name p").style.display = "inline";
                    document.querySelector(".myAlert").style.height = "60%";
                }
            } else if (priority == 0 && priority !== ""){
                // add message error for priority input div
                document.querySelector(".myAlert .priority p").textContent = "Error: You can not enter zero for priority.   ";
                document.querySelector(".myAlert .priority p").style.display = "inline";
                document.querySelector(".myAlert").style.height = "60%";
            } else if (!(priority <= missions.lecture.length + 1) && priority != "" && priority != 0) {
                // add message error for priority input div
                document.querySelector(".myAlert .priority p").textContent = "Error: Invalid priority in lecture list.";
                document.querySelector(".myAlert .priority p").style.display = "inline";
                document.querySelector(".myAlert").style.height = "60%";
            } else {
                // add message error for priority input div
                document.querySelector(".myAlert .priority p").textContent = "Please, Enter priority of mission.";
                document.querySelector(".myAlert .priority p").style.display = "inline";
                document.querySelector(".myAlert").style.height = "60%";
            }
        }
    } else {
        // add message error for mission type div
        document.querySelector(".myAlert .mission-type p").textContent = "Please, select mission type.";
        document.querySelector(".myAlert .mission-type p").style.display = "inline";
        document.querySelector(".myAlert").style.height = "60%";
    }
});


/* -------------------------------- remove mission -------------------------------- */
let missions = (localStorage.missions) ? JSON.parse(localStorage.missions) : {study: [],course: [],section: [],lecture: []};

// for study mission
if (missions.study.length !== 0){
    // get study mission botton remove
    let btns_remove = document.querySelectorAll(".study .tasks .remove");

    // get mission that we will remove it
    btns_remove.forEach((btn,index) => {
        btn.addEventListener("click",() => {
            // remove mission from list
            missions.study = missions.study.filter(mission => JSON.stringify(mission) !== JSON.stringify(missions.study[index]));

            // return new object to local storage
            localStorage.missions = JSON.stringify(missions);

            // reload page
            location.reload();
        });
    });
}

// for course mission
if (missions.course.length !== 0){
    // get course mission botton remove
    let btns_remove = document.querySelectorAll(".course .tasks .remove");

    // get mission that we will remove it
    btns_remove.forEach((btn,index) => {
        btn.addEventListener("click",() => {
            // remove mission from list
            missions.course = missions.course.filter(mission => JSON.stringify(mission) !== JSON.stringify(missions.course[index]));

            // return new object to local storage
            localStorage.missions = JSON.stringify(missions);

            // reload page
            location.reload();
        });
    });
}

// for section mission
if (missions.section.length !== 0){
    // get section mission remove botton
    let btns_remove = document.querySelectorAll(".section .tasks .remove");

    // get mission that we will remove it
    btns_remove.forEach((btn,index) => {
        btn.addEventListener("click",() => {
            // filter list 
            missions.section = missions.section.filter(mission => JSON.stringify(mission) !== JSON.stringify(missions.section[index]));

            // return new list section
            localStorage.missions = JSON.stringify(missions);

            // reload page
            location.reload();
        });
    });
}

// for lecture mission
if (missions.lecture.length !== 0){
    // get lecture mission remove botton
    let btns_remove = document.querySelectorAll(".lecture .tasks .remove");

    // get missions that we will remove it
    btns_remove.forEach((btn,index) => {
        btn.addEventListener("click",() => {
            // filter list
            missions.lecture = missions.lecture.filter(mission => JSON.stringify(mission) !== JSON.stringify(missions.lecture[index]));

            // return new list lecture to local storage
            localStorage.missions = JSON.stringify(missions);

            // reload page
            location.reload();
        });
    });
}


/* -------------------------------- finish mission -------------------------------- */
let mission_finished = (localStorage.mission_finished) ? JSON.parse(localStorage.mission_finished) : [];

// for study mission
if (missions.study.length !== 0){
    // get all finish btn in study div and all missions
    let btns_finish = document.querySelectorAll(".study .tasks .finish");
    let study_missions = document.querySelectorAll(".study .tasks .text");

    // get mission that we had finished it
    btns_finish.forEach((btn,index) => {
        btn.addEventListener("click",() => {
            // add mission to finish list
            mission_finished[mission_finished.length] = {
                mission_name: missions.study[index]['missionText'],
                mission_type: "Study",
                start_date: missions.study[index]['startDate'],
                end_date: new Date().toLocaleDateString()
            }

            // remove mission
            missions.study = missions.study.filter(mission => JSON.stringify(mission) !== JSON.stringify(missions.study[index]));

            // return two list to local storage
            localStorage.missions = JSON.stringify(missions);
            localStorage.mission_finished = JSON.stringify(mission_finished);

            // reload page
            location.reload();
        });
    }); 
}

// for course mission
if (missions.course.length !== 0){
    // get all finish btn in course div and all missions
    let btns_finish = document.querySelectorAll(".course .tasks .finish");
    let course_missions = document.querySelectorAll(".course .tasks .text");

    // get mission that we had finished it
    btns_finish.forEach((btn,index) => {
        btn.addEventListener("click",() => {
            // add mission to finish list
            mission_finished[mission_finished.length] = {
                mission_name: missions.course[index]['missionText'],
                mission_type: "Course",
                start_date: missions.course[index]['startDate'],
                end_date: new Date().toLocaleDateString()
            }

            // remove mission
            missions.course = missions.course.filter(mission => JSON.stringify(mission) !== JSON.stringify(missions.course[index]));

            // return two list to local storage
            localStorage.missions = JSON.stringify(missions);
            localStorage.mission_finished = JSON.stringify(mission_finished);

            // reload page
            location.reload();
        });
    }); 
}

// for section mission
if (missions.section.length !== 0){
    // get all finish btn in section div and all missions
    let btns_finish = document.querySelectorAll(".section .tasks .finish");
    let section_missions = document.querySelectorAll(".section .tasks .text");

    // get mission that we had finished it
    btns_finish.forEach((btn,index) => {
        btn.addEventListener("click",() => {
            // add mission to finish list
            mission_finished[mission_finished.length] = {
                mission_name: missions.section[index]['missionText'],
                mission_type: "Section",
                start_date: missions.section[index]['startDate'],
                end_date: new Date().toLocaleDateString()
            }

            // remove mission
            missions.section = missions.section.filter(mission => JSON.stringify(mission) !== JSON.stringify(missions.section[index]));

            // return two list to local storage
            localStorage.missions = JSON.stringify(missions);
            localStorage.mission_finished = JSON.stringify(mission_finished);

            // reload page
            location.reload();
        });
    }); 
}

// for lecture mission
if (missions.lecture.length !== 0){
    // get all finish btn in lecture div and all missions
    let btns_finish = document.querySelectorAll(".lecture .tasks .finish");
    let lecture_missions = document.querySelectorAll(".lecture .tasks .text");

    // get mission that we had finished it
    btns_finish.forEach((btn,index) => {
        btn.addEventListener("click",() => {
            // add mission to finish list
            mission_finished[mission_finished.length] = {
                mission_name: missions.lecture[index]['missionText'],
                mission_type: "Lecture",
                start_date: missions.lecture[index]['startDate'],
                end_date: new Date().toLocaleDateString()
            }

            // remove mission
            missions.lecture = missions.lecture.filter(mission => JSON.stringify(mission) !== JSON.stringify(missions.lecture[index]));

            // return two list to local storage
            localStorage.missions = JSON.stringify(missions);
            localStorage.mission_finished = JSON.stringify(mission_finished);

            // reload page
            location.reload();
        });
    }); 
}


/* -------------------------------- load finished mission -------------------------------- */
let btn_load_f_m = document.querySelector(".f-mission");
let btn_back = document.querySelector(".b-mission");

// load mission finished
btn_load_f_m.addEventListener("click",() => {
    // change style
    btn_load_f_m.style.display = "none";
    btn_back.style.display = "block";
    document.querySelector("#container").style.display = "none";

    // create new div
    let div = document.createElement("div");
    div.id = "f-mission";

    // check if localStorage.mission_finished is exist
    if (localStorage.mission_finished){
        // create div for control in table
        let div_table = document.createElement("div");
        div_table.className = "tables";

        // get mission finished 
        let mission_finished = (localStorage.mission_finished) ? JSON.parse(localStorage.mission_finished) : [];

        // create table for mission finished
        let table = document.createElement("table");
        table.className = "table";

        // create table head
        let table_head = document.createElement("thead");
        table_head.className = "bg-primary";

        // create ths for head and add it to table head
        let th1 = document.createElement("th");
        let th2 = document.createElement("th");
        let th3 = document.createElement("th");
        let th4 = document.createElement("th");
        let th5 = document.createElement("th");
        th1.textContent = "Index";
        th2.textContent = "Mission";
        th3.textContent = "Mission Type";
        th4.textContent = "Start Date";
        th5.textContent = "End Date";
        table_head.appendChild(th1);
        table_head.appendChild(th2);
        table_head.appendChild(th3);
        table_head.appendChild(th4);
        table_head.appendChild(th5);

        // add head to table
        table.appendChild(table_head);

        // create table body
        let tbody = document.createElement("tbody");

        // create mission tuple for each mission
        mission_finished.forEach((mission,index) => {
            // create tr 
            let tr = document.createElement("tr");

            // create tds for each mission date and ad all to tr
            let td1 = document.createElement("td");
            let td2 = document.createElement("td");
            let td3 = document.createElement("td");
            let td4 = document.createElement("td");
            let td5 = document.createElement("td");
            td1.textContent = `#${index + 1}`;
            td2.textContent = mission.mission_name;
            td3.textContent = mission.mission_type;
            td4.textContent = mission.start_date;
            td5.textContent = mission.end_date;
            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            tr.appendChild(td4);
            tr.appendChild(td5);

            // add tr to table body
            tbody.appendChild(tr);
        });

        // add tbody to table
        table.appendChild(tbody);

        // add table to table div
        div_table.appendChild(table);

        // add table div to finished mission div
        div.appendChild(div_table);

        // check length of mission finished for fill div
        if (mission_finished.length > 9){
            div.style.height = "fit-content";
        } else {
            div.style.height = "86vh";
        }
    } else {
        // add some massage to div
        let p1 = document.createElement("p");
        p1.style.color = 'red';
        p1.style.textAlign = 'center';
        p1.textContent = "You don't finish any mission yet.";
        
        // add massage to div
        div.appendChild(p1);

        // change height of page
        div.style.height = '86vh';
    }

    // add div after nav bar
    document.querySelector("nav").after(div);
});

// back to missions
btn_back.addEventListener("click",() => {
    location.reload();
});


/* -------------------------------- set height of document -------------------------------- */
if (document.querySelector("#container").scrollHeight <= 670){
    document.querySelector("#container").style.height = `86vh`;
} else {
    document.querySelector("#container").style.height = `fit-content`;
}