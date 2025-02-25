/* -------------------------------- load site script -------------------------------- */
let sites = (localStorage.sites) ? JSON.parse(localStorage.sites) 
        : [
            {site_name: "Portal",site_link: "http://education.fcih.helwan.edu.eg/portal/student/dashboar",image_link: "AICS-Site/Pictures/portal.png"},
            {site_name: "Myhu",site_link: "https://myu.helwan.edu.eg/",image_link: "AICS-Site/Pictures/Myhu.png"},
            {site_name: "Codeforces",site_link: "https://codeforces.com/problemset",image_link: "AICS-Site/Pictures/codeforces.jpeg"},
            {site_name: "Github",site_link: "https://github.com/",image_link: "AICS-Site/Pictures/github.jpeg"},
            {site_name: "Roadmap",site_link: "https://roadmap.sh/",image_link: "AICS-Site/Pictures/roadmap.jpeg"},
            {site_name: "Hackerrank",site_link: "https://www.hackerrank.com/",image_link: "AICS-Site/Pictures/HacherRank.jpeg"},
            {site_name: "W3schools",site_link: "https://www.w3schools.com/",image_link: "AICS-Site/Pictures/w3scholls.jpeg"},
            {site_name: "Elzeroacademy",site_link: "https://elzero.org",image_link: "AICS-Site/Pictures/elzero-academy.jpeg"},
            {site_name: "eBooks",site_link: "http://e-books.helwan.edu.eg/login",image_link: "AICS-Site/Pictures/ebook-background.png"},
            {site_name: "Geek",site_link: "https://www.geeksforgeeks.org",image_link: "AICS-Site/Pictures/geek.png"}
        ];

if (sites.length > 0){
    let links_div = document.querySelector("#container .links");

    // create link for each site
    sites.forEach((site) => {
        let a = document.createElement("a");
        a.classList = "link col-lg-4 col-md-12 col-sm-12 active";
        a.href = site.site_link;
        a.innerHTML = `
            <div style='background-image: url(${site.image_link});' class="${site.site_name.toLowerCase()}">
                <div class="title"><h1>${site.site_name}</h1></div>
            </div>
        `;

        links_div.appendChild(a);
    });
}


/* -------------------------------- Search bar script -------------------------------- */
let site_link = document.querySelectorAll(".links .link");
let site_name = document.querySelectorAll(".links .link > div");
let search_input = document.querySelector("form input");

search_input.addEventListener("input", function (){
    if (search_input.value != ""){
        let input = search_input.value.toLowerCase();
        site_name.forEach((ele,index) => {
            if (!ele.className.toLowerCase().includes(input)){
                site_link[index].style.display = "none";
                site_link[index].classList.remove("active");
            } else {
                site_link[index].style.display = "block";
                site_link[index].classList.add("active");
            }
        });
    } else {
        site_name.forEach((ele) => {
            ele.style.display = "block";
        });
    }
    let count_link = document.querySelectorAll(".links .active").length;
    /* fill screen */
    if (count_link <= 3){
        let container = document.getElementById("container");
        container.style.height = "87vh";
    } else {
        let container = document.getElementById("container");
        container.style.height = "fit-content";
    }
});


/* -------------------------------- title showing -------------------------------- */
let title = document.querySelectorAll(".link > div");
title.forEach((ele) => {
    ele.addEventListener("mouseover",function (){
        ele.querySelector(".title").style.display = "flex";
        ele.querySelector(".title").style.animation = "titleShowing .6s  1 forwards";
        ele.querySelector(".title > h1").addEventListener("mouseover",function (){
            ele.querySelector(".title > h1").style.scale = "1.1";
            ele.querySelector(".title > h1").style.color = "rgb(48, 102, 238)";
        });
        ele.querySelector(".title > h1").addEventListener("mouseout",function (){
            ele.querySelector(".title > h1").style.scale = "1";
            ele.querySelector(".title > h1").style.color = "rgb(29, 71, 177)";
        });
    });
    ele.addEventListener("mouseout",() => {
        ele.querySelector(".title").style.display = "none";
        ele.querySelector(".title").style.animation = "none";
    });
});


/* -------------------------------- add Link -------------------------------- */
let btn_add = document.querySelector(".add");
let alert = document.querySelector(".dialog");

btn_add.addEventListener("click", () => {
    document.body.style.overflow = "hidden";
    alert.style.display = "flex";
    document.documentElement.scrollTop = 0;
});


/* ------------------------------- close adding model ------------------------------- */
let btn_close = document.querySelector(".close-model");

btn_close.addEventListener("click", () => {
    // clear form
    document.querySelector(".myAlert #name").value = "";
    document.querySelector(".myAlert #link").value = "";
    document.querySelector(".myAlert #image").value = "";
    document.querySelector(".myAlert .name p").style.display = "none";
    document.querySelector(".myAlert .link p").style.display = "none";
    document.querySelector(".myAlert .image p").style.display = "none";

    document.body.style.overflow = "visible";
    alert.style.display = "none";
});


/* ------------------------------- save adding model ------------------------------- */
let btn_save_add = document.querySelector(".myAlert .save");
btn_save_add.addEventListener("click",() => {
    let site_name = document.querySelector(".myAlert #name");
    let site_link = document.querySelector(".myAlert #link");
    let image_link = document.querySelector(".myAlert #image");
    let name_p = document.querySelector(".myAlert .name p");
    let link_p = document.querySelector(".myAlert .link p");
    let image_p = document.querySelector(".myAlert .image p");

    // remove all msg
    name_p.style.display = "none";
    link_p.style.display = "none";
    image_p.style.display = "none";

    // check duplication
    let dup = false;
    let sites = (localStorage.sites) ? JSON.parse(localStorage.sites) 
        : [
            {site_name: "Portal",site_link: "http://education.fcih.helwan.edu.eg/portal/student/dashboar",image_link: "AICS-Site/Pictures/portal.png"},
            {site_name: "Myhu",site_link: "https://myu.helwan.edu.eg/",image_link: "AICS-Site/Pictures/Myhu.png"},
            {site_name: "Codeforces",site_link: "https://codeforces.com/problemset",image_link: "AICS-Site/Pictures/codeforces.jpeg"},
            {site_name: "Github",site_link: "https://github.com/",image_link: "AICS-Site/Pictures/github.jpeg"},
            {site_name: "Roadmap",site_link: "https://roadmap.sh/",image_link: "AICS-Site/Pictures/roadmap.jpeg"},
            {site_name: "Hackerrank",site_link: "https://www.hackerrank.com/",image_link: "AICS-Site/Pictures/HacherRank.jpeg"},
            {site_name: "W3schools",site_link: "https://www.w3schools.com/",image_link: "AICS-Site/Pictures/w3scholls.jpeg"},
            {site_name: "Elzeroacademy",site_link: "https://elzero.org",image_link: "AICS-Site/Pictures/elzero-academy.jpeg"},
            {site_name: "eBooks",site_link: "http://e-books.helwan.edu.eg/login",image_link: "AICS-Site/Pictures/ebook-background.png"},
            {site_name: "Geek",site_link: "https://www.geeksforgeeks.org",image_link: "AICS-Site/Pictures/geek.png"}
        ];
    sites.forEach((site) => {
        if (site.site_name.toLowerCase() === site_name.value.toLowerCase()){
            dup = true;
        }
    });

    console.log(dup);

    if (site_name.value !== "" && site_name.value.length <= 16 && !dup){
        // remove all msg
        name_p.style.display = "none";
        link_p.style.display = "none";
        image_p.style.display = "none";

        // check link existence
        sites.forEach((site) => {
            if (site.site_link === site_link.value){
                dup = true;
            }
        });

        if (site_link.value !== "" && (site_link.value.includes("https://") || site_link.value.includes("http://")) && !site_link.value.includes(" ") && !dup){
            // remove all msg
            name_p.style.display = "none";
            link_p.style.display = "none";
            image_p.style.display = "none";

            if (image_link.value !== "" && image_link.value.includes("https://") && !image_link.value.includes(" ")){
                // remove all msg
                name_p.style.display = "none";
                link_p.style.display = "none";
                image_p.style.display = "none";

                // change site name
                let siteName = "";
                if (site_name.value.length === 2 || site_name.value.length === 3 || site_name.value.length === 4){
                    newCourse = site_name.value.toUpperCase().replace(" ","_");
                } else {
                    // get list form string
                    let value_list = site_name.value.split(" ");

                    value_list.forEach((value,index) => {
                        // get first letter in word 
                        siteName += value.slice(0,1).toUpperCase();
    
                        // assign remaining letters of word
                        siteName += value.slice(1);
    
                        // add space after each word
                        if (index !== value_list.length - 1){
                            siteName += " ";
                        }
                    });
                }

                // create site variable and assign data to site variable
                let site = {site_name: siteName,site_link: site_link.value,image_link: image_link.value};

                console.log(site);

                // add site to sites list
                sites[sites.length] = site;

                // return list to local storage
                localStorage.sites = JSON.stringify(sites);

                // reload page for appearing new site with old sites
                location.reload();
            } else if (image_link.value !== "" && image_link.value.includes(" ")){
                // add msg error to image field
                image_p.textContent = "Site link shouldn't include space";
                image_p.style.display = "inline";
            } else if (image_link.value !== "" && !image_link.value.includes("https://")){
                // add msg error to image field
                image_p.textContent = "Site link should include 'https://'";
                image_p.style.display = "inline";
            } else {
                // add msg error to link field
                image_p.textContent = "Please, Enter image link.";
                image_p.style.display = "inline";
            }
        } else if (site_link.value !== "" && site_link.value.includes(" ")){
            // add msg error to link field
            link_p.textContent = "Site link shouldn't include space";
            link_p.style.display = "inline";
        } else if (!(site_link.value.includes("https://") || site_link.value.includes("http://")) && site_link.value !== ""){
            // add msg error to link field
            link_p.textContent = "Site link should include 'https://'";
            link_p.style.display = "inline";
        } else if (dup){
            // add msg error to link field
            link_p.textContent = "Error: this site is already exist.";
            link_p.style.display = "inline";
        } else {
            // add msg error to link field
            link_p.textContent = "Please, Enter site link.";
            link_p.style.display = "inline";
        }
    } else if (site_name.value.length > 16){
        // add msg error to name field
        name_p.textContent = "Site name should have 16 or less letters (Note: space is character)";
        name_p.style.display = "inline";
    } else if (dup){
        // add msg error to name field
        name_p.textContent = "Please, this site is already exist.";
        name_p.style.display = "inline";
    } else {
        // add msg error to name field
        name_p.textContent = "Please, Enter site name.";
        name_p.style.display = "inline";
    }
})


/* ------------------------------- remove link ------------------------------- */
let btn_remove = document.querySelector(".remove");
let alert_remove = document.querySelector(".remove-site");

    /* fill form */
    sites.forEach((ele,index) => {
        let div = document.createElement("div");
        div.innerHTML = `<input id="${ele.site_name.toLocaleLowerCase()}" value="${ele.site_name.toLocaleLowerCase()}" type="checkbox">
                        <label for="${ele.site_name.toLocaleLowerCase()}">${ele.site_name}</label>`
        document.querySelector(".remove-site .alert-Remove form div").appendChild(div); 
        count = index + 1;
    });

btn_remove.addEventListener("click", () => {
    document.body.style.overflow = "hidden";
    document.documentElement.scrollTop = 0;
    alert_remove.style.display = "flex";
    if (count > 10){
        let form = document.querySelector(".alert-Remove form");
        form.style.height = "50vh";
        form.style.overflow = "scroll";
    } else {
        let form = document.querySelector(".alert-Remove form");
        form.style.height = "fit-content";
        form.style.overflow = "visible";
    }
});


/* ------------------------------- close remove model ------------------------------- */
let btn_close_remove = document.querySelector(".close-remove-model");

btn_close_remove.addEventListener("click", () => {
    // remove selected data and remove msg error
    document.querySelector(".remove-site .alert-Remove p").style.display ="none";
    document.querySelectorAll("input[type = 'checkbox']:checked").forEach((box) => {
        box.checked = false;
    });

    document.body.style.overflow = "visible";
    alert_remove.style.display = "none";
});


/* -------------------------------- save remove model -------------------------------- */
let btn_save_remove = document.querySelector(".remove-site .save");

btn_save_remove.addEventListener("click", () => {
    let checked_site = Array.from(document.querySelectorAll("input[type = 'checkbox']:checked")).map(checkbox => checkbox.value);
    let p = document.querySelector(".remove-site .alert-Remove p");

    if (checked_site.length !== 0){
        // remove msg if it apppeared
        p.style.display = "none";

        // remove site from sites list
        checked_site.forEach((cheched) => {
            sites.forEach((site,index) => {
                if (cheched === site.site_name.toLowerCase()){
                    // modify list
                    for (let i = index;i < sites.length - 1;i++){
                        sites[i] = sites[i+1];
                    }

                    // change length of list
                    sites.length = sites.length - 1;
                }
            });
        });

        // return sites list to local storage
        localStorage.sites = JSON.stringify(sites);

        // close model after delete link 
        location.reload();
    } else {
        // add error msg to remove model
        p.textContent = "Please, Select at least one site.";
        p.style.display = "inline"
    }
});