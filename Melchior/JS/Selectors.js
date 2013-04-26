var Selectors = function () {
    "use strict";

    var Selector = function () { }

    Selector.prototype.selectById = function(elem, pattern) {
        return elem.getElementById(pattern)
    }
  
    Selector.prototype.selectByClass = function(elems, pattern) {
        var returned = [], i = 0, j = 0, nodelist = []
        if(elems.length) {
            for(; i < elems.length; i++) {
                nodelist = elems[i];
                if(elems[i].classList.contains(pattern)) returned.push(elems[i])
                for(; j < nodelist.length; j++) {
                    returned.push.apply(returned, nodelist.item(j).getElementsByClassName(pattern))
                }
            }
        } else {
            if(elems && elems.classList.contains(pattern)) returned.push(elems)
            returned.push(elems.getElementsByClassName(pattern))
        }

        return returned
    }    
    
    Selector.prototype.toInput = function(elem) {
        if(elem && elem.length) {
            return elem.map(oneToOneToInput).filter(function(e) { return e !== null; })
        } else {
            return oneToOneToInput(elem)
        }
    }

    var oneToOneToInput = function (elem) {
        return elem && elem.tagName === "INPUT" ? elem : null
    }

    Selector.prototype.toDiv = function(elem) {
        if(elem && elem.length) {
            return elem.map(oneToOneToDiv).filter(function (e) { return e !== null })
        } else {
            return oneToOneToDiv(elem)
        }
    }

    var oneToOneToDiv = function (elem) {
        return elem && elem.tagName === "DIV" ? elem : null
    }

    Selector.prototype.toSpan = function(elem) {
        if(elem && elem.length) {
            return elem.map(oneToOneToSpan).filter(function (e) { return e !== null })
        } else {
            return oneToOneToSpan(elem)
        }
    }

    var oneToOneToSpan = function (elem) {
        return elem && elem.tagName === "SPAN" ? elem : null
    }


    Selector.prototype.toDocument = function(elem) {
        //the assumption here being that only the document has
        //Selector.prototype defined... #TODO - probably an actual value to check
        return elem && elem.doctype !== undefined ? elem : null
    }
    
    return new Selector()
}()
