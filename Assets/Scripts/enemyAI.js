var distance;
var target : Transform;
var distanceAway = 25f;
var speed = 5f;
var damping = 6f;
var isAudioOff : boolean = true;

function Update ()
{
	distance = Vector3.Distance(target.position, transform.position);
	if (distance < distanceAway)
	{
		renderer.material.color = Color.yellow;
		aiRender();
	}	
	if (distance > distanceAway)
	{
		renderer.material.color = Color.green;
		rigidbody.velocity = Vector3.zero;
		audio.Stop();
	}
}

function aiRender ()
{
	var rotation = Quaternion.LookRotation(target.position - transform.position);
	transform.rotation = Quaternion.Slerp(transform.rotation, rotation, Time.deltaTime * damping);
	rigidbody.AddForce(transform.forward * speed);
	if (isAudioOff)
	{
		audio.Play();
		isAudioOff = false;
	}
}
