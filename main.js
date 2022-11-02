// document.addEventListener("DOMContentLoaded", function () {
//   var calendarEl = document.getElementById("calendar");
//   var calendar = new FullCalendar.Calendar(calendarEl, {
//     schedulerLicenseKey: "CC-Attribution-NonCommercial-NoDerivatives", //フリートライアル（エラー表示消す）
//     locale: "ja-JP", //日本語で表示
//     initialView: "customWeek",
//     views: {
//       customWeek: {
//         type: "resourceTimeline",
//         duration: { weeks: 1 },
//         slotDuration: { days: 1 },
//       },
//     },
//     timeZone: "Asia/Tokyo",
//     aspectRatio: 1.5,
//     headerToolbar: {
//       left: "prev,next",
//       center: "title",
//       right: "today",
//     },
//     resourceAreaHeaderContent: " ",
//     resources: this.resources,
//     resources: [
//       { id: "1", title: '<img src="img/item01.jpg" alt="">' },
//       { id: "2", title: '<img src="img/item02.jpg" alt="">' },
//       { id: "3", title: '<img src="img/item03.jpg" alt="">' },
//       { id: "4", title: '<img src="img/item04.jpg" alt="">' },
//       { id: "5", title: '<img src="img/item05.jpg" alt="">' },
//       { id: "6", title: '<img src="img/item06.jpg" alt="">' },
//     ],
//     events: [
//       {
//         id: "1",
//         resourceId: "1",
//         start: "2021-07-05",
//         end: "2021-07-07",
//         title: "<span>イベントタイトル1</span>",
//       },
//       {
//         id: "2",
//         resourceId: "2",
//         start: "2021-07-05",
//         end: "2021-07-09",
//         title: "<span>イベントタイトル2</span>",
//       },
//       {
//         id: "3",
//         resourceId: "3",
//         start: "2021-06-28",
//         end: "2021-08-01",
//         title: "<span>イベントタイトル3</span>",
//       },
//       {
//         id: "4",
//         resourceId: "4",
//         start: "2021-06-30",
//         end: "2021-10-01",
//         title: "<span>イベントタイトル4</span>",
//       },
//       {
//         id: "5",
//         resourceId: "5",
//         start: "2021-07-05",
//         end: "2021-07-010",
//         title: "<span>イベントタイトル5</span>",
//       },
//       {
//         id: "6",
//         resourceId: "6",
//         start: "2021-07-05",
//         end: "2021-07-20",
//         title: "<span>イベントタイトル6</span>",
//       },
//     ],
//     resourceLabelContent: function (arg) {
//       let spanEl = document.createElement("span");
//       let resHtml = arg.resource.extendedProps["resourceHtml"];

//       if (arg.resource.extendedProps.isResourceHtml) {
//         spanEål.innerHTML = resHtml;
//       } else {
//         spanEl.innerHTML = arg.resource.title;
//       }
//       let arrayOfDomNodesLabelContent = [spanEl];
//       return { domNodes: arrayOfDomNodesLabelContent };
//     },
//     eventContent: function (arg) {
//       let divEl = document.createElement("div");
//       let htmlTitle = arg.event._def.extendedProps["html"];
//       if (arg.event.extendedProps.isHTML) {
//         divEl.innerHTML = htmlTitle;
//       } else {
//         divEl.innerHTML = arg.event.title;
//       }
//       let arrayOfDomNodes = [divEl];
//       return { domNodes: arrayOfDomNodes };
//     },
//   });
//   calendar.render();
// });
