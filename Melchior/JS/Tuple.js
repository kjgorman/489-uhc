var Tuples = function () {
    "use strict";

    var Tuple = function () { }

    Tuple.prototype.pair = function (s, t, inpSignal) {
        window.debug && console.log("tuple: ", s, t, inpSignal)
        var newSignal = new Signals.Signal(),
            withS = _e_(UHCFunction.call(s, inpSignal)),
            withT = _e_(UHCFunction.call(t, inpSignal))
        window.debug && console.log("&&&: ", withS, withT)
        withS.registerListener(function(value) {
            newSignal.push(value)
        })
        withT.registerListener(function(value) {
            newSignal.push(value)
        })
        return newSignal
    }

    Tuple.prototype.combine = function (s, t) {
        var newSignal = new Signals.Signal()

        s.registerListener(function (value) {
            newSignal.push([value, t.sample()])
        })
        t.registerListener(function (value) {
            newSignal.push([s.sample(), value])
        })

        return newSignal
    }


    return new Tuple()
}()
