#pragma strict

var Effect : Transform;

function Update () 
{
	var hit : RaycastHit;
	var ray : Ray = Camera.main.ScreenPointToRay(Vector3(Screen.width * 0.5, Screen.height * 0.5, 0));
	
	if (Input.GetKeyDown(KeyCode.E) && transform.rotation.eulerAngles.y < 100)
	{
		Debug.DrawRay(transform.position, Vector3.forward, Color.yellow, 5);
		Debug.Log("Attack!");
		if (Physics.Raycast (ray, hit, 100))
		{
			hit.transform.SendMessage("onDestroy", SendMessageOptions.DontRequireReceiver);
		}
	}
}