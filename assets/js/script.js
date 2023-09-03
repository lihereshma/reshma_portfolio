
// --------------- Contact form ---------------- //
$(document).ready(function() {
  emailjs.init("J6Xo3LdV6gOryy912");

  $("#myForm").submit(function(event) {
    event.preventDefault();

    var formData = {
      name: $("#name").val(),
      email: $("#email").val(),
      message: $("#message").val()
    };

    emailjs.send("service_rk9rluu", "template_sqarupe", formData)
    .then(function(response) {
        $('.w-form-done').css('display', 'block');
    }, function(error) {
      $('.w-form-fail').css('display', 'block');
    });
  });
});
// --------------------------------------------------------------- //

// ------------- Active Menu -------------------------//
$(document).ready(function() {
  var url = window.location.pathname,
  urlRegExp = new RegExp(url.replace(/\/$/,'') + "$"),
  homepageUrl = '/reshmalihe_portfolio/';

  if (url === homepageUrl) {
    $('#nav-menu a').each(function() {
      $(this).removeClass('active-link'); 
    });
  } else {
    $('#nav-menu a').each(function() {
      if (urlRegExp.test(this.href.replace(/\/$/,''))) {
        $(this).addClass('active-link');
      }
    });
  }  
});
// --------------------------------------------------------------- //

// ------------ Project List --------------------------- //
$(document).ready(function() {
  projects = 
  [
    {
      "title" : "ACTIVeat",
      "img" : "assets/images/activeat-in.png",
      "url" : "https://activeat.in",
      "category" : "custom"
    },
    {
      "title" : "Movie Finder",
      "img" : "assets/images/movie finder.png",
      "url" : "https://lihereshma.github.io/moviedb-react",
      "category" : "react"
    },
    {
      "title" : "Budding Influencers",
      "img" : "assets/images/buddinginfluencers.png",
      "url" : "https://buddinginfluencers.com",
      "category" : "custom"
    },
    {
      "title" : "Gits Food", 
      "img" : "assets/images/gitsfood.png", 
      "url" : "https://www.gitsfood.com/", 
      "category" : "custom" 
    },
    {
      "title" : "Qualitia", 
      "img" : "assets/images/qualitiasoft.png", 
      "url" : "https://www.qualitiasoft.com/", 
      "category" : "custom" 
    },
    {
      "title" : "Bound India", 
      "img" : "assets/images/boundindia.png", 
      "url" : "https://www.boundindia.com/", 
      "category" : "custom" 
    },
    {
      "title" : "Shea Ray", 
      "img" : "assets/images/shearay.png", 
      "url" : "https://shearay.com", 
      "category" : "custom" 
    },
    {
      "title" : "Sheeba Online", 
      "img" : "assets/images/sheebaonline.png", 
      "url" : "https://sheebaonline.ae", 
      "category" : "custom" 
    },
    {
      "title" : "Book Finder", 
      "img" : "assets/images/book search.png", 
      "url" : "https://lihereshma.github.io/bookSearch-react/", 
      "category" : "react" 
    },
    {
      "title" : "Joe's Jewelry", 
      "img" : "assets/images/joesjewelry.png", 
      "url" : "https://www.joesjewelry.com/", 
      "category" : "custom" 
    },
    {
      "title" : "Sue Webb Psychology", 
      "img" : "assets/images/suewebbpsychology.png", 
      "url" : "https://suewebbpsychology.com/", 
      "category" : "custom" 
    },
    {
      "title" : "Pokedex", 
      "img" : "assets/images/pokedex.png", 
      "url" : "https://lihereshma.github.io/pokemon-react/", 
      "category" : "custom" 
    },
    {
      "title" : "Arab Sea Ports", 
      "img" : "assets/images/arabseaports.png", 
      "url" : "https://arabseaports.com/", 
      "category" : "custom" 
    },
    {
      "title" : "Newington London", 
      "img" : "assets/images/newingtonestates.png", 
      "url" : "https://www.newingtonestates.com/", 
      "category" : "custom" 
    },
    {
      "title" : "Specialist Mats", 
      "img" : "assets/images/specialistmats.png", 
      "url" : "https://www.specialistmats.co.uk/", 
      "category" : "custom" 
    },
    {
      "title" : "UK CLT", 
      "img" : "assets/images/ukclt.png", 
      "url" : "https://ukclt.com/", 
      "category" : "custom" 
    },
    {
      "title" : "NGY Rugby", 
      "img" : "assets/images/nextgenyou.png", 
      "url" : "https://nextgenyou.org/", 
      "category" : "custom" 
    },
    {
      "title" : "Meed", 
      "img" : "assets/images/meed.png", 
      "url" : "https://www.meed.com/", 
      "category" : "custom" 
    },
    {
      "title" : "The Maritime Standard", 
      "img" : "assets/images/themaritimestandard.png", 
      "url" : "https://www.themaritimestandard.com/", 
      "category" : "custom" 
    },
    {
      "title" : "TMS Awards", 
      "img" : "assets/images/tmsawards-com.png", 
      "url" : "https://www.tmsawards.com/", 
      "category" : "custom" 
    },
    {
      "title" : "TMS Tanker Conference", 
      "img" : "assets/images/tmstankerconference.png", 
      "url" : "https://tmstankerconference.com/", 
      "category" : "custom" 
    },
    {
      "title" : "Star Magic Healing", 
      "img" : "assets/images/starmagichealing.png", 
      "url" : "https://www.starmagichealing.com/", 
      "category" : "custom" 
    },
    {
      "title" : "Nick & KO", 
      "img" : "assets/images/nickandko.png", 
      "url" : "https://nickandko.com/", 
      "category" : "custom" 
    },
    {
      "title" : "City Therapy", 
      "img" : "assets/images/citytherapy.png", 
      "url" : "https://www.citytherapy.ie/", 
      "category" : "custom" 
    },
    {
      "title" : "Throughput", 
      "img" : "assets/images/throughput-world.png", 
      "url" : "https://throughput.world/", 
      "category" : "custom" 
    },
    {
      "title" : "House of Scholars", 
      "img" : "assets/images/houseofscholars.png", 
      "url" : "https://houseofscholars.net/", 
      "category" : "custom" 
    },
    {
      "title" : "Bottoms Up Colonicss", 
      "img" : "assets/images/bottomsupcolonics.png", 
      "url" : "https://bottomsupcolonics.com.au/", 
      "category" : "custom" 
    },
  ];

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