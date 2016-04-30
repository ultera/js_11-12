'use strict';

$(function() {
  var $modal, $overlay;
  var $body = $('body');
  var html;

  /* TEMPLATES */
  $('.link-resig').on('click', showModal);
  html = $('#tmpl-resig').html();

  function showModal(e) {
    e.preventDefault();

    $modal = $('<div class="resig-modal"></div>');
		$overlay = $('<div class="tmpl-overlay"></div>');


    /* CREATE */
    $body.append($overlay);
		$body.append($modal);
    $overlay.one('click', hideModal);
    var content;

    /* DATA */
    var infoResig =	{
			name: 'Ann Pona',
      mail: 'ann@tavrida.org',
      skype: 'annpona',
      linkedin: '<a href="https://ua.linkedin.com/in/анна-пона-77b111114">Linkedin</a>',
      facebook: '<a href="https://www.facebook.com/profile.php?id=100011196403188">facebook</a>',
      tel: '(098) 451 97 30',
      courses: 'GoForIT_Online',
      lang: 'C/C++, SQL, JavaScript, jQuery, HTML, CSS',
      dbs: 'Oracle, MS SQL-Server, Informix, MySQL, dBase, Paradox',
      conceptions: 'OOP',
      framework: 'Bootstrap',
      cvs: 'github, cvs',
      editors: 'Photoshop'
		};

    var infoLoDash = {
        title: '<a href="https://github.com/airbnb/JavaScript#jquery--dollar-prefix">Airbnb JavaScript Style Guide() for jQuery</a>',
        rule: '25.1 Prefix jQuery object variables with a $.',
        code: '// bad<br>const sidebar = $(".sidebar");// good const $sidebar = $(".sidebar");// good const $sidebarBtn = $(".sidebar-btn");'
    }


  content = tmpl(html, {
    infoResig
  });



    $modal.append(content);
  }

  function hideModal() {
			$modal.remove();
			$overlay.remove();
	}

  /* SLIDER */
	$('.slider-arrow').slider({
		width: '225px'
	});


});
