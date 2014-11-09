#pragma strict

function gameOver ()
{
	Application.LoadLevel("gameOver");
}

function OnCollisionEnter (collision : Collision) 
{	
	if (collision.gameObject.tag == "Player")
	{
		gameOver();
	}

}