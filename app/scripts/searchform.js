/**
 * Created by ds on 04/12/14.
 */

var DEFAULT_DATA_URL = "assets/data/featured-products.json";
var searchForm  = document.getElementById("searchForm");
var searchFormProdName  = document.getElementById("searchFormProdName");
var searchFormSearchButton = document.getElementById("searchFormSearchButton");
var productList = document.getElementById("productsList");

//INIT
//document.getElementById("navBarLink").addEventListener("click", function() {location.reload()} , false);
//document.getElementById("breadCrHome").addEventListener("click", function() {location.reload()} , false);

//init Price
var minValue = 1000;
var maxValue = 1500;
$("#slider")
    .slider({
        min: 0,
        max: 2000,
        step: 10,
        value: [minValue, maxValue],
        tooltip: "hide"
    })
    .on('slide', function(ev){
        $("#currentPriceLow").val(ev.value[0]);
        $("#currentPriceHigh").val(ev.value[1]);
    });
$("#currentPriceLow").val(minValue);
$("#currentPriceHigh").val(maxValue);


//datetimepicker
$(function () {
    $('#datetimepicker1').datetimepicker({
        pickTime: false
    });
});
//
////Handlebars init
//var source   = $("#entry-template").html();
//var template = Handlebars.compile(source);
////INIT
//
//
//
////refresh items
//var showItems = function(html) {
//    while (productList.firstChild) {
//        productList.removeChild(productList.firstChild);
//    }
//    //console.log(html);
//    if (html)
//        productList.innerHTML = html;
//    else
//        productList.innerHTML = $('#alert-msg').html();
//}
//
//function loadData(dataUrl) {
//
//    var xhr = new XMLHttpRequest();
//    if (dataUrl)
//        xhr.open('GET', dataUrl, true);
//    else
//        xhr.open('GET', DEFAULT_DATA_URL, true);
//    xhr.onreadystatechange = function() {
//        if (xhr.readyState == 4) {
//            if((xhr.status >=200 && xhr.status <300) || xhr.status===304){
//                console.log(xhr.statusText);
//                var jsonData = JSON.parse(xhr.responseText).items;
//                console.log("json " + jsonData)
//                if (jsonData) {
//                    var html    = template(jsonData);
//                    showItems(html);
//                } else {
//                    showItems();
//                }
//
//
//            }else{
//                console.log(xhr.statusText);
//                showItems()
//            }
//        }
//    }
//    xhr.send();
//}
//
//var searchAndPopulate = function(){
//    loadData("assets/data/search-results.json");
//}
//
////set Handler on Nav Bar Button
//navBarSearchButton.addEventListener("click", function () {
//    searchForm.style.display = "block";
//    featuredProductCarousel.style.display = 'none';
//    searchFormProdName.value = navBarsearchInput.value;
//    searchFormSearchButton.click();
//}, false);
//
////set Handler on Search Form Button
//searchFormSearchButton.addEventListener("click", searchAndPopulate , false);
//
//
////
//loadData();
//
//
//
