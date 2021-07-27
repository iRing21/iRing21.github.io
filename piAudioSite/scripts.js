
document.getElementById("compButt").addEventListener("click", function() {
    document.getElementById("compositionDesc").style.display = "inline";
    document.getElementById("editingDesc").style.display = "none";
    document.getElementById("mixingDesc").style.display = "none";
    document.getElementById("masteringDesc").style.display = "none";
    document.getElementById("voiceDesc").style.display = "none";

});

document.getElementById("editingButt").addEventListener("click", function() {
    document.getElementById("editingDesc").style.display = "inline";
    document.getElementById("compositionDesc").style.display = "none";
    document.getElementById("mixingDesc").style.display = "none";
    document.getElementById("masteringDesc").style.display = "none";
    document.getElementById("voiceDesc").style.display = "none";
});

document.getElementById("mixingButt").addEventListener("click", function() {
    document.getElementById("mixingDesc").style.display = "inline";
    document.getElementById("compositionDesc").style.display = "none";
    document.getElementById("editingDesc").style.display = "none";
    document.getElementById("masteringDesc").style.display = "none";
    document.getElementById("voiceDesc").style.display = "none";
});

document.getElementById("masteringButt").addEventListener("click", function() {
    document.getElementById("masteringDesc").style.display = "inline";
    document.getElementById("compositionDesc").style.display = "none";
    document.getElementById("editingDesc").style.display = "none";
    document.getElementById("mixingDesc").style.display = "none";
    document.getElementById("voiceDesc").style.display = "none";
});

document.getElementById("voiceButt").addEventListener("click", function() {
    document.getElementById("voiceDesc").style.display = "inline";
    document.getElementById("compositionDesc").style.display = "none";
    document.getElementById("editingDesc").style.display = "none";
    document.getElementById("mixingDesc").style.display = "none";
    document.getElementById("masteringDesc").style.display = "none";
});