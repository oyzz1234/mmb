$(function () {
    
    // 网络请求
    $.ajax({
        type: "get",
        url: "http://58.218.199.45:14985/api/getbrandtitle",
        // data: "data",
        dataType: "json",
        success: function (response) {
            console.log(response);
        }
    });
})

// window.onload = function () {
//     $(function () {
//         var a, t, n;
//         a = {
//             api: baseUrl + "/api/getbrandtitle",
//             callback: function (a) {
//                 for (var t = a.result, n = [/电视/, /空调/, /播放器|影院/, /冰箱/, /洗衣机|热水/, /手机/, /相机/], e = $(".panel-body").children("ul"), l = 0; l < t.length; l++) {
//                     var r = document.createElement("li");
//                     (r = $("<li></li>")).html(t[l].brandTitle);
//                     var i = $("<a></a>");
//                     i.attr({
//                         href: "brand-content.html?brandtitleid=" + t[l].brandTitleId,
//                         "data-title-id": a.result.categoryId
//                     }), r.append(i[0]);
//                     for (var d = 0; d < n.length; d++) n[d].test(t[l].brandTitle) && e.eq(d).append(r)
//                 }
//             }
//         }, t = a.api || "", n = a.callback || function () {}, $.ajax({
//             url: t,
//             success: function (a) {
//                 n && n(a)
//             }
//         })
//     })
// };