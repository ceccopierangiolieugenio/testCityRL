function init_main(){
    var display = new ROT.Display();
    document.body.appendChild(display.getContainer());
    /*display.setOptions({
        fontSize: 8,
        fontStyle: "bold",
        bg: "#a00"
    });*/
    
    ROT.RNG.setSeed(Math.random());
    var map = new ROT.Map.Digger();
    
    map.create(display.DEBUG);
    var drawDoor = function(x, y) {
        display.draw(x, y, "", "", "red");
    }
    
    var rooms = map.getRooms();
    for (var i=0; i<rooms.length; i++) {
        var room = rooms[i];
        console.log("Room #%s: [%s, %s] => [%s, %s]".format(
            (i+1),
            room.getLeft(), room.getTop(),
            room.getRight(), room.getBottom()
        ));
    
        room.getDoors(drawDoor);
    }
}
