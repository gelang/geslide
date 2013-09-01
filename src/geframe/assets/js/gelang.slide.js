GeLang.Slide = function (options) {
    "use strict";

    this.render = function (rootId) {
        var selector = "#" + (rootId || "impress");
        var slides = options.slides || [];

        var html = "";
        $.each(slides, function (idx, val) {
            var title = ((val.title == undefined) ? "" : "<h1>" + val.title + "</h1>");
            var subtitle = ((val.subtitle == undefined) ? "" : "<h3>" + val.subtitle + "</h3>");
            var content = ((val.content == undefined) ? "" : "<p>" + val.content + "</p>");
            var contents = "";
            $.each((val.contents || []), function (idx, val) {
                contents += ((val.content == undefined) ? "" : "<p>" + val.content + "</p>");
            })

            html += "<div id=\"" + val.name + "\" class=\"step slide\" " +
                    "data-scale=\"" + (val.scale || "1") + "\"" +
				    "data-x=\"" + (val.x || 0) + "\" data-y=\"" + (val.y || 0) + "\" data-z=\"" + (val.z || 0) + "\" " +
					"data-rotate-x=\"" + (val.rx || 0) + "\"" + "data-rotate-y=\"" + (val.ry || 0) + "\"" + "data-rotate-z=\"" + (val.rz || 0) + "\" >" +
					"<div>" + title + subtitle + content + contents + "</div>" +
					"</div>";
        });

        $(selector).empty();
        $(selector).html(html);
        impress().init(rootId);
    }
}