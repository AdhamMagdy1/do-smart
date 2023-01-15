var z = [];
let daleteArr = [];
let userId = localStorage.getItem('Id');
if (userId) {
  mainContainer = document.querySelector('.fades');
  mylist = document.querySelector('.mainList');
  mainContainer.innerHTML = mylist.innerHTML;
  document.querySelector('.listhere').innerText =
    window.localStorage.getItem('listname');
  getAll();
}

function letstry() {
  mainContainer = document.querySelector('.fades');
  mainContainer.classList.add('fadeout');
  creatlist = document.getElementById('creatlist');
  setTimeout(() => {
    mainContainer.innerHTML = creatlist.innerHTML;
    mainContainer.classList.remove('fadeout');
    document.querySelector('.listhere').innerText =
      window.localStorage.getItem('listname');
  }, 900);
}

function geListName() {
  let dd = document.getElementById('createList').value;

  if (dd == '' || dd == ' ') {
    document.getElementById('createList').style.backgroundColor = '#E89094';
  } else {
    localStorage.setItem('Id', 'true');
    window.localStorage.setItem('listname', dd);
    document.getElementById('createList').value = '';
    mainContainer = document.querySelector('.fades');
    mainContainer.classList.add('fadeout');
    mylist = document.querySelector('.mylist');
    setTimeout(() => {
      mainContainer.innerHTML = mylist.innerHTML;
      mainContainer.classList.remove('fadeout');
      document.querySelector('.listhere').innerText =
        window.localStorage.getItem('listname');
    }, 900);

    document.querySelector('.listhere').innerText =
      window.localStorage.getItem('listname');
  }
}

function getItems() {
  document.querySelector('.listhere').innerText =
    window.localStorage.getItem('listname');
  mainContainer = document.querySelector('.adding');
  mainContainer.classList.add('fadeout');
  mylist = document.querySelector('.addtolist');
  setTimeout(() => {
    mainContainer.innerHTML = mylist.innerHTML;
    mainContainer.classList.remove('fadeout');
    document.querySelector('.listhere').innerText =
      window.localStorage.getItem('listname');
    thedata();
  }, 900);
}

function addItem() {
  document.querySelector('.listhere').innerText =
    window.localStorage.getItem('listname');
  dd = document.getElementById('item-input').value;
  if (dd == '' || dd == ' ') {
    document.getElementById('item-input').style.backgroundColor = '#E89094';
  } else {
    z.push(dd);
    localStorage.setItem('dataArr', JSON.stringify(z));
    showitems();
  }
  var messageBody = document.querySelector('.theitems');
  messageBody.scrollTop = messageBody.scrollHeight - messageBody.clientHeight;
}
function showitems() {
  let theitems = document.querySelector('.theitems');
  theitems.innerHTML +=
    ' <div class="ittt" onclick="checkItems(this)"> <img src="./images/uncheck.svg" alt="" class="checkbox"><h4 class"item">' +
    dd +
    '</h4> </div>';
  document.getElementById('item-input').value = '';
}
function saveData() {
  z = [];
  var existingEntries = JSON.parse(localStorage.getItem('allEntries'));
  if (existingEntries == null) existingEntries = [];
  if (
    localStorage.getItem('dataArr') == null ||
    localStorage.getItem('dataArr').length == 0
  ) {
    getAll();
  } else {
    var bb = JSON.parse(localStorage.getItem('dataArr'));

    for (let i = 0; i < bb.length; i++) {
      var entry = {
        check: 'checked',
        data: bb[i],
      };
      //localStorage.setItem("entry", JSON.stringify(entry));
      // Save allEntries back to local storage
      existingEntries.push(entry);
      localStorage.setItem('allEntries', JSON.stringify(existingEntries));
    }
    var bb = [];
    localStorage.setItem('dataArr', JSON.stringify(bb));

    getAll();
  }
}

function getAll() {
  document.querySelector('.listhere').innerText =
    window.localStorage.getItem('listname');
  var existingEntries = JSON.parse(localStorage.getItem('allEntries'));
  if (existingEntries == null || existingEntries.length == 0) {
    mainContainer = document.querySelector('.fades');
    mainContainer.classList.add('fadeout');
    mylist = document.querySelector('.mylist');
    setTimeout(() => {
      mainContainer.innerHTML = mylist.innerHTML;
      mainContainer.classList.remove('fadeout');
      document.querySelector('.listhere').innerText =
        window.localStorage.getItem('listname');
    }, 900);
  } else {
    mainContainer = document.querySelector('.fades');
    mainContainer.classList.add('fadeout');
    mylist = document.querySelector('.mainList');
    setTimeout(() => {
      mainContainer.innerHTML = mylist.innerHTML;
      document.querySelector('.listhere').innerText =
        window.localStorage.getItem('listname');
      mainContainer.classList.remove('fadeout');
      thedata();
    }, 900);
  }
}
function thedata() {
  var existingEntries = JSON.parse(localStorage.getItem('allEntries'));
  let theitems = document.querySelector('.theitems');
  existingEntries.forEach((element) => {
    if (element.check == 'checked') {
      theitems.innerHTML +=
        ' <div class="ittt" onclick="checkItems(this)" > <img src="./images/uncheck.svg" alt="" class="checkbox"><h4 class="item">' +
        element.data +
        '</h4> </div>';
    } else {
      theitems.innerHTML +=
        ' <div class="ittt" onclick="checkItems(this)" > <img src="./images/check.svg" alt="" class="checkbox"><h4 class="item checked" >' +
        element.data +
        '</h4>  </div>';
    }
  });
}
function checkItems(div) {
  let so = div.childNodes[2].innerHTML;
  let d = JSON.parse(localStorage.getItem('allEntries'));
  d.forEach((element) => {
    if (element.data == so) {
      if (element.check == 'checked') {
        div.childNodes[1].src = './images/check.svg';
        div.childNodes[2].classList.add('checked');
        element.check = 'unchecked';
        localStorage.setItem('allEntries', JSON.stringify(d));
      } else if (element.check == 'unchecked') {
        div.childNodes[1].src = './images/uncheck.svg';
        div.childNodes[2].classList.remove('checked');
        element.check = 'checked';
        localStorage.setItem('allEntries', JSON.stringify(d));
      }
    }
  });
}
function addtoexist() {
  mainContainer = document.querySelector('.fades');
  mainContainer.classList.add('fadeout');
  mylist = document.querySelector('.addtolist');
  setTimeout(() => {
    document.querySelector('.listhere').innerText =
      window.localStorage.getItem('listname');
    mainContainer.innerHTML = mylist.innerHTML;
    document.querySelector('.listhere').innerText =
      window.localStorage.getItem('listname');
    mainContainer.classList.remove('fadeout');
    thedata();
  }, 900);
}
function deleteitall() {
  localStorage.clear();
  refershpage();
}

function deleteItems() {
  mainContainer = document.querySelector('.fades');
  mainContainer.classList.add('fadeout');
  mylist = document.querySelector('.deleteclass');
  setTimeout(() => {
    mainContainer.innerHTML = mylist.innerHTML;
    document.querySelector('.listhere').innerText =
      window.localStorage.getItem('listname');
    mainContainer.classList.remove('fadeout');
    document.querySelector('.listhere').innerText =
      window.localStorage.getItem('listname');
    thedatadel();
  }, 900);
}
function thedatadel() {
  var existingEntries = JSON.parse(localStorage.getItem('allEntries'));
  let theitems = document.querySelector('.theitems');
  existingEntries.forEach((element) => {
    if (element.check == 'checked') {
      theitems.innerHTML +=
        ' <div class="ittt" onclick="deleteIt(this)"  > <img src="./images/uncheck.svg" alt="" class="checkbox"><h4 class="item">' +
        element.data +
        '</h4><img src="./images/delete.svg" alt="" class="mindel effect"> </div>';
    } else {
      theitems.innerHTML +=
        ' <div class="ittt" onclick="deleteIt(this)" > <img src="./images/check.svg" alt="" class="checkbox"><h4 class="item checked" >' +
        element.data +
        '</h4> <img src="./images/delete.svg" alt="" class="mindel effect" > </div>';
    }
  });
  document.querySelector('.ittt').style.cursor = 'default';
}
function refershpage() {
  location.reload();
}
function deleteIt(div) {
  let so = div.childNodes[2].innerHTML;
  daleteArr.push(so);
  div.remove();
}
function saveDel() {
  let d = JSON.parse(localStorage.getItem('allEntries'));
  let ss = daleteArr;
  for (let i = 0; i < daleteArr.length; i++) {
    for (let j = 0; j < daleteArr.length; j++) {
      d.forEach((element, index) => {
        if (element.data == ss[i]) {
          d.splice(index, 1);
          localStorage.setItem('allEntries', JSON.stringify(d));
        }
      });
    }
  }

  getAll();
}
function getTheAbout() {
  mainContainer = document.querySelector('.bord');
  mainContainer.classList.add('fadeout');
  content = document.querySelector('.aboutsec0');

  setTimeout(() => {
    mainContainer.innerHTML = content.innerHTML;
    mainContainer.classList.remove('fadeout');
  }, 900);
}
function getMenu() {
  document.querySelector('.menu').style.display = 'none';
  document.querySelector('.doropdown').classList.add('fadeout');
  document.querySelector('.doropdown').style.display = 'flex';

  document.querySelector('.doropdown').classList.remove('fadeout');
}
function exitMenu() {
  document.querySelector('.menu').style.display = 'block';
  document.querySelector('.doropdown').classList.add('fadeout');

  setTimeout(() => {
    document.querySelector('.doropdown').style.display = 'none';
    document.querySelector('.doropdown').classList.remove('fadeout');
  }, 200);
}
