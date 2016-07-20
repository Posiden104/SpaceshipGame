# SpaceshipGame

A game hosted in [Airconsole](https://www.airconsole.com) where players consist of one captain and officers.


##API<br>

###Messages<br>

####Controller TO screen <br>
``` "ready" ``` <br>
    Informs the screen that you are ready to play the game. After all players send this code, the game begins.

``` "get_title" ``` <br>
    Requests which position you are. <br>
        Returned values: <br>
            ``` playerState.CAPTIAN ``` <br>
            ``` playerState.OFFICER ```
