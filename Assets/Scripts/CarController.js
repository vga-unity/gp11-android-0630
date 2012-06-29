#pragma strict

var frontTires : WheelCollider[];
var rearTires : WheelCollider[];

var maxRpm : float;
var maxTorque : float;
var brakeTorque : float;
var steerAngle : float;

function RpmToTorque(rpm : float) {
	return maxTorque * (1.0 - Mathf.Clamp(rpm, 0.0, maxRpm) / maxRpm);
}

function SetMotorTorque(torque : float) {
	rearTires[0].motorTorque = torque;
	rearTires[1].motorTorque = torque;
}

function SetBrakeTorque(torque : float) {
	frontTires[0].brakeTorque = torque;
	frontTires[1].brakeTorque = torque;
	rearTires[0].brakeTorque = torque;
	rearTires[1].brakeTorque = torque;
}

function Update() {
	if (Input.GetButton("Fire1")) {
		var rpm = (rearTires[0].rpm + rearTires[1].rpm) / 2.0;
		SetMotorTorque(RpmToTorque(rpm));
		SetBrakeTorque(0.0);
	} else {
		SetMotorTorque(0.0);
		SetBrakeTorque(brakeTorque);
	}
	for (var tire in frontTires) {
		tire.steerAngle = Input.GetAxis("Horizontal") * steerAngle;
	}
}
