# SpaceshipGame

A game hosted in [Airconsole](https://www.airconsole.com) where players consist of one captain and officers.


##API<br>

###Messages<br>

####Controller --> Screen <br>
``` "ready" ``` <br>
&nbsp;&nbsp;&nbsp;&nbsp;Informs the screen that you are ready to play the game. After all players send this code, the game begins.

``` "get_title" ``` <br>
&nbsp;&nbsp;&nbsp;&nbsp;Requests which position you are. <br>
&nbsp;&nbsp;&nbsp;&nbsp;Returned values: <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;``` playerState.CAPTIAN ``` <br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;``` playerState.OFFICER ```
