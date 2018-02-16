// Start javascripting!!!

var incrementCounter = function() {
    
//    var numClicks = parseInt(document.getElementsByClassName("counter-text")[0].innerHTML.split(':')[1]);
    catCounters[currentCat] = catCounters[currentCat] + 1;
    
    document.getElementsByClassName("counter-text")[0].innerHTML = "Number of clicks: " + catCounters[currentCat];
}

var cats = ["cat_picture1.jpg", "cat_picture2.jpg", "cat_picture3.jpg", "cat_picture4.jpg", "cat_picture5.jpg"];

var catCounters = [0, 0, 0, 0, 0];

var currentCat = 0;

var setCat = function(n) {
    document.getElementsByClassName("clicker")[0].src = cats[n];
    currentCat = n;
    document.getElementsByClassName("counter-text")[0].innerHTML = "Number of clicks: " + catCounters[currentCat];
}