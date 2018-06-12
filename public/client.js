/*client side java
*/
/* when button is clicked */
function insertNewTwit(Author, Picture, Caption) {

  //Bring in twitTemplate template
  var postTemplate = Handlebars.templates.postTemplate;
  console.log("== author:",Author);
	console.log("== picture:",Picture);
	console.log("== caption:",Caption);
  //Assign the HTML variable the proper context for twitTemplate
  var postHTML = postTemplate({
    Author: Author,
		Picture: Picture,
		Likes: "100 likes",
		Caption: Caption
  });

  //Create a twit-container element and insert new twit at end
  var postElem = document.querySelector('main.insto-container');
  postElem.insertAdjacentHTML('beforeend', postHTML);


}


/***************************************************************************
 **
 ** You should not modify any of the code below.
 **
 ***************************************************************************/

/*
 * This is a global array containing an object representing each twit.  Each
 * twit object has the following form:
 *
 * {
 *   text: "...",
 *   author: "..."
 * }
 */
var allPosts = [];

/*
 * This function checks whether all of the required inputs were supplied by
 * the user and, if so, inserts a new twit into the page using these inputs.
 * If the user did not supply a required input, they instead recieve an alert,
 * and no new twit is inserted.
 */
function handleModalAcceptClick() {

  var postAuthor = document.getElementById('post-attribution-input').value;
	var postPhoto = document.getElementById('post-photo-input').value;
  var postCaption = document.getElementById('photo-caption-input').value;

  /*
   * Only generate the new twit if the user supplied values for both the twit
   * text and the twit attribution.  Give them an alert if they didn't.
   */
  if (postAuthor && postPhoto && postCaption) {

    allPosts.push({
      Author: postAuthor,
			Picture: postPhoto,
			Likes: "100 likes",
      Caption: postCaption
    });

    clearSearchAndReinsertPosts();

    hideCreatePostModal();

  } else {

    alert('You must specify all information necessary!');

  }
}


/*
 * This function clears the current search term, causing all twits to be
 * re-inserted into the DOM.
 */
function clearSearchAndReinsertPosts() {

//  document.getElementById('navbar-search-input').value = "";
  doSearchUpdate();

}


/*
 * This function shows the modal to create a twit when the "create twit"
 * button is clicked.
 */
function showCreatePostModal() {

  var modalBackdrop = document.getElementById('modal-backdrop');
  var createPostModal = document.getElementById('create-post-modal');

  // Show the modal and its backdrop.
  modalBackdrop.classList.remove('hidden');
  createPostModal.classList.remove('hidden');

}


/*
 * This function clears any value present in any of the twit input elements.
 */
function clearPostInputValues() {

  var postInputElems = document.getElementsByClassName('post-input-element');
  for (var i = 0; i < postInputElems.length; i++) {
    var input = postInputElems[i].querySelector('input, textarea');
    input.value = '';
  }

}


/*
 * This function hides the modal to create a twit and clears any existing
 * values from the input fields whenever any of the modal close actions are
 * taken.
 */
function hideCreatePostModal() {

  var modalBackdrop = document.getElementById('modal-backdrop');
  var createPostModal = document.getElementById('create-post-modal');

  // Hide the modal and its backdrop.
  modalBackdrop.classList.add('hidden');
  createPostModal.classList.add('hidden');

  clearPostInputValues();

}

function postMatchesSearchQuery(post, searchQuery) {
  /*
   * An empty query matches all twits.
   */
  if (!searchQuery) {
    return true;
  }

  /*
   * The search query matches the twit if either the twit's text or the twit's
   * author contains the search query.
   */
//  searchQuery = searchQuery.trim().toLowerCase();
//  return (twit.author + " " + twit.text).toLowerCase().indexOf(searchQuery) >= 0;
}
/*
 * Perform a search over over all the twits based on the search query the user
 * entered in the navbar.  Only display twits that match the search query.
 * Display all twits if the search query is empty.
 */
function doSearchUpdate() {

  /*
   * Grab the search query from the navbar search box.
   */
  var searchQuery = document.getElementById('photo-caption-input').value;

  /*
   * Remove all twits from the DOM temporarily.
   */
  var postContainer = document.querySelector('.insto-container');
  if (postContainer) {
    while (postContainer.lastChild) {
      postContainer.removeChild(postContainer.lastChild);
    }
  }

  /*
   * Loop through the collection of all twits and add twits back into the DOM
   * if they match the current search query.
   */
  allPosts.forEach(function (post) {
    if (postMatchesSearchQuery(post, searchQuery)) {
      insertNewTwit(post.Author, post.Photo, post.Caption);
    }
  });

}


/*
 * This function parses an existing DOM element representing a single twit
 * into an object representing that twit and returns that object.  The object
 * is structured like this:
 *
 * {
 *   text: "...",
 *   author: "..."
 * }
 */
function parsePostElem(postElem) {

  var post = {};

  var postAuthorElem = postElem.querySelector('.post-author a');
  post.Author = postAuthorElem.textContent.trim();

	var postPhotoElem = postElem.querySelector('.post-picture img');
  post.Photo = postAuthorElem.textContent.trim();

  var postCaptionElem = postElem.querySelector('.post-caption');
  post.Caption = postCaptionElem.textContent.trim();

  return post;

}

window.addEventListener('DOMContentLoaded', function () {

  // Remember all of the existing twits in an array that we can use for search.
  var postElemsCollection = document.getElementsByClassName('post');
  for (var i = 0; i < postElemsCollection.length; i++) {
    allPosts.push(parsePostElem(postElemsCollection[i]));
  }

  var createPostButton = document.getElementById('create-post-button');
  if (createPostButton) {
    createPostButton.addEventListener('click', showCreatePostModal);
  }

  var modalCloseButton = document.querySelector('#create-post-modal .modal-close-button');
  if (modalCloseButton) {
    modalCloseButton.addEventListener('click', hideCreatePostModal);
  }

  var modalCancelButton = document.querySelector('#create-post-modal .modal-cancel-button');
  if (modalCancelButton) {
    modalCancelButton.addEventListener('click', hideCreatePostModal);
  }

  var modalAcceptButton = document.querySelector('#create-post-modal .modal-accept-button');
  if (modalAcceptButton) {
    modalAcceptButton.addEventListener('click', handleModalAcceptClick);
  }

  var searchButton = document.getElementById('search-button');
  if (searchButton) {
    searchButton.addEventListener('click', doSearchUpdate);
  }

  // var searchInput = document.getElementById('navbar-search-input');
  // if (searchInput) {
  //   searchInput.addEventListener('input', doSearchUpdate);
  // }

});

// var hidden = document.getElementsByClassName('hidden');
// var button = document.getElementById('create-post-button');
// button.addEventListener('click', callOnce);
//
// function callOnce() {
// 	console.log('Button clicked!');
// 	hidden[0].style.display = "block";
// 	hidden[1].style.display = "block";
//
//   document.getElementById('post-attribution-input').value = "";
//   document.getElementById('post-photo-input').value = "";
// 	document.getElementById('photo-caption-input').value = "";
// }
// /* control the input box */
// var cancel = document.getElementsByClassName('modal-cancel-button');
// cancel[0].addEventListener('click', function () {
// 	hidden[0].style.display = "none";
// 	hidden[1].style.display = "none";
// });
// var close = document.getElementsByClassName('modal-close-button');
// close[0].addEventListener('click', function () {
// 	hidden[0].style.display = "none";
// 	hidden[1].style.display = "none";
// });
//
//
// /*set accept up to recieve input */
// var accept = document.getElementsByClassName('modal-accept-button');
//
// accept[0].addEventListener('click', function() {
//   var postTemplate = Handlebars.templates.postTemplate;
// 	var aLink = document.getElementById('post-attribution-input').value.trim();
// 	var link = document.getElementById('post-photo-input').value.trim();
//   var caption = document.createTextNode(document.getElementById('photo-caption-input').value)
//
// 	var postHTML = postTemplate({
// 		Author: aLink,
// 		Picture: link,
// 		Likes: '100 likes',
// 		Caption: caption
// 	});
//
// 	var postElem = document.querySelector('main.insto-container');
// 	postElem.insertAdjacentHTML('beforeend', postHTML);
//
// 	// var post = document.createElement('article')
// 	// var divAuthor = document.createElement('div')
//  //  var divPhoto = document.createElement('div')
//  //  var divURL = document.createElement('div')
//  //  var divContent = document.createElement('div')
//  //  var iuser    = document.createElement('i')
//  //  var iLikes   = document.createElement('i')
//  //  var authorLink = document.createElement('a')
//  //  /* create author */
//  //  var author = document.createElement('p')
//  //  var a = document.createTextNode(document.getElementById('post-attribution-input').value.trim());
//  //  // var aLink = document.getElementById('post-attribution-input').value.trim();
//  //  /* create photo link */
//  //  var img = document.createElement('img');
//  //  // var link = document.getElementById('post-photo-input').value.trim();
//  //
//  //  /* create photo caption */
//  //  var plikes = document.createElement('p')
// 	// var description = document.createElement('p')
// 	// // var caption = document.createTextNode(document.getElementById('photo-caption-input').value)
//  //
// 	// if (document.getElementById('post-photo-input').value)
// 	// {
// 	// if (document.getElementById('post-attribution-input').value)
// 	// {
//  //  if (document.getElementById('photo-caption-input').value)
//  //
//  //  /* assign author */
// 	// post.classList.add('post');
//  //  divAuthor.classList.add('post-author-content');
//  //  author.classList.add('post-author');
//  //  iuser.classList.add('fas','fa-user-circle');
//  //  authorLink.setAttribute("href", "/instogram/users/" + aLink);
//  //  /* assign image */
//  //  divPhoto.classList.add('post-photo-caption');
//  //  divURL.classList.add('post-picture');
//  //  img.src = link;
//  //  /* assign image content */
//  //  divContent.classList.add('post-content');
//  //  plikes.classList.add('post-likes');
//  //  iLikes.classList.add('far','fa-heart');
//  //  description.classList.add('post-caption');
//  //
//  // /* store author */
//  //  author.appendChild(iuser);
//  //  authorLink.appendChild(a);
//  //  author.appendChild(authorLink);
//  //  divAuthor.appendChild(author);
//  // /* store photo */
//  //  divURL.appendChild(img);
//  //  divPhoto.appendChild(divURL);
//  // /* store photo caption */
//  //  plikes.appendChild(iLikes);
//  //  // description.appendChild(caption);
//  //  // divContent.appendChild(description);
//  //  divContent.appendChild(plikes);
// 	// description.appendChild(caption);
//  //  divContent.appendChild(description);
//  //  divPhoto.appendChild(divContent);
//  // /* add to the main post */
// 	// post.appendChild(divAuthor);
//  //  post.appendChild(divPhoto);
//  //
// 	// var parent = document.getElementsByClassName('insto-container');
//  //
// 	// parent[0].appendChild(post);
//
// 	hidden[0].style.display = "none";
// 	hidden[1].style.display = "none";
//
// } else { alert("Fill in the author box");}
// } else { alert("Fill in all the caption boxes");}
// });
//
//
// var elems = document.getElementsByClassName('post');
// var allElems = [];
// for (var i = 0; i < elems.length; i++) {
//   allElems.push(elems[i]);
// }

/* names like stat will need to be changed
function likePost(stat){
  var likeCount = parseInt(stat.getElementByClassName('stat')[0].textContent);
  likeCount += 1;
  stat.getElementByClassName('stat')[0].textContent = likeCount;

  /* call function to add red class to the heart
}
*/

/* search fuction

var search = document.getElementById('navbar-search-input');

search.addEventListener('input', function() {

	var parent = document.getElementsByClassName('post-container');
	var elems = document.getElementsByClassName('post');

	if (elems.length > allElems.length)
	{
		for( var i = allElems.length; i < elems.length; i++)
		{
			allElems.push(elems[i]);
		}
	}

	for( var i = 0; i < allElems.length; i++)
	{
		parent[0].appendChild(allElems[i]);
	}

	var navbar = document.getElementById('navbar-search-input').value;
	var caption = document.getElementsByClassName('post-caption');
	var author = document.getElementsByClassName('post-attribution');
	var post = document.getElementsByClassName('post');

	var q = post.length;

	for (var i = 0; i < q; i++) {
 	 	if (caption[i].captionContent.includes(navbar) || author[i].captionContent.includes(navbar) ){
	}
	else
	{
		console.log(caption[i].captionContent.includes(navbar) );
		post[i].remove();
		var q = post.length;
		i--;
	}
}

});
*/
