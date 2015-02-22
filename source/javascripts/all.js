//= require_tree .

$(document).ready(function() {
	$("#create-group-button").click(function() {
		$("#default-group-body").hide();
		$("#create-group").show();
	});
	$("#create-event-button").click(function() {
		$("#default-event-body").hide();
		$("#create-event").show();
	});
});
