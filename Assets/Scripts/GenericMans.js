#pragma strict

function Start () {

}

function Update () {

}

function OnTriggerEnter(collider : Collider){
	if(collider.gameObject.name == "Body"){
		Destroy(gameObject);
	}
}