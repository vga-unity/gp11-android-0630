#pragma strict

var ragdollPrefab : GameObject;

function OnTriggerEnter(collider : Collider)
{
	if (collider.gameObject.name == "Body")
	{
		var ragdoll : GameObject = Instantiate(ragdollPrefab, transform.position, transform.rotation);
		
		var body = ragdoll.GetComponentInChildren.<Rigidbody>();
		
		body.AddForce(Vector3.up * 120.0, ForceMode.Impulse);
		
		Destroy(gameObject);
	}
}