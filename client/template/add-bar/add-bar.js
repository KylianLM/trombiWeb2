// ADD STUDENT //

Template.addBar.events({
    "click #addStudent" (event, instance){
        var newName = instance.find('#studentName').value;
        if (newName.trim() != '') {
            Students.insert({
                name: newName,
                img: ''
            });
            instance.find('#studentName').value = '';
        }
    }
});