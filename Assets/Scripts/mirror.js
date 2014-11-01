#pragma strict

function Update () {

	if (Input.GetMouseButtonDown(0))
	{
		transform.RotateAround (transform.transform.position, Vector3.up, 180f);
	}

}