#pragma strict

private var target : GameObject;

function Start () {

}

function Update () {
	if(target == null){
		target = gameObject.Find("GenericMan(Clone)");
	}
	
	if(target == null){
		target = gameObject.Find("GenericMan");
	}
	
	if(target != null){
		transform.LookAt(target.transform.position);
	}
}