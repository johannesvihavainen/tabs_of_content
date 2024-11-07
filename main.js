var historyBtn = document.querySelector('.history-btn');
var visionBtn = document.querySelector('.vision-btn');
var goalsBtn = document.querySelector('.goals-btn');

var navContentTitle = document.querySelector('.nav-content-title');
var navContentDescription = document.querySelector('.nav-content-description');

historyBtn.addEventListener('click', function () {
    visionBtn.style = "border: none;"
    goalsBtn.style = "border: none;"
    historyBtn.style = "border: 2px solid rgb(2, 255, 40);"
    navContentTitle.innerHTML = 'History';
    navContentDescription.innerHTML = `France has a long and rich history dating back to the early Middle Ages. The country was once known
                    as Gaul, inhabited by Celtic tribes. In 51 BC, the region was conquered by the Roman Empire under
                    Julius Caesar. After the fall of the Roman Empire, the Franks, a Germanic tribe, took control of the
                    region, and the Kingdom of France was formed.`;
})

visionBtn.addEventListener('click', function () {
    historyBtn.style = "border: none;"
    goalsBtn.style = "border: none;"
    visionBtn.style = "border: 2px solid rgb(2, 255, 40);"
    navContentTitle.innerHTML = 'Vision';
    navContentDescription.innerHTML = `France envisions a future where its rich cultural heritage, strong democratic values, and innovative spirit continue to thrive on the global stage. The country is committed to promoting sustainability, equality, and social cohesion within its borders and around the world. As a leader in environmental initiatives, France aims to reduce its carbon footprint and combat climate change, striving for a green economy powered by renewable energy and responsible consumption.`;
})

goalsBtn.addEventListener('click', function () {
    historyBtn.style = "border: none;"
    visionBtn.style = "border: none;"
    goalsBtn.style = "border: 2px solid rgb(2, 255, 40);"
    navContentTitle.innerHTML = 'Goals';
    navContentDescription.innerHTML = `France is committed to achieving a set of ambitious goals that will shape the nation’s future and ensure its continued role as a global leader. These goals span across areas such as environmental sustainability, technological advancement, social welfare, and international diplomacy.`;
})