
$( document ).ready(function() {
	$( "td.small-tab-orange-corps-td:contains('Oui')").replaceWith("<td class=\"small-tab-orange-corps-td\" align=\"center\"><i class=\"glyphicon glyphicon-ok \"></i></td>");
	$( "td.small-tab-orange-corps-td:contains('Avec')").replaceWith("<td class=\"small-tab-orange-corps-td\" align=\"center\"><i class=\"glyphicon glyphicon-ok \"></i></td>");
	// $(".small-tab-orange-corps-td").each(function() {
	//     var text = $(this).text();
	//     text = text.replace("Oui", "<i class=\"glyphicon glyphicon-ok\"></i>");
	//     $(this).text(text);
	// });

	$(".small-tab-orange-corps-table tr td:has(span)").css("background-color", "#eef9ff");
	$(".small-tab-orange-corps-table tr td:has(.prix)").css("padding", "15px 0px");
});