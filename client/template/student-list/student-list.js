var createStudent = function (instance, id){
    var updateName = instance.find('#updateName-'+ id).value;
    Students.update(
        id
        ,{
            $set : {
                name : updateName
            }
        }
    );
    var getUpdate = instance.find('#'+ id);
    getUpdate.style.display = "none";
}



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
    "click .validUpdate "(event, instance){
        createStudent(instance, this._id);

    },
    "keyup .updateInput"(event, instance){
        if (event.which !==13) return;
        createStudent(instance, this._id);
    }
});
