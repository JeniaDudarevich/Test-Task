$(init);
function init() {
    for (var i = 1; i < 11; i++) {
        $('#makeMeDraggable' + i).draggable({
            stop: stopFunc
        });
    }
    $('#makeMeDroppable').droppable({
        drop: handleDropEvent
    });
}
function handleDropEvent(event, ui) {
    var draggable = ui.draggable;
    var id = draggable.attr('id');
    $('#'+ id).css('display', 'none');
}
function stopFunc (event, ui) {
    var id = event.target.id;
    var checkNone = $('#' + id).css('display');
    if (checkNone !== 'none') {
        $('#' + id).attr('style', 'position:relative');
    }
}
