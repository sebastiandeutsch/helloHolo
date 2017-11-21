/**
 * Called only when your source chain is generated
 * @return {boolean} success
 */
function genesis() {
  // any genesis code here
  return true;
}

// List of bookmarks
function listBookmarks() {
  var bookmarks = getLinks(App.DNA.Hash, "bookmarks", { Load:true });
  debug(App.DNA.Hash)
  debug(App.DNA)
  debug(App)
  debug("Bookmarks: " + JSON.stringify(bookmarks))
  if( bookmarks instanceof Error ){
      return []
  } else {
      var return_bookmarks = new Array(bookmarks.length);
      for( i=0; i<bookmarks.length; i++) {
          return_bookmarks[i] = bookmarks[i].Entry
          return_bookmarks[i].id = bookmarks[i].Hash
      }
      return return_bookmarks
  }
}

// Create a new bookmark
function newBookmark(bookmark) {
  debug("Yoyoyo newBookmark")
  debug(bookmark)
  var key = commit("bookmarks", bookmark);
  var bl_key = commit("bookmarks_links", { Links: [ { Base:App.DNA.Hash, Link: key, Tag: "bookmarks" } ] })
  debug(key);
  debug(bl_key);

  return key
}

function validateCommit(entry_type,entry,header,pkg,sources) {
  return true;
}

function validatePut(entry_type,entry,header,pkg,sources) {
  return true;
}

function validateLink(linkingEntryType,baseHash,linkHash,tag,pkg,sources){
  return true
}

function validateMod(entry_type,hash,newHash,pkg,sources) {
  return true;
}

function validateDel(entry_type,hash,pkg,sources) {
  return true;
}

function validatePutPkg(entry_type) { return null }
function validateModPkg(entry_type) { return null }
function validateDelPkg(entry_type) { return null }
function validateLinkPkg(entry_type) { return null }
