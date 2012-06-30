#pragma strict

var ragPrefab : GameObject;

function Start () {

}

function OnTriggerEnter(collider : Collider)
{
	if(collider.gameObject.name == "Body")
	{
		var rag : GameObject = Instantiate(ragPrefab, transform.position, transform.rotation);
		
		var body = rag.GetComponentInChildren.<Rigidbody>();
		body.AddForce(Vector3.up * 200.0f, ForceMode.Impulse);
		
		Destroy(gameObject);
	}
}

function Update () {

}