<!DOCTYPE html>
<html>
<head>
	<title>ajax_1</title>
	<script src="http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>
	<script type="text/javascript">

	function funcBefore(){
		$("#information").text("waiting for data");
	}

	function funcSuccess(data){
		$("#information").text(data);
	}


	$(document).ready( function () {
			// body.//
			$("#load").bind("click", function(){
				var admin = "Admin";
				$.ajax ({
				url: "content.php",
				type: "POST",
				data: ({name: "admin", number: 5}),
				dataType: "html",
				beforeSend: funcBefore,
				success: funcSuccess
				});
			});

	$("#done").bind("click", function(){
				$.ajax ({
				url: "check.php",
				type: "POST",
				data: ({name: $("#name").val()}),
				dataType: "html",
				beforeSend: function(){
					$("#information").text("waiting for data");
				},
				success: function(data){
					if (data == "Fail") {
						alert("name already in use");
					}else{
						$("#information").text(data);
					}
				}
				});
			});
});
	</script>
</head>
<body>
<input type="text" id="name" placeholder="enter a name"></input>
<input type="button" id="done" value="Done" ></input>
<p id="load" style="cursor: pointer;">Download data</p>
<div id="information"></div>
</body>
</html>