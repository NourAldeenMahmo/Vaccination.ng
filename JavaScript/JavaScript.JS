// دالة تشغيل الميشن
AOS.init();

// هذا الكود يفعل خاصية تحديد الدولة للرقم في الأنبوت
const input = document.querySelector("#phone");
const iti = window.intlTelInput(input, {
  initialCountry: "auto",
  separateDialCode: "true",
  geoIpLookup: function (callback) {
    fetch("https://ipinfo.io?token=YOUR_TOKEN", {
      headers: { Accept: "application/json" },
    })
      .then((response) => response.json())
      .then((data) => callback(data.country))
      .catch(() => callback("us"));
  },
  utilsScript:
    "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
});
// _________________________________________________________________________________________________________________

function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  sidebar.classList.toggle("visible"); // إضافة أو إزالة كلاس 'visible'
}
