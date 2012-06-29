#pragma strict

var ragdollPrefab : GameObject;

function OnTriggerEnter(collider : Collider) {
	if (collider.gameObject.name == "Body") {
		var force = (transform.position - collider.transform.position).normalized * 20.0;
		force += Vector3.up * 10.0;
		force += Random.insideUnitSphere * 20.0;

		AddForceRecurse(Instantiate(ragdollPrefab, transform.position, transform.rotation), force);

		Destroy(gameObject);
	}
}

function AddForceRecurse(node : GameObject, force : Vector3) {
	if (node.rigidbody) {
		node.rigidbody.AddForce(force, ForceMode.Impulse);
	}
	for (var child in node.transform) {
		AddForceRecurse((child as Transform).gameObject, force);
	}
}
