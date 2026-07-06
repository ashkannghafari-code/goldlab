// GoldLab v1.0

const airInput = document.getElementById("airWeight");
const waterInput = document.getElementById("waterWeight");

const densityResult = document.getElementById("density");
const karatResult = document.getElementById("karat");

const button = document.getElementById("calculateBtn");

button.addEventListener("click", calculate);

function calculate() {

    const air = parseFloat(airInput.value);
    const water = parseFloat(waterInput.value);

    if (isNaN(air) || isNaN(water)) {
        alert("لطفاً هر دو مقدار را وارد کنید.");
        return;
    }

    if (water <= 0) {
        alert("وزن در آب باید بزرگ‌تر از صفر باشد.");
        return;
    }

    if (air <= water) {
        alert("وزن در هوا باید از وزن در آب بیشتر باشد.");
        return;
    }

    // قانون ارشمیدس
    const density = air / (air - water);

    densityResult.innerText = density.toFixed(3) + " g/cm³";

    let karat = "نامشخص";

    if (density >= 18.90) karat = "24K";
    else if (density >= 18.40) karat = "23K";
    else if (density >= 17.90) karat = "22K";
    else if (density >= 17.50) karat = "21K";
    else if (density >= 17.00) karat = "20K";
    else if (density >= 16.50) karat = "19K";
    else if (density >= 16.00) karat = "18K";
    else if (density >= 15.50) karat = "17K";
    else if (density >= 15.00) karat = "16K";
    else if (density >= 14.50) karat = "15K";
    else if (density >= 14.00) karat = "14K";
    else if (density >= 13.50) karat = "13K";
    else if (density >= 13.00) karat = "12K";
    else if (density >= 12.50) karat = "11K";
    else if (density >= 12.00) karat = "10K";
    else karat = "کمتر از 10K";

    karatResult.innerText = karat;
}
