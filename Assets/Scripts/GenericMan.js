#pragma strict

var ragdollprefab : GameObject;

function OnTriggerEnter(collider : Collider){
    if (collider.gameObject.name == "Body") {
        var ragdoll : GameObject =
         Instantiate(ragdollprefab,
                     transform.position,
                     transform.rotation);
        var body = 
            ragdoll.GetComponentInChildren.<Rigidbody>();

        body.AddForce(Vector3.up * 10.0, ForceMode.Impulse);

        Destroy(gameObject);
    }
}