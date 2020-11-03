function newGame() {
  bulletFrac = 400;
  //change the speed of bullets from the line bellow
  bulletSpeed = 30; 
  score = 0;
  level = 1;
  pause = false;
  lvlText.text = 'Level '+level
  scoreText.text = score+''
  resetLevel()
  ge('score_share').className = 'score_share';
}
