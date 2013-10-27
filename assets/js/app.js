(function (io) {
  var socket = io.connect('http://localhost:1337/');
  if (typeof console !== 'undefined') {
    console.log('Connecting to Sails.js...');
  }
  socket.on('connect', function socketConnected() {
	$(function(){
		$('button').click(function(){
			var us = $('input[name=user]').val();
			var pw = $('input[name=pass]').val();
			socket.get('/create',{
				user: us,
				pass: pw
			}, function (response) {
				console.log(response);
				$('#pesan').empty().append(response.message);
			});
		});
	});
	socket.on('message', function messageReceived(response) {
		console.log(response);
		$('#users').append('<hr><div>'+response.data.username+'</div><div>'+response.data.password+'</div>');
	});
  });
})(
  window.io
);
