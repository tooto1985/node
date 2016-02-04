$(function() {
	$("#myform").submit(function(e) {
		$.post("/api/",{format:"json",username:$("#username").val()},function(data) {
			alert(data.message);
		},"json");
		e.preventDefault();
	});
});