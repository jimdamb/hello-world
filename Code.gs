function getGmailLabel(name){ 


// Logs all of the names of your labels
//var labels = GmailApp.getUserLabels();
//for (var i = 0; i < labels.length; i++) {
//  Logger.log("label: " + labels[i].getName());
//}
//}



var label = GmailApp.getUserLabelByName(name);
  
//for (var i = 0; i < labelObject.length; i++) {
label = GmailApp.createLabel(name);
  Logger.log("etiquette est " + label);
//}
}
