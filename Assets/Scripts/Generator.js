#pragma strict

var prefab : GameObject;

function Start()
{
	while (true)
	{
		var position = Vector3(Random.Range(-100.0, 100.0), 50.0, Random.Range(-100.0, 100.0));
		
		var hit : RaycastHit;
		Physics.Raycast(position, Vector3.up * -1.0, hit);
		
		var Instance : GameObject = Instantiate(prefab, hit.point, Quaternion.identity);
		
		while (Instance != null) yield;
	}
}