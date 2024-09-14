const wholeGuidebox = document.getElementById("wholeGuideBox");
const guideBoxRow = document.getElementById("guideBoxRow");
const guideBox1 = document.getElementById("guideBoxContent1");
const guideBox2 = document.getElementById("guideBoxContent2"); 
const guideBox3 = document.getElementById("guideBoxContent3");
const linebreak = document.getElementById("contentLinebreakContainer");
const linebreak2 = document.getElementById("contentLinebreak");
const weaponBox = document.getElementById("weaponBox"); 
const armorBox = document.getElementById("armorBox");
const accessoryBox = document.getElementById("accessoryBox");

document.addEventListener('DOMContentLoaded', function() {

  function resizeWindow() {
    if (window.innerWidth < 1520) {
      wholeGuidebox.classList.remove("ms-5");
      linebreak2.classList.remove("ms-5");
      linebreak.classList.add("justify-content-center",);
  } else {
    wholeGuidebox.classList.add("ms-5");
    linebreak2.classList.add("ms-5");
    linebreak.classList.remove("justify-content-center");
  }
  if (window.innerWidth < 770) { 
    guideBox1.classList.remove("col-2");
    guideBox1.classList.add("col-12", "justify-content-center", "d-flex");
    guideBox2.classList.remove("col-4");
    guideBox2.classList.add("col-6");
    guideBox3.classList.remove("float-end");
    weaponBox.classList.remove("col-4");
    armorBox.classList.remove("col-4");
    accessoryBox.classList.remove("col-4");
    armorBox.classList.add("mt-3");
    accessoryBox.classList.add("mt-3");
} else {
    guideBox1.classList.add("col-2");
    guideBox1.classList.remove("col-12");
    guideBox2.classList.add("col-4");
    guideBox2.classList.remove("col-6");
    guideBox3.classList.add("float-end");
    weaponBox.classList.add("col-4");
    armorBox.classList.add("col-4");
    accessoryBox.classList.add("col-4");
    armorBox.classList.remove("mt-3");
    accessoryBox.classList.remove("mt-3");
}
}

  resizeWindow();

  window.addEventListener('resize', resizeWindow);
});