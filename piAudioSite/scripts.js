
document.getElementById("compButt").addEventListener("click", function() {
    document.getElementById("compositionDesc").style.display = "inline";
    document.getElementById("mixingDesc").style.display = "none";
    document.getElementById("advertisingDesc").style.display = "none";
    document.getElementById("contactDesc").style.display = "none";
    document.getElementById("bioDesc").style.display = "none";
});

document.getElementById("advertisingButt").addEventListener("click", function() {
    document.getElementById("compositionDesc").style.display = "none";
    document.getElementById("mixingDesc").style.display = "none";
    document.getElementById("advertisingDesc").style.display = "inline";
    document.getElementById("contactDesc").style.display = "none";
    document.getElementById("bioDesc").style.display = "none";
});

document.getElementById("mixingButt").addEventListener("click", function() {
    document.getElementById("compositionDesc").style.display = "none";
    document.getElementById("mixingDesc").style.display = "inline";
    document.getElementById("advertisingDesc").style.display = "none";
    document.getElementById("contactDesc").style.display = "none";
    document.getElementById("bioDesc").style.display = "none";
});

document.getElementById("contactButt").addEventListener("click", function() {
    document.getElementById("compositionDesc").style.display = "none";
    document.getElementById("mixingDesc").style.display = "none";
    document.getElementById("advertisingDesc").style.display = "none";
    document.getElementById("contactDesc").style.display = "inline";
    document.getElementById("bioDesc").style.display = "none";
});

document.getElementById("bioButt").addEventListener("click", function() {
    document.getElementById("compositionDesc").style.display = "none";
    document.getElementById("mixingDesc").style.display = "none";
    document.getElementById("advertisingDesc").style.display = "none";
    document.getElementById("contactDesc").style.display = "none";
    document.getElementById("bioDesc").style.display = "inline";
});