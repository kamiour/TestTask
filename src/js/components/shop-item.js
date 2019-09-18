var shopItemList = document.getElementsByClassName("card-shop-item");
var newList = document.getElementsByClassName("card-label-new");
var saleList = document.getElementsByClassName("card-label-sale");
var costList = document.getElementsByClassName("card-cost-old");
var i;

for (i = 0; i < shopItemList.length; i++) {
  if ($(shopItemList[i]).attr("new")==="false") {
    $(newList)[i].style.display = 'none';
  }
}

for (i = 0; i < shopItemList.length; i++) {
  if ($(shopItemList[i]).attr("discountCost")==="null") {
    $(saleList)[i].style.display = 'none';
    $(costList)[i].style.display = 'none';
  }
}
