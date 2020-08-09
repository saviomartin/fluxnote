//Populate voice selection dropdown
var voicelist = responsiveVoice.getVoices();
var vselect = $("#voiceselection");
$.each(voicelist, function() {
        vselect.append($("<option />").val(this.name).text(this.name));
});