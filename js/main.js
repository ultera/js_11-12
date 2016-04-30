'use strict';

$(function() {
  var $modal, $overlay;
  var $body = $('body');
  var html;

  /* TEMPLATES */
  $('.link-resig').on( 'click', showModal);
  $('.link-lodash').on( 'click', showModal);


  function showModal(e) {

    var html, content, tmplLoDash;

    var infoResig =	{
			name: 'Ann Pona',
      mail: 'ann@tavrida.org',
      skype: 'annpona',
      linkedin: '<a target="blanc" href="https://ua.linkedin.com/in/анна-пона-77b111114">Linkedin</a>',
      facebook: '<a target="blanc"  href="https://www.facebook.com/profile.php?id=100011196403188">Facebook</a>',
      tel: '(098) 451 97 30',
      courses: 'GoForIT_Online',
      lang: 'C/C++, SQL, JavaScript, jQuery, HTML, CSS',
      dbs: 'Oracle, MS SQL-Server, Informix, MySQL, dBase',
      conceptions: 'OOP',
      framework: 'Bootstrap',
      cvs: 'github, cvs',
      editors: 'Photoshop'
		};
    var infoLoDash = {
        title: '<a  target="blanc" class="underline" href="https://github.com/airbnb/JavaScript#jquery--dollar-prefix">Airbnb JavaScript Style Guide() for jQuery</a>',
        rule: '25.1 Prefix jQuery object variables with a $.',
        code: '<br><br>// bad<br>const sidebar = $(".sidebar");<br><br>// good<br>const $sidebar = $(".sidebar");<br><br>// good<br>const $sidebarBtn = $(".sidebar-btn");'
    }

    e.preventDefault();

    if ( $(this).hasClass("link-resig") ) {
      html = $('#tmpl-resig').html();
      content = tmpl(html, {
        infoResig
      });
    }
    else {
      html = $('#tmpl-lodash').html();
      tmplLoDash = _.template(html);
      content = tmplLoDash(infoLoDash);
    }

    $modal = $('<div class="tmpl-modal"></div>');
		$overlay = $('<div class="tmpl-overlay"></div>');

    /* CREATE */
    $body.append($overlay);
		$body.append($modal);
    $overlay.one('click', hideModal);
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
