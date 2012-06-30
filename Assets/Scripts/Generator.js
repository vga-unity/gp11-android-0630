#pragma strict

var GenericManPrefab : GameObject;
var GenericMansPrefab : GameObject;

function Start () {
	while(true){
		var position = Vector3(Random.Range(-100.0, 100.0), 50, Random.Range(-100.0, 100.0));
		var hit : RaycastHit;
		Physics.Raycast(position, Vector3.up * -1.0, hit);
		
		var instance : GameObject = Instantiate(GenericMansPrefab, hit.point, Quaternion.identity);
		
		while(instance != null){
			yield;
		}
	}
}

function Update () {
	
}