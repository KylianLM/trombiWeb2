// ADD STUDENT //
Template.addBar.onCreated(function(){
    this.fileName = new ReactiveVar('');
});

Template.addBar.events({
    "click #addStudent" (event, instance){
        var newName = instance.find('#studentName').value;
        if (newName.trim() != '') {
            Students.insert({
                name: newName,
                img: instance.fileName.get()
            });
            instance.find('#studentName').value = '';
        }
    },
    "change #fileInput"(event, instance) {
      if (event.currentTarget.files && event.currentTarget.files[0]) {
          var upload = Images.insert({
              file: event.currentTarget.files[0],
              streams: 'dynamic',
              chunkSize: 'dynamic'
          }, false);
          upload.on('end',function(error, fileObj){
              if(error){
                  alert('Erreur pendant l\'upload : ' + error);
              }else{
                  instance.fileName.set(fileObj.path)
              }
          });
          upload.start();
      }
    }
});

