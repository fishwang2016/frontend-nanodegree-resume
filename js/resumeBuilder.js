/*
This is empty on purpose! Your code to build the resume will go here.
 */
var bio = {
    "name": "Fish Wang",
    "role": "Web Developer",
    "welcomeMessage": "Hi there, how are you doing today?",
    "contacts": {
        "mobile": "123112313",
        "email": "asdfdsa@ads.com",
        "location": "Dongguan,Guangdong",
        "github": "fishwang2016"
    },
    "skills": ["Excel", "SolidWorks", "Javascript", "Python", "Machine Learning", "Front End Development"],
    "biopic": "images/fry.jpg",

    display: function() {

            var formattedInfo = "";

            var formattedName = HTMLheaderName.replace("%data%", bio.name);
            var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

            var contacts = bio.contacts;

            var formattedContact = "";

            if (contacts.length !== 0) {

                for (var contact in contacts) {

                    // console.log(contacts[contact]);// why contacts.contact output underfine?
                    if (contacts.hasOwnProperty(contact)) {

                        formattedContact = formattedContact + HTMLcontactGeneric.replace("%contact%", contact);
                        formattedContact = formattedContact.replace("%data%", contacts[contact]);

                    }

                }

            }


            var formattedImg = HTMLbioPic.replace("%data%", bio.biopic);
            var formattedMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

            formattedInfo = formattedName + formattedRole + formattedImg + formattedMsg + HTMLskillsStart;

            $("#header").append(formattedInfo);
            $("#topContacts").append(formattedContact);
            $("#footerContacts").append(formattedContact);

            var formattedSkill = "";

            bio.skills.forEach(function(skill) {

                formattedSkill = formattedSkill + HTMLskills.replace("%data%", skill);

            });

            $("#skills").append(formattedSkill);

        } //function taking no parameters

}; // bio object

bio.display();

var education = {

    "schools": [{
        "name": "Guangdong University of Technology",
        "location": "Guangzhou, Guangdong Province, CHINA",
        "degree": "Bachelor",
        "majors": ["Mechanical Engineering", "Art", "CS"],
        "dates": "2003.09 - 2007.07",
        "schoolURL": "www.gdut.edu.cn"
    }, {
        "name": "Guangdong University of Foreign Studies",
        "location": "Guangzhou, Guangdong Province, CHINA",
        "degree": "Bachelor",
        "majors": ["Mechanical Engineering", "Art", "CS"],
        "dates": "2003.09 - 2007.07",
        "url": "www.gdut.edu.cn"
    }],


    "onlineCourses": [{

            "title": "Machine Learning",
            "school": "Georgia Institute of Technology",
            "date": "2015 - 2016",
            "url": "http://www.udacity.com"
        }, {

            "title": "Front End Learning",
            "school": "Georgia Institute of Technology",
            "date": "2015 - 2016",
            "url": "http://www.udacity.com"

        }

    ],

    display: function() {

            if (education.schools.length !== 0) {
                var schools = education.schools;
                var formattedSchools = "";


                schools.forEach(function(school) {

                    var formattedSchool = "";
                    var formattedName = "";
                    var formatteDegree = "";
                    var formattedDates = "";
                    var formattedLocation = "";
                    var majors = "";
                    var formattedMajors = "";

                    for (var key in school) {

                        if (key === "name") {
                            formattedName = HTMLschoolName.replace("%data%", school[key]);

                        } else if (key === "degree") {
                            formatteDegree = HTMLschoolDegree.replace("%data%", school[key]);

                        } else if (key === "dates") {
                            formattedDates = HTMLschoolDates.replace("%data%", school[key]);

                        } else if (key === "location") {
                            formattedLocation = HTMLschoolLocation.replace("%data%", school[key]);

                        } else if (key === "majors") {
                            majors = school.majors.join();
                            formattedMajors = HTMLschoolMajor.replace("%data%", majors);
                        }

                    } //for loop

                    formattedSchool = formattedName + formatteDegree +
                        formattedDates + formattedLocation + formattedMajors;

                    formattedSchools = formattedSchools + formattedSchool;

                }); // forEach loop

                $("#education").append(HTMLschoolStart);
                $(".education-entry").append(formattedSchools);


            } // if  schools length !== 0

            if (education.onlineCourses.length !== 0) {

                var onlineCourses = education.onlineCourses;

                var formattedonlineCourses = HTMLonlineClasses;

                onlineCourses.forEach(function(onlineCourse) {
                    var formattedonlineCourse = HTMLonlineClasses;
                    var formattedTitle = "";
                    var formattedSchool = "";
                    var formattedDate = "";
                    var formattedURL = "";

                    for (var key in onlineCourse) {
                        if (key === "title") {

                            formattedTitle = HTMLonlineTitle.replace("%data%", onlineCourse[key]);
                            continue;

                        } else if (key === "school") {
                            formattedSchool = HTMLonlineSchool.replace("%data%", onlineCourse[key]);
                            continue;

                        } else if (key === "date") {

                            formattedDate = HTMLonlineDates.replace("%data%", onlineCourse[key]);
                            continue;
                        } else if (key === "url") {

                            formattedURL = HTMLonlineURL.replace("%data%", onlineCourse[key]);
                            continue;
                        }

                    } // for loop


                    formattedonlineCourse = "<div class='onlineclass'>" + formattedTitle + formattedSchool + formattedDate +
                        formattedURL + "</div>";
                    console.log(formattedonlineCourse);

                    formattedonlineCourses = formattedonlineCourses + formattedonlineCourse;


                }); // forEach

                $(".education-entry").append(formattedonlineCourses);


            } //onlineCourses


        } // function taking no parameters;


}; // education


education.display();


var work = {

    "jobs": [{
            "employer": "Tenseent",
            "title": "Engineer",
            "location": "Guangzhou, Guangdong Province, CHINA",
            "dates": "2009-2012",
            "description": "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium" +
                " voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati" +
                " cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est" +
                " laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, " +
                "cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, " +
                "omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut " +
                "rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque " +
                "earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus " +
                "maiores alias consequatur aut perferendis doloribus asperiores repellat."
        },

        {
            "employer": "Jabil",
            "title": "Engineer",
            "location": "Shen Zhen, Guangdong Province, CHINA",
            "dates": "2007-2009",
            "description": "wer areos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quo" +
                "s et accusamus et iusto odio dignissimos ducimus qui blanditiis prae"

        }
    ],

    display: function() {

        var jobs = work.jobs;

        var formattedWork = "";

        jobs.forEach(function(job) {

            var formattedJob = "";
            var formattedEmployer = "";
            var formattedTitle = "";
            var formattedLocation = "";
            var formattedDates = "";
            var formattedDescription = "";

            for (var key in job) {
                if (key === "employer") {
                    formattedEmployer = HTMLworkEmployer.replace("%data%", job[key]);
                    continue;

                } else if (key === "title") {
                    formattedTitle = HTMLworkTitle.replace("%data%", job[key]);
                    continue;

                } else if (key === "location") {
                    formattedLocation = HTMLworkLocation.replace("%data%", job[key]);
                    continue;

                } else if (key === "dates") {
                    formattedDates = HTMLworkDates.replace("%data%", job[key]);
                    continue;

                } else if (key === "description") {
                    formattedDescription = HTMLworkDescription.replace("%data%", job[key]);
                    continue;
                }

            } // for loop

            formattedJob = HTMLworkStart + formattedEmployer + formattedTitle +

                formattedLocation + formattedDates + formattedDescription;

            formattedWork = formattedWork + formattedJob;
        }); //forEach job

        $("#workExperience").children().append(formattedWork);
    }

}; // work object

work.display();

var HTMLprojectStart = '<div class="project-entry"></div>';
var HTMLprojectTitle = '<a href="#">%data%</a>';
var HTMLprojectDates = '<div class="date-text">%data%</div>';
var HTMLprojectDescription = '<p><br>%data%</p>';
var HTMLprojectImage = '<img src="%data%">';

var projects = {

    "projects": [{

        "title": "Machine Learning Nano Degree",
        "dates": "2015.06- Present",
        "images": ["images/project.jpg", "images/project.jpg"],
        "description": "Sed ut perspriam, eaque ipsa quae ab illosjasdf asdkflsajf aejrfuewfsadj" +
            "fkjastjklr etjrekaj asfsafsdfjsad sdafk s rlkktrewk asfjsd fsdf" +
            " necessitatibus saepe eveniet ut et voluptates repudiandae sint et " +
            "molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente"
    }, {

        "title": "Front End Nano Degree",
        "dates": "2015.06- Present",
        "picture": ["images/project.jpg", "images/project.jpg"],
        "description": "Sed ut perspriam, eaque ipsa quae ab illosjasdf asdkflsajf " +
            "aejrfuewfsadjfkjastjklr etjrekaj asfsafsdfjsad sdafk s rlkktrewk asfjsd fsdf" +
            " necessitatibus saepe eveniet ut et voluptates repudiandae sint" +
            " et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente"
    }],


    display: function() {

            var allProjects = projects.projects;
            var formattedProjects = "";
            allProjects.forEach(function(project) {

                var formattedProject = "";
                var formattedTitle = "";
                var formattedDates = "";
                var pictures = "";
                var formattedDesc = "";
                var formattedPic = "";
                for (var key in project) {

                    if (key === "title") {
                        formattedTitle = HTMLprojectTitle.replace("%data%", project[key]);

                    } else if (key === "dates") {
                        formattedDates = HTMLprojectDates.replace("%data%", project[key]);

                    } else if (key === "images") {
                        pictures = project[key];

                        pictures.forEach(function(pic) {
                            formattedPic = formattedPic + HTMLprojectImage.replace("%data%", pic);
                        }); // added pictures

                    } else if (key === "description") {
                        formattedDesc = HTMLprojectDescription.replace("%data%", project[key]);
                    }
                } // for loop

                formattedProject = HTMLprojectStart + formattedTitle + formattedDates + formattedDesc + formattedPic;
                formattedProjects = formattedProjects + formattedProject;
            }); //forEach
            $("#projects").children().append(formattedProjects);
        } //display function

}; // projects object

projects.display();

$("#mapDiv").append(googleMap);