({
    sendMessage : function(name){
    },
    
    handleMessage : function(name) {
        var toastEvent = $A.get("e.force:showToast");
        toastEvent.setParams({
            "title": "Hi Back",
            "message": name + " says: 'Hi Back'"
        });
        toastEvent.fire();
	}
})