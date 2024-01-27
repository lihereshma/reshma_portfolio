
// --------------- Contact form ---------------- //
// $(document).ready(function() {
//   emailjs.init("J6Xo3LdV6gOryy912");

//   $("#myForm").submit(function(event) {
//     event.preventDefault();

//     var formData = {
//       name: $("#name").val(),
//       email: $("#email").val(),
//       message: $("#message").val()
//     };

//     emailjs.send("service_rk9rluu", "template_sqarupe", formData)
//     .then(function(response) {
//         $('.w-form-done').css('display', 'block');
//     }, function(error) {
//       $('.w-form-fail').css('display', 'block');
//     });
//   });
// });
// --------------------------------------------------------------- //

// ------------- Active Menu -------------------------//
// $(document).ready(function() {
//   var url = window.location.pathname,
//       urlRegExp = new RegExp(url.replace(/\/$/,'') + "$"),
//       homepageUrl = '/reshmalihe_portfolio/';

//   var path = url.replace(/\/$/, '');

//   $('#nav-menu a').each(function() {
//     $(this).removeClass('active-link');
//   });

//   if (path === homepageUrl) {
//     $('#nav-menu a[href="./"]').addClass('active-link');
//   } else {
//     $('#nav-menu a').each(function() {
//       if (urlRegExp.test(this.pathname.replace(/\/$/,''))) {
//         $(this).addClass('active-link');
//       }
//     });
//   }  
// });

// --------------------------------------------------------------- //

// ------------ Project List --------------------------- //
$(document).ready(function() {
  var projects = [];

  $.getJSON("assets/js/projects.json", function(data) {
    projects = data;
    printProjects();
  });

  function printProjects() {
    let numOfProjects = projects.length;
    let projectsPerPage = 10;
    let currentPage = 1;
    let pages = Math.ceil(numOfProjects / projectsPerPage);

    const pageNum = $("#current_page");
    const totalPages = $("#total_pages");
    pageNum.text(currentPage);
    totalPages.text(pages);

    const projectsList = $(".projects__container");
    const buildList = () => {
      projectsList.empty();
      const startIndex = (currentPage - 1) * projectsPerPage;
      const endIndex = currentPage * projectsPerPage;
      for (let i = startIndex; i < endIndex && i < numOfProjects; i++) {

        let project_container = `
          <li class="modal-wrapper" data-filter="${projects[i].category}">
            <div class="modal-header">
              <div class="button-circles-wrap">
                <div class="button-circle"></div>
                <div class="button-circle"></div>
              </div>
              <div><a href="${projects[i].url}" title="${projects[i].title}" target="_blank" rel="noopener noreferrer nofollow">${projects[i].title}</a></div>
            </div>
            <div class="modal-thumbnail">
              <img src="${projects[i].img}" alt="${projects[i].title}">
              <a href="${projects[i].url}" class="site-btn modal-link" title="View Project" target="_blank" rel="noopener noreferrer nofollow">View Project</a>
            </div>
          </li>
        `;
      projectsList.append(project_container);
      }
    };
  
    const pagination = $(".pagination-wrapper");
    const prevButton = $("#prev");
    const nextButton = $("#next");

    const checkLinks = () => {
      if (currentPage === 1) {
        prevButton.prop("disabled", true);
      } else {
        prevButton.prop("disabled", false);
      }
      if (currentPage === pages) {
        nextButton.prop("disabled", true);
      } else {
        nextButton.prop("disabled", false);
      }
    };

    const buildPage = () => {
      pageNum.text(currentPage);
      checkLinks();
      buildList();
    };

    $("#prev, #next").click(function(event) {
      event.preventDefault();
      if ($(this).attr("id") === "prev") {
        currentPage--;
      } else {
        currentPage++;
      }
      buildPage();    
    });

    buildPage();
  }
});
// ------------------------------------------------------ //

// ------------ Mouse moving eye animation --------------------------- //
$(document).ready(function() {
  if ( window.location.pathname == '/reshmalihe_portfolio/' ){
    const eyes = $(".js-eye");
    const pupils = $(".js-pupil");
    const eyeRadius = 40;  // pupil max position - percentage from center
    const maxPupilDistanceFromCenter = 45;  // pupil max position - percentage from center

    $(document).mousemove(function(event) {
      let offset = rightBetweenTheEyes(eyes);
      let x = (event.clientX - offset.x) / $(window).width() * 100;
      let y = (event.clientY - offset.y) / $(window).height() * 100;
      let pupilDistanceFromCenter = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));

      if (pupilDistanceFromCenter >= maxPupilDistanceFromCenter) {
        let angle = Math.atan(x / y);
        let adjustedX = Math.sin(angle) * maxPupilDistanceFromCenter;
        let adjustedY = Math.cos(angle) * maxPupilDistanceFromCenter;

        if (y < 0) {
          x = adjustedX * -1;
          y = adjustedY * -1;
        } else {
          x = adjustedX;
          y = adjustedY;
        }
      }

      pupils.each(function() {
        $(this).css("left", (x + 50) + "%");
        $(this).css("top", (y + 50) + "%");
      });
    });

    function rightBetweenTheEyes(eyes) {
      let offset = { x: 0, y: 0 };
      let eye0Left = eyes.eq(0).offset().left;
      let eye0Top = eyes.eq(0).offset().top;
      let eye1Left = eyes.eq(1).offset().left;
      let eye1Top = eyes.eq(1).offset().top;

      offset.x = ((eye0Left + eye1Left) / 2) + eyeRadius;
      offset.y = ((eye0Top + eye1Top) / 2) + eyeRadius;

      return offset;
    }

  } 
  
});
// ------------------------------------------------------ //

// ------------ Mouse moving eye animation --------------------------- //
$(document).ready(function() {
  
  const menu = $("#nav-menu");
  const menuItems = $(".header__nav li a");
  const hamburger = $(".nav__toggle");
  const closeIcon = $(".close");
  const menuIcon = $(".bar");

  function toggleMenu() {
    if (menu.hasClass("showMenu")) {
      menu.removeClass("showMenu");
      closeIcon.css("display", "none");
      menuIcon.css("display", "block");
    } else {
      menu.addClass("showMenu");
      closeIcon.css("display", "block");
      menuIcon.css("display", "none");
    }
  }
  hamburger.on("click", toggleMenu);

  menuItems.each(function() {
    $(this).on("click", function() {
      toggleMenu(); 
    });
  });
  
});
// ------------------------------------------------------ //