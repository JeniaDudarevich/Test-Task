$(init);
function init() {
    for (var i = 1; i < 10; i++) {
        $('#block' + i).draggable({
            stop: handleDragEvent
        });
    }
    $('#boundaryBlock').droppable({
        drop: handleDropEvent
    });
}
function handleDropEvent(event, ui) {
    var draggable = ui.draggable;
    var id = draggable.attr('id');
    $('#'+ id).css('display','none');
}
function handleDragEvent (event, ui) {
    var id = event.target.id;
    var checkNone = $('#' + id).css('display');
    if (checkNone !== 'none') {
        $('#' + id).attr('style', 'position:relative');
    }
}
