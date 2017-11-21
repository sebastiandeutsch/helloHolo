function getBookmarks() {
  $.get("/fn/bookmarks/listBookmarks", "", function(result) {
    var bookmarks = JSON.parse(bookmarks);
    console.log(bookmarks);
  });
};

function addDummyBookmark() {
  var bookmark = {
    url: "https://9elements.com",
    title: "Digital Products gone wild!"
  };

  $.get("/fn/bookmarks/newBookmark?payload", JSON.stringify(bookmark), getBookmarks);
}


$(window).ready(function() {
  $('#add-link').on('click', function(event) {
    addDummyBookmark();
  });

  getBookmarks();
});
