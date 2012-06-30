#pragma strict

var RagdollPerfab : GameObject;

function Start () {

}

function Update () {
	
}

function OnTriggerEnter(collider : Collider){
	if(collider.gameObject.name == "Body"){
		var ragdoll : GameObject = Instantiate(RagdollPerfab, transform.position, transform.rotation);
		var body = ragdoll.GetComponentInChildren.<Rigidbody>();
		body.AddForce(Vector3.up * 300.0, ForceMode.Impulse);
		Destroy(gameObject);
	}
}