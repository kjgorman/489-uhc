var Events = function() {
    "use strict";

    var Event = function () { }

    Event.prototype.targetOf = function(evt) {
        return evt ? evt.target || evt.source : evt
    }

    Event.prototype.coordinates = function(evt) {
        if(window.debug) console.log("EVENTING ::: ", evt)
        return [evt.pageX, evt.pageY]
    }

    Event.prototype.applyNativeMapping = function(evt) {
        var type = evt.type,
            events = [[
                "click",
                "dblclick",
                "mousedown",
                "mouseup",
                "mouseenter",
                "mouseleave",
                "mouseout",
                "mouseover",
                "mousemove"
            ],
            [
                "input",
                "change",
                "reset",
                "submit",
                "invalid"
            ]]
        for(var i = 0, len = events.length; i < len; i++) {
            if(!!~(evt._tag_ = events[i].indexOf(type))) return
        }
    }

    return new Event()
}()