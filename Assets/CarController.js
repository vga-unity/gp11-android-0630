#pragma strict

var frontTires : WheelCollider[];
var rearTires : WheelCollider[];

function Update() {
	if (Input.GetButton("Fire1")) {
		for (var tire in frontTires) {
			tire.motorTorque = 500;
		}
	}
}
