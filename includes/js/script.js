/*

My Custom JS
============

Author:  Brad Hussey
Updated: August 2013
Notes:	 Hand coded for Udemy.com

*/

$(function() {

	$('#alertMe').click(function(e) {

		e.preventDefault();

		$('#successAlert').slideDown();

	});

	$('a.pop').click(function(e) {
		e.preventDefault();
	});

	$('a.pop').popover();

	$('[rel="tooltip"]').tooltip();


	var audioFilesNames=["","الأشخاص","العائلة","التعارف","في المدرسة","البلدان واللغات","القراءة والكتابة","الأعداد","أوقات الساعة","أيام الاسبوع","أمس_اليوم_غدا","الشهور","المشروبات","الانشطة و الأعمال","الألوان","الثمار و المواد الغذائية","فصول السنة و الطقس","في البيت","تنظيف المنزل","في المطبخ","محادثة قصيرة رقم -1","محادثة قصيرة رقم-2","محادثة قصيرة رقم-3","تعلم اللغات الأجنبية","المواعيد","في المدينة","في الطبيعة","في الفندق - الوصول","في الفندق - شكاوى","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""];
	for (var i = 1; i < 10; i++) {
		$('#audioOrderList').append(  '<li class="well"><p class="audioText">'+audioFilesNames[i]+'</p><audio controls><source src="audio/ARNL00'+i+'.mp3.mp3" type="audio/mpeg">Please <a href="audio/ARNL00'+i+'.mp3.mp3" download>download</a> the audio file.</audio></li><!-- end li -->');
	}

	for (var i = 10; i < audioFilesNames.length; i++) {
		$('#audioOrderList').append(  '<li class="well"><p class="audioText">'+audioFilesNames[i]+'</p><audio controls><source src="audio/ARNL0'+i+'.mp3.mp3" type="audio/mpeg">Please <a href="audio/ARNL0'+i+'.mp3.mp3" download>download</a> the audio file.</audio></li><!-- end li -->');
	}



});
