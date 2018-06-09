/*client side java
*/

var allPosts = [];

function handleModalAcceptClick() {

    var postCaption = document.getElementById('photo-caption-input').value;
    var postAuthor = document.getElementById('post-attribution-input').value;
    var postImage = document.getElementById('post-photo-input').value;
    /*
     * Only generate the new Post if the user supplied values for both the Post
     * caption and the Post attribution.  Give them an alert if they didn't.
     */
    if (postCaption && postAuthor && postImage) {
  
      allPosts.push({
        author: postAuthor,
        image: postImage,
        text: postCaption
      });  
  
      clearSearchAndReinsertPosts();
  
      hideCreatePostModal();
  
    } else {
  
      alert('You must specify both the text and the author of the post!');
  
    }
}

/*clear post inputs */
function clearPostInputValues() {

    var postInputElems = document.getElementsByClassName('post-input-element');
    for (var i = 0; i < postInputElems.length; i++) {
      var input = postInputElems[i].querySelector('input, textarea');
      input.value = '';
    }
  
  }


    /* search items*/
    function clearSearchAndReinsertPosts() {

        document.getElementById('navbar-search-input').value = "";
        doSearchUpdate();
      
      }

    function doSearchUpdate() {
        /* no navbar searchbox? */
        var searchQuery = document.getElementById('navbar-search-input').value;
      
        var postContainer = document.querySelector('.post-container');
        if (postContainer) {
          while (postContainer.lastChild) {
            postContainer.removeChild(postContainer.lastChild);
          }
        }
      
        /*
         * Loop through the collection of all postss and add posts back into the DOM
         */
        allPosts.forEach(function (post) {
          if (postMatchesSearchQuery(post, searchQuery)) {
            insertNewPost(post.author, post.photo, post.image);
          }
        });
      
      }
    function postMatchesSearchQuery(post, searchQuery) {
        /* An empty query matches all posts.*/
        if (!searchQuery) {
          return true;
        }
      
        /*
         * The search query matches the post if either the post's text or the post's
         * author contains the search query.
         */
        searchQuery = searchQuery.trim().toLowerCase();
        return (post.author + " " + post.caption).toLowerCase().indexOf(searchQuery) >= 0;
      }



    /* show the text input */
    function showCreatePostModal() {

        var modalBackdrop = document.getElementById('modal-backdrop');
        var createPostModal = document.getElementById('create-post-modal');
      
        // Show the modal and its backdrop.
        modalBackdrop.classList.remove('hidden');
        createPostModal.classList.remove('hidden');
      
      }

      /* hide the text input */
      function hideCreatePostModal() {

        var modalBackdrop = document.getElementById('modal-backdrop');
        var createPostModal = document.getElementById('create-post-modal');
      
        // Hide the modal and its backdrop.
        modalBackdrop.classList.add('hidden');
        createPostModal.classList.add('hidden');
      
        clearPostInputValues();
      
      }



      function parsePostElem(postElem) {

        var post = {};
      
        var postTextElem = postElem.querySelector('.post-caption');
        post.text = postTextElem.textContent.trim();
      
        var postAttributionLinkElem = postElem.querySelector('.post-author a');
        post.author = postAttributionLinkElem.textContent.trim();
      
        return post;
      
      }

      /* listen for events */
      window.addEventListener('DOMContentLoaded', function () {

        // Remember all of the existing Posts in an array that we can use for search.
        var PostElemsCollection = document.getElementsByClassName('post');
        for (var i = 0; i < PostElemsCollection.length; i++) {
          allPosts.push(parsePostElem(PostElemsCollection[i]));
        }
      
        var createPostButton = document.getElementById('create-post-button');
        if (createPostButton) {
          createPostButton.addEventListener('click', showCreatePostModal);
        }
      
        var modalCloseButton = document.querySelector('#create-post-modal .modal-close-button');
        if (modalCloseButton) {
          modalCloseButton.addEventListener('click', hideCreatePostModal);
        }
      
        var modalCancalButton = document.querySelector('#create-post-modal .modal-cancel-button');
        if (modalCancalButton) {
          modalCancalButton.addEventListener('click', hideCreatePostModal);
        }
      
        var modalAcceptButton = document.querySelector('#create-post-modal .modal-accept-button');
        if (modalAcceptButton) {
          modalAcceptButton.addEventListener('click', handleModalAcceptClick);
        }
      
        var searchButton = document.getElementById('navbar-search-button');
        if (searchButton) {
          searchButton.addEventListener('click', doSearchUpdate);
        }
      
        var searchInput = document.getElementById('navbar-search-input');
        if (searchInput) {
          searchInput.addEventListener('input', doSearchUpdate);
        }
      
      });