Template.studentList.helpers({
    students(){
        return Students.find();
    }
});

Template.studentList.events({
    "click #deleteStudent"(){
        Students.remove(this._id);
    },
    "click #getUpdateForm"(event, instance){
        var getUpdate = instance.find('#'+ this._id);
        getUpdate.style.display = "block";
    },
    "click .validUpdate"(event, instance){
        var updateName = instance.find('.updateName-'+ this._id).value;
        Students.update(
            this._id
            ,{
                $set : {
                    name : updateName
                }
            }
        );
        var getUpdate = instance.find('#'+ this._id);
        getUpdate.style.display = "none";
    }
});
