var callAddFont = function () {
this.addFileToVFS('Yeon Sung.ttf', font);
this.addFont('Yeon Sung.ttf', 'Yeon Sung', 'normal');
};
jsPDF.API.events.push(['addFonts', callAddFont])