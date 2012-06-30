#pragma strict

private var target : GameObject;

function Update()
{
	if (target == null)
	{
		target = GameObject.Find("GenericMan(Clone)");
	}
	
	if (target != null)
	{
		transform.LookAt(target.transform.position);
	}
}