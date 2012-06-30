#pragma strict

private var target : GameObject;

function Start () {

}

function Update () {
	if(target == null)
	{
		target = GameObject.Find("GenericMan_3(Clone)");
	}
	if(target != null)
	{
		transform.LookAt(target.transform.position);
	}
}