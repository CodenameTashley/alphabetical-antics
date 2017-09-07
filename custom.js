var vm = {};

vm = {
  /* Variables */
  searchText: "",
  type:1,
  result: "",
  /* Functions */
  process: process,
  isSearchBarEmpty, isSearchBarEmpty
}

function process() {
  vm.result = vm.type
}

function isSearchBarEmpty() {
  return (vm.searchText.length >0);
}

function isAnagram() {

}

function isPalindrome() {

}


var app = new Vue({
  el: '#app',
  data: vm

});