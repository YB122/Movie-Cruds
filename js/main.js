(function () {
  initializeApp();
})();
function initializeApp() {
  var crudContainer = document.createElement("div");
  crudContainer.classList.add("crud-Container", "row");
  document.body.appendChild(crudContainer);

  // add element in crud-Container div
  {
    var header = document.createElement("header");
    header.classList.add("main-header");
    var inputSection = document.createElement("div");
    inputSection.classList.add("input-section", "col-lg-8", "offset-lg-2");
    var outputSection = document.createElement("div");
    outputSection.classList.add("output-section", "col-lg-8", "offset-lg-2");
    crudContainer.appendChild(header);
    crudContainer.appendChild(inputSection);
    crudContainer.appendChild(outputSection);
  }

  // all element in header
  {
    var NoteFlow = document.createElement("h1");
    header.appendChild(NoteFlow);
    NoteFlow.innerHTML = "NoteFlow";
    var subtitle = document.createElement("span");
    subtitle.classList.add("subtitle");
    subtitle.innerHTML = " CRUDS System";
    NoteFlow.append(subtitle);

    var firstP = document.createElement("p");
    firstP.innerHTML = "Manage your ideas effortlessly";
    header.appendChild(firstP);
  }
  // input section all div in input section div
  {
    var formGroup1 = document.createElement("div");
    formGroup1.classList.add("form-group");
    inputSection.appendChild(formGroup1);
    var formGroup2 = document.createElement("div");
    formGroup2.classList.add("form-group");
    inputSection.appendChild(formGroup2);
    var formGroup3 = document.createElement("div");
    formGroup3.classList.add("form-group");
    inputSection.appendChild(formGroup3);
    var formGroup4 = document.createElement("div");
    formGroup4.classList.add("form-group");
    inputSection.appendChild(formGroup4);

    var submitInput = document.createElement("div");
    submitInput.classList.add("submit-btn");
    inputSection.appendChild(submitInput);
  }

  // form group 1
  {
    var nameLabel = document.createElement("label");
    nameLabel.setAttribute("for", "name");
    nameLabel.innerHTML = "Name Of film";
    formGroup1.appendChild(nameLabel);
    var nameInput = document.createElement("input");
    nameInput.setAttribute("type", "text");
    nameInput.setAttribute("id", "name");
    nameInput.setAttribute("placeholder", "Name Of Film");
    nameInput.setAttribute("onkeyup", 'validateAllInput("nameInput",event)');
    formGroup1.appendChild(nameInput);
    var titleP = document.createElement("p");
    titleP.classList.add("fs-6", "text-danger", "d-none");
    titleP.id = "nameOfFilmMsg";
    titleP.innerHTML = "Name Of Film don't less than 3 letter";
    formGroup1.appendChild(titleP);
  }

  //form group 2 use formGroup2
  {
    var titleLabel = document.createElement("label");
    titleLabel.setAttribute("for", "rate");
    titleLabel.innerHTML = "rate";
    formGroup2.appendChild(titleLabel);
    var nameInput = document.createElement("input");
    nameInput.setAttribute("type", "text");
    nameInput.setAttribute("id", "rate");
    nameInput.setAttribute("placeholder", "Enter Rate Of Film");
    nameInput.setAttribute("onkeyup", 'validateAllInput("rateInput",event)');
    formGroup2.appendChild(nameInput);
    var titleP = document.createElement("p");
    titleP.classList.add("fs-6", "text-danger", "d-none");
    titleP.id = "rateMsg";
    titleP.innerHTML = "Rate must write from 0.0 to 5.0";
    formGroup2.appendChild(titleP);
  }

  //form group 3 use formGroup3
  {
    var titleLabel = document.createElement("label");
    titleLabel.setAttribute("for", "description");
    titleLabel.innerHTML = "description";
    formGroup3.appendChild(titleLabel);
    var nameInput = document.createElement("input");
    nameInput.setAttribute("type", "text");
    nameInput.setAttribute("id", "description");
    nameInput.setAttribute("placeholder", "Enter the Description");
    nameInput.setAttribute(
      "onkeyup",
      'validateAllInput("descriptionInput",event)',
    );
    formGroup3.appendChild(nameInput);
    var titleP = document.createElement("p");
    titleP.classList.add("fs-6", "text-danger", "d-none");
    titleP.id = "descriptionMsg";
    titleP.innerHTML = "Description must be at least one word";
    formGroup3.appendChild(titleP);
  }

  //form group 4 use formGroup4
  {
    var titleLabel = document.createElement("label");
    titleLabel.classList.add("form-label");
    titleLabel.setAttribute("for", "photo");
    titleLabel.innerHTML = "Upload Photo";
    formGroup4.appendChild(titleLabel);
    var nameInput = document.createElement("input");
    nameInput.classList.add("form-control");
    nameInput.setAttribute("type", "file");
    nameInput.setAttribute("accept", "image/*");
    nameInput.setAttribute("id", "photo");
    nameInput.setAttribute("onchange", 'validateAllInput("photoInput",event)');
    formGroup4.appendChild(nameInput);
    var titleP = document.createElement("p");
    titleP.classList.add("fs-6", "text-danger", "d-none");
    titleP.id = "photoMsg";
    titleP.innerHTML =
      "Photo must end with this extensions : (jpg|jpeg|png|gif|webp|svg|bmp|ico|tiff|avif)";
    formGroup4.appendChild(titleP);
    var photoPreview = document.createElement("img");
    photoPreview.id = "photoPreview";
    photoPreview.style.maxWidth = "100px";
    photoPreview.style.display = "none";
    photoPreview.style.marginTop = "10px";
    formGroup4.appendChild(photoPreview);
  }

  // submitInput
  {
    var submitBtn = document.createElement("button");
    submitBtn.id = "submitBtn";
    submitBtn.setAttribute("onclick", 'submitNote("add")');
    submitBtn.innerHTML = "Create Movie";
    submitInput.appendChild(submitBtn);
    var updateBtn = document.createElement("button");
    updateBtn.id = "updateBtn";
    updateBtn.setAttribute("onclick", 'submitNote("update")');
    updateBtn.innerHTML = "Update Movie";
    updateBtn.classList.add("d-none");
    submitInput.appendChild(updateBtn);
  }

  // outputSection
  {
    var searchBlock = document.createElement("div");
    searchBlock.classList.add("search-block");
    outputSection.appendChild(searchBlock);
    var movies = document.createElement("div");
    movies.classList.add(
      "movies",
      "row",
      "flex-row",
      "justify-content-start",
      "g-3",
    );
    movies.id = "movieSpecial";
    outputSection.appendChild(movies);
  }

  // search-block use searchBlock
  {
    var searchInput = document.createElement("input");
    searchInput.id = "search";
    searchInput.setAttribute("type", "text");
    searchInput.setAttribute("onkeyup", "checkInput()");
    searchInput.setAttribute("placeholder", "Search by Name or Rate...");
    searchBlock.appendChild(searchInput);
    var searchMode = document.createElement("div");
    searchMode.classList.add("search-modes");
    searchBlock.appendChild(searchMode);
    var searchName = document.createElement("button");
    searchName.id = "searchName";
    searchName.setAttribute("onclick", 'displayMovie("name")');
    searchName.innerHTML = "Search Name";
    searchMode.appendChild(searchName);
    var searchRate = document.createElement("button");
    searchRate.id = "searchRate";
    searchRate.setAttribute("onclick", 'displayMovie("rate")');
    searchRate.innerHTML = "Search Rate";
    searchMode.appendChild(searchRate);
  }
}

// Function Logic

var allInput = {
  nameInput: document.getElementById("name"),
  rateInput: document.getElementById("rate"),
  descriptionInput: document.getElementById("description"),
  photoInput: document.getElementById("photo"),
};

var msgInput = {
  nameInput: document.getElementById("nameOfFilmMsg"),
  rateInput: document.getElementById("rateMsg"),
  descriptionInput: document.getElementById("descriptionMsg"),
  photoInput: document.getElementById("photoMsg"),
};

var regaxInput = {
  photoInput: /.*\.(jpg|jpeg|png|gif|webp|svg|bmp|ico|tiff|avif)$/i,
  rateInput: /^([0-4](\.[0-9])?|5(\.0)?)$/,
  descriptionInput: /^[a-zA-Z0-9\s.,!?'"()-]+$/,
  nameInput: /^([^"]{4,})$/,
};

var currentIndex;
var isUpdating = false;
var notesList;
var searchInput = document.getElementById("search");
var numberOfMovie = 0;
var photoSrc;
var photoLoaded = true;

if (JSON.parse(localStorage.getItem("notes")) != null) {
  notesList = JSON.parse(localStorage.getItem("notes"));
  displayAllMovie();
  numberOfMovie = notesList.length;
} else notesList = [];

function clearInput() {
  allInput.nameInput.value = "";
  allInput.descriptionInput.value = "";
  allInput.rateInput.value = "";
  allInput.photoInput.value = "";
  document.getElementById("photoPreview").style.display = "none";
  photoSrc = undefined;
  photoLoaded = true;
}

function deleteMovie(index) {
  var state = window.confirm("are you sure?");
  if (state) {
    notesList.splice(index, 1);
    var movieWanteDelete = document.getElementById("movieSpecial");
    movieWanteDelete.children[index].remove();
    localStorage.setItem("notes", JSON.stringify(notesList));
    numberOfMovie--;
    reSetIndex(index);
  }
}

function checkInput() {
  if (searchInput.value == "") {
    for (let index = 0; index < notesList.length; index++) {
      document
        .getElementById("movieSpecial")
        .children[index].classList.remove("d-none");
    }
  }
}

function updateSetup(index) {
  currentIndex = index;
  isUpdating = true;
  document.getElementById("submitBtn").classList.add("d-none");
  document.getElementById("updateBtn").classList.remove("d-none");
  allInput.nameInput.value = notesList[index].name;
  allInput.descriptionInput.value = notesList[index].description;
  allInput.rateInput.value = notesList[index].rate;
  currentPhotoSrc = notesList[index].photo;
  photoSrc = notesList[index].photo;
  photoLoaded = true;
  document.getElementById("photoPreview").src = notesList[index].photo;
  document.getElementById("photoPreview").style.display = "block";
}

function submitNote(flag) {
  if (!photoLoaded) {
    setTimeout(() => submitNote(flag), 50);
    return;
  }
  if (checkAllInput()) {
    var note = {
      name: allInput.nameInput.value.trim(),
      description: allInput.descriptionInput.value.trim(),
      rate: allInput.rateInput.value.trim(),
      photo: photoSrc,
    };

    if (flag == "add") {
      notesList.push(note);
    } else {
      notesList.splice(currentIndex, 1, note);
      document.getElementById("submitBtn").classList.toggle("d-none");
      document.getElementById("updateBtn").classList.toggle("d-none");
      isUpdating = false;
    }
    clearInput();
    currentPhotoSrc = undefined;
    localStorage.setItem("notes", JSON.stringify(notesList));
    displayMovie(flag);
  }
}

function displayMovie(flag) {
  console.log(flag);
  if (flag == "add")
    makeMovie(notesList[notesList.length - 1], notesList.length - 1);
  else if (flag == "update") {
    var movieUpdate =
      document.getElementById("movieSpecial").children[currentIndex];
    movieUpdate.querySelector("span").innerHTML = notesList[currentIndex].rate;
    movieUpdate.querySelector("h5").innerHTML = notesList[currentIndex].name;
    movieUpdate.querySelector("p").innerHTML =
      notesList[currentIndex].description;
    movieUpdate.querySelector("img").src = notesList[currentIndex].photo;
  } else {
    for (let index = 0; index < notesList.length; index++) {
      if (
        !notesList[index][flag]
          .toLowerCase()
          .includes(searchInput.value.trim().toLowerCase())
      ) {
        document
          .getElementById("movieSpecial")
          .children[index].classList.add("d-none");
      }
    }
  }
}

function validateAllInput(flag, event) {
  if (flag != "photoInput") return testRegax(flag, allInput[flag].value);
  else {
    var fileName = allInput.photoInput.files[0];
    var file = event ? event.target.files[0] : allInput.photoInput.files[0];
    if (isUpdating && !file) {
      photoLoaded = true;
      return true;
    }
    if (file && file.type.startsWith("image/") && fileName) {
      photoLoaded = false;
      var reader = new FileReader();
      reader.onload = function (e) {
        photoSrc = e.target.result;
        photoLoaded = true;
      };
      reader.readAsDataURL(file);
      return testRegax(flag, fileName.name);
    } else {
      msgInput[flag].classList.remove("d-none");
      return false;
    }
  }
}

function testRegax(flag, testWhat) {
  if (regaxInput[flag].test(testWhat)) {
    msgInput[flag].classList.add("d-none");
    return true;
  } else {
    msgInput[flag].classList.remove("d-none");
    return false;
  }
}

function checkAllInput() {
  return (
    validateAllInput("nameInput") &&
    validateAllInput("rateInput") &&
    validateAllInput("descriptionInput") &&
    validateAllInput("photoInput")
  );
}

// make movie function
function makeMovie(notesList, index) {
  var movies = document.getElementById("movieSpecial");
  var movieDiv = document.createElement("div");
  movieDiv.classList.add("col-md-6", "col-lg-4", "rounded-4");
  movies.appendChild(movieDiv);
  var oneMovie = document.createElement("div");
  oneMovie.classList.add("movie", "card");
  movieDiv.appendChild(oneMovie);
  var rateinimage = document.createElement("div");
  rateinimage.classList.add(
    "rateinimage",
    "position-relative",
    "m-3",
    "shadow",
  );
  oneMovie.appendChild(rateinimage);
  var cardBody = document.createElement("div");
  cardBody.classList.add("row", "card-body");
  oneMovie.appendChild(cardBody);

  var imgMovie = document.createElement("img");
  imgMovie.classList.add("card-img-top", "w-100", "rounded-4");
  imgMovie.src = notesList.photo;
  imgMovie.alt = notesList.description;
  rateinimage.appendChild(imgMovie);

  var h1forrate = document.createElement("h1");
  h1forrate.classList.add("position-absolute", "top-0", "end-0", "m-2", "fs-4");
  rateinimage.appendChild(h1forrate);

  var spanforrate = document.createElement("span");
  spanforrate.classList.add(
    "badge",
    "text-bg-light",
    "bg-warning",
    "rounded-pill",
  );
  spanforrate.innerHTML = `${notesList.rate}`;
  h1forrate.appendChild(spanforrate);

  var movieName = document.createElement("h5");
  movieName.classList.add("card-title");
  movieName.innerHTML = `${notesList.name}`;
  cardBody.appendChild(movieName);

  var descriptionMovie = document.createElement("p");
  descriptionMovie.classList.add("card-text");
  descriptionMovie.innerHTML = `${notesList.description}`;
  cardBody.appendChild(descriptionMovie);

  var buttons = document.createElement("div");
  buttons.classList.add("row", "flex-row", "justify-content-between", "g-2");
  cardBody.appendChild(buttons);
  var button1 = document.createElement("div");
  button1.classList.add("col-lg-6", "mx-auto");
  buttons.appendChild(button1);
  var button2 = document.createElement("div");
  button2.classList.add("col-lg-6", "mx-auto");
  buttons.appendChild(button2);
  var updateMovie = document.createElement("button");
  updateMovie.classList.add("btn-update", "w-100");
  updateMovie.setAttribute("onclick", `updateSetup(${index})`);
  updateMovie.innerHTML = "Update";
  updateMovie.id = "updateMovie";
  button1.appendChild(updateMovie);
  var deleteMovie = document.createElement("button");
  deleteMovie.classList.add("btn-delete", "w-100");
  deleteMovie.setAttribute("onclick", `deleteMovie(${index})`);
  deleteMovie.innerHTML = "Delete";
  deleteMovie.id = "deleteMovie";
  button2.appendChild(deleteMovie);
}

function displayAllMovie() {
  for (let index = 0; index < notesList.length; index++) {
    makeMovie(notesList[index], index);
  }
}

function reSetIndex(i) {
  var parentMovie;
  for (let index = i; index < notesList.length; index++) {
    parentMovie = document.getElementById("movieSpecial").children[index];
    var deleteBtn = parentMovie.querySelector(".btn-delete");
    var updateBtn = parentMovie.querySelector(".btn-update");
    deleteBtn.removeAttribute("onclick");
    updateBtn.removeAttribute("onclick");
    deleteBtn.setAttribute("onclick", `deleteMovie(${index})`);
    updateBtn.setAttribute("onclick", `updateSetup(${index})`);
  }
}
