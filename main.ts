let vooruit = 94
let achteruit = 95
let links = 93
let rechts = 92
let stop = 37
basic.forever(function () {
    if (IR.IR_read() == vooruit) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 44)
    } else if (IR.IR_read() == achteruit) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 44)
    } else if (IR.IR_read() == links) {
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 44)
    } else if (IR.IR_read() == rechts) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 44)
    } else if (IR.IR_read() == stop) {
        maqueen.motorStop(maqueen.Motors.All)
    }
})
