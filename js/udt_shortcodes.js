jQuery(document).ready(function(e){e(".accordion > dd").hide();e(".accordion > dt").css({"border-bottom-left-radius":"3px","border-bottom-right-radius":"3px","margin-bottom":"3px"});e(".accordion > dt > a").click(function(){e(this).parent().parent().children("dd").slideUp();e(this).parent().parent().children("dt").removeClass("active");e(this).parent().parent().children("dt").css({"border-bottom-left-radius":"3px","border-bottom-right-radius":"3px","margin-bottom":"3px"});e(this).parent().parent().children("dt").find("a span").html("+");e(this).parent().animate({"border-bottom-left-radius":"0","border-bottom-right-radius":"0","margin-bottom":"0"});e(this).parent().addClass("active");e(this).parent().next().slideDown();e(this).children("span").html("–");return false})});jQuery(document).ready(function(e){e(".tabs .tabs_content").hide();e(".tabs").each(function(){e(this).find(".tabs_content:first").show();e(this).find(".tabs_nav li:first").addClass("active");e(this).find(".tabs_nav li a").click(function(){e(this).parent().parent().children("li").removeClass("active");e(this).parent().addClass("active");e(this).parent().parent().parent().children(".tabs_content").hide();var t=e(this).attr("data-label_ref");e(this).parent().parent().parent().children(".tabs_content").each(function(){if(e(this).data("label_ref")==t)e(this).show()});return false})})});jQuery(document).ready(function(e){e(".pricing_table .pricing_table_col > ul > li:has(span.price), .pricing_table .pricing_table_col > ul > li:has(a.submit)").addClass("pricing_table_bg")})