/*
This is empty on purpose! Your code to build the resume will go here.
 */

var bio ={
  "name": "Fish Wang",
  "role": "Web Developer",
  "welcomeMessage":"Hi there, how are you doing today?",
  "contacts": {"tel":"123112313" , "email":"asdfdsa@ads.com" ,"location":"Dongguan,Guangdong","github":"fishwang2016"},
  "skills":["Excel","SolidWorks","Javascript","Python","Machine Learning","Front End Development"],
  "biopic": "images/fry.jpg",

   display:function(){

        var formattedInfo = ""

        console.log("Hello, how are you doing today?");
        var formattedName = HTMLheaderName.replace("%data%",bio.name);
        var formattedRole = HTMLheaderRole.replace("%data%",bio.role);

        var contacts = bio.contacts;
        console.log(contacts);
        var formattedContact = ""

        for (contact in contacts){

          // console.log(contacts[contact]);// why contacts.contact output underfine?

          formattedContact = formattedContact + HTMLcontactGeneric.replace("%contact%", contact) ;
          formattedContact = formattedContact.replace("%data%",contacts[contact]);

        };
        
        var formattedImg = HTMLbioPic.replace("%data%",bio.biopic);
        var formattedMsg = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);

        formattedInfo = formattedName + formattedRole + formattedImg +formattedMsg + HTMLskillsStart;

        $("#header").append(formattedInfo);
        $("#topContacts").append(formattedContact);
        $("#footerContacts").append(formattedContact);

        var formattedSkill ="";

        bio.skills.forEach(function(skill){

           formattedSkill = formattedSkill + HTMLskills.replace("%data%",skill);

        });


        $("#skills").append(formattedSkill);


  }//function taking no parameters

};

 bio.display();


var education ={

  "schools": [{
          "name":"Guangdong University of Technology",
          "location":"Guangzhou, Guangdong Province, CHINA",
          "degree": "Bachelor",
          "majors": ["Mechanical Engineering","Art","CS"],
          "dates":"2003.09 - 2007.07",
          "schoolURL":"www.gdut.edu.cn"
  }],


  "onlineCourses":[{

    "title":"Machine Learning",
    "school":"Georgia Institute of Technology",
    "date":"2015 - 2016",
    "url":"http://www.udacity.com"

  }],

   "display": "function with no parameters"// function taking no parameters;


}; // education



var work = {

  "jobs":[
           {
            "employer":"Jabil",
            "title":"Engineer",
            "location":"Guangzhou, Guangdong Province, CHINA",
            "dates":"2007-2009",
            "description":"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
            }
    ],

    "display": "function with no parameters"

  };


var projects ={

   "projects":[{

        "title": "Machine Learning Nano Degree",
        "dates":"2015.06- Present",
        "picture":["images/project.jpg","images/project.jpg"],
        "description":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"

     }],

     "display": "function with no parameters"

   };



// $("#mapDiv").append(googleMap);

