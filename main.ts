robobit.select_model(RBModel.Mk3)
robobit.driveMilliseconds(400, 1000)
robobit.driveTurnMilliseconds(RBRobotDirection.Left, 600, 1000)
basic.forever(function () {
    robobit.driveMilliseconds(600, 1000)
    basic.pause(1000)
    robobit.driveMilliseconds(-600, 1000)
    basic.pause(1000)
})
