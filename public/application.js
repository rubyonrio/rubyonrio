$(document).ready(function() {
	$(".tweet").tweet({
		avatar_size: 32,
	    count: 6,
	    query: "#rubyonrio",
		loading_text: "carregando tweets..."
	});
});
