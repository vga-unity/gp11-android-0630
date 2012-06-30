#pragma strict

var prefab : GameObject;

function Start() {
	while (true) {
		var position = Vector3(Random.Range(-150.0, 150.0), 50.0, Random.Range(-150.0, 150.0));
		
		var hit : RaycastHit;
		Physics.Raycast(position, -Vector3.up, hit);
		
		var instance : GameObject = Instantiate(prefab, hit.point, Quaternion.AngleAxis(Random.Range(-180.0, 180.0), Vector3.up));
		
		while (instance != null) yield;
	}
}
