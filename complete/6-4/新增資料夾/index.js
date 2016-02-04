$(function() {
	$("#myform").submit(function(e) {
		$.getJSON("/api",{format:"json",username:$("#username").val()},function(data) {
			alert(data.message);
		});
		e.preventDefault();
	});
});