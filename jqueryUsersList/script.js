$(function () {
  let $btnAddUser = $('.btnAddUser');
  let $btnAddData = $('.btnAddData');
  let $firstName = $('.firstName');
  let $lastName = $('.lastName');
  let $list = $('.list-group');
  let $inputs = $('.input-group input');
  let $removeUser = $('.user span');
  let $containerForm = $('.input-group');

  $btnAddUser.on('click', function() {
  	if($firstName.val() === '' || $lastName.val() === '') {
  		alert('You must fill in all fields');
  	} else {
  		$list.prepend($(`<li class="list-group-item d-flex justify-content-between align-items-center user">
			    <span class="userFirst">${$firstName.val()}</span> <span class="userLast">${$lastName.val()}</span>
			    <span class="badge badge-danger badge-pill delete">Remove</span>
			  </li>`));
  		$inputs.val('');
  	}
  });

  let $containerUser = $('.list-group');
  $containerUser.on('mouseenter', 'li', function () {
      $( '.delete', this ).addClass('active');
  }).on('mouseleave', 'li', function(){
  		$( '.delete', this ).removeClass('active');
  });

  $containerUser.on('click', 'li', function(){
  	let $thisli = this;
  	let $userFirst = $('.userFirst', $thisli);
  	let $userLast = $('.userLast', $thisli);
  	$firstName.val($userFirst.html());
  	$lastName.val($userLast.html());
  	$btnAddUser.hide();
  	$btnAddData.show();
  	$btnAddData.off().on('click', function(){
  		console.log('btndata');
	  	if($firstName.val() === '' || $lastName.val() === '') {
	  		alert('You must fill in all fields');
	  	} else {
	  		$('.userFirst', $thisli).text($('.firstName').val());
	  		$('.userLast', $thisli).text($('.lastName').val());
		  	$btnAddData.hide();
		  	$btnAddUser.show();
	  		$inputs.val('');
	  	}
  	});
  });

  $list.on('click', '.delete', function(e){
  	e.stopPropagation();
  	$(this).closest('li').remove();
  	$btnAddData.hide();
  	$btnAddUser.show();
		$inputs.val('');
  });
});
