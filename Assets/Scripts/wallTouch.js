#pragma strict

function OnCollisionEnter (collision : Collision) {
	
	Debug.Log(collision.transform.tag);
	Debug.Log(collision.collider.tag);
	Debug.Log(collision.collider.tag);
	if (collision.collider.tag == "Player")
	{
		Debug.Log("Hit Player");
		audio.Play();
		collision.transform.position.x = -38f;
	}

}