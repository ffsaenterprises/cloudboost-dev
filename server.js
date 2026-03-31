
app.set('port', process.env.PORT || 1446);
var server = app.listen(app.get('port'), function() {
	console.log("CBTutorials started running on port:"+app.get('port'));
});