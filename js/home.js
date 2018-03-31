// Birdie Search

$(function() {
  var $rows = $('.content .item');
  $('#search').keyup(function() {
      var val = $.trim($(this).val()).replace(/ +/g, ' ').toLowerCase();
      $rows.show().filter(function() {
          var text = $(this).text().replace(/\s+/g, ' ').toLowerCase();
          // clean = clean.replace(diacriticsMap[text], text);
          return !~text.indexOf(val);
      }).hide();
  });
});
