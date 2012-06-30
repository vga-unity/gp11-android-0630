#pragma strict

var prefab : GameObject;

function Start () 
{
	while(true)
	{
		var pos = Vector3(Random.Range(-100.0f, 100.0f),
						  50.0f,
						  Random.Range(-100.0f, 100.0f));
		
		var hit : RaycastHit;
		Physics.Raycast(pos, Vector3.up * -1.0f, hit);
		
		var instan : GameObject = Instantiate(prefab, hit.point, Quaternion.identity);
		
		while(instan != null) yield;
	}
}



function Update () {

}