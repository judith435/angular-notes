notesApp.controller('ctrlNotes', function notesCtrl($scope, noteService) {
    $scope.showErrorMessages = false;
    $scope.notes = noteService.getNotes(true);

    $scope.$on('notes-changed', function(event, noFadeIn) {
        $scope.notes = noteService.getNotes(noFadeIn);
    });

    $scope.deleteNote = function(id)  {
        noteService.deleteNote(id);
    }  
});

notesApp.controller('ctrlAddNote', function notesCtrl($scope, noteService) {
    $scope.memo_date = new Date();  
    $scope.memo_time = new Date();
    
    $scope.addNote = function()  {

        if ($scope.formNewNote.$invalid){
             $scope.showErrorMessages = true;
             return;
        }

        note = {
            date: $scope.memo_date,
            time: $scope.memo_time,
            content: $scope.memo_content,
            new: true
        };
        noteService.saveNote(note);
        $scope.memo_date = new Date();  
        $scope.memo_time = new Date();
        $scope.memo_content = "";
        $scope.showErrorMessages = false;
    }  
});


