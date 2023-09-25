function leftscroll() {
    document.getElementById('categoryBar').scrollBy(150, 0);
}

function rightscroll() {
    document.getElementById('categoryBar').scrollBy(-150, 0);
}

// document.addEventListener("DOMContentLoaded", function () {
navbar_active = false;
setInterval(function () {
    const categoryBar = document.getElementById('categoryBar');
    const scrollRight = document.getElementById('scrollRight');
    const scrollLeft = document.getElementById('scrollLeft');

    // Check if the categoryBar overflows
    if (categoryBar.scrollWidth > categoryBar.clientWidth) {
        scrollRight.style.display = 'block';
        scrollLeft.style.display = 'block';
        categoryBar.style.justifyContent = 'flex-start';
    } else {
        scrollRight.style.display = 'none';
        scrollLeft.style.display = 'none';
        categoryBar.style.justifyContent = 'center';
    }
}, 500);

function toggleMenu() {
    const navbar = document.getElementById('navbar-mobile');
    const main_content = document.getElementById('main-content');
    // navbar_mobile_btn = ;

    if (navbar_active) {
        navbar.classList.add("slide-right");
        // setTimeout(function () {
            navbar.classList.remove('navbar-mobile');
            navbar.classList.add('navbar-mobile-transparent');
            document.getElementById('navbar-mobile-btn').src = 'assets/images/menu.svg';

            translateStr = "-" + document.getElementById('navbar-mobile').offsetWidth.toString() + "px 0";
            document.getElementsByTagName('header')[0].style.translate = translateStr;
            document.getElementsByClassName("content")[0].style.translate = translateStr
        // }, 10);


    }
    else {
        navbar.classList.add("slide-left");
        // setTimeout(function () {
            navbar.classList.add('navbar-mobile');
            navbar.classList.remove('navbar-mobile-transparent');
            document.getElementById('navbar-mobile-btn').src = 'assets/images/close.png';

            translateStr = "-" + document.getElementById('navbar-mobile').offsetWidth.toString() + "px 0";
            document.getElementsByTagName('header')[0].style.translate = translateStr;
            document.getElementsByClassName("content")[0].style.translate = translateStr
        // }, 10);

    }
    navbar_active = !navbar_active;
}


document.addEventListener("DOMContentLoaded", function () {
	const slideShowItems = document.getElementsByClassName("slide-show-item");
	const circleContainer = document.querySelector(".circle-container");

	// Generate circles based on the number of project cards
	for (let i = 0; i < slideShowItems.length; i++) {
		const circle = document.createElement("div");
		circle.classList.add("circle");
		if (i === 0) {
			circle.style.backgroundColor = "black";
		}
		circleContainer.appendChild(circle);
	}

	// Attach click event listener to each circle
	const circles = document.querySelectorAll(".circle");
	circles.forEach((circle, index) => {
		circle.addEventListener("click", function () {
			showOtherItem(index - itemIndex);
		});
	});
});

var itemIndex = 0;
var colors = ['red', 'blue', 'deeppink']
var placeholder_texts = ['Try \'Logo Designing\'', 'Try \'Web Development\'', 'Try \'Graphic Designing\'']
async function showOtherItem(direction) {
	var circles = document.getElementsByClassName("circle");
	// projectCards = document.getElementsByClassName("project-card");
	slideShowItems = document.getElementsByClassName("slide-show-item");
    if (
		itemIndex + direction >= 0 &&
		itemIndex + direction < slideShowItems.length
	) {
        // slideShowItems[itemIndex].classList.add("fade-out");
        for(let i = 0; i < 30; i++) {
            slideShowItems[itemIndex].style.opacity = 1 - i/30;
            await new Promise(r => setTimeout(r, 1));
        }

        slideShowItems[itemIndex].style.display = "none"; // Hide the current card after the transition ends
        slideShowItems[itemIndex].classList.remove("slide-right", "slide-left"); // Remove the slide animation class
        circles[itemIndex].style.backgroundColor = "rgb(221, 221, 221)"
        itemIndex += direction;
        circles[itemIndex].style.backgroundColor = colors[itemIndex];
        document.getElementById('SearchIcon').style.backgroundColor = colors[itemIndex];
        document.getElementById('content-heading').style.color = colors[itemIndex];
        document.getElementById('content-search-bar').placeholder = placeholder_texts[itemIndex];

        slideShowItems[itemIndex].style.display = "flex"; // Show the next card
        slideShowItems[itemIndex].style.opacity = "1"; // Fade in the next card
		// Transition duration (milliseconds), adjust as needed
	}
	return;
}


setInterval(function () {
    if(itemIndex == 2) {
        showOtherItem(-2);
    }
    else{
        showOtherItem(1);
    }
}, 3000);
