const calcy = () => {
  let wd = document.getElementById('wd').value;
  let maths = document.getElementById('maths').value;
  let comp = document.getElementById('comp').value;
  let phy = document.getElementById('phy').value;
  let ds = document.getElementById('ds').value;
  let grades = "";

  let totalGrades = (parseFloat(wd) + parseFloat(maths) + parseFloat(comp) + parseFloat(phy) + parseFloat(ds)).toFixed(2);

  let perc = (((totalGrades / 500) * 100).toFixed(2));

  if (perc <= 100 && perc >= 80) {
      grades = 'A';
  } else if (perc <= 79 && perc >= 60) {
      grades = 'B';
  } else if (perc <= 59 && perc >= 40) {
      grades = 'C';
  } else {
      grades = 'F';
  }

  if (perc >= 39.5) {
      document.getElementById('showData').innerHTML = `Out of 500 your total is ${totalGrades} and percentage is ${perc}%.<br> Your grade is ${grades}.`;
      document.getElementById('result').innerHTML = `PASS`;
      document.getElementById('result').classList.add('glow');
  } else {
      document.getElementById('showData').innerHTML = `Out of 500 your total is ${totalGrades} and percentage is ${perc}%.<br> Your grade is ${grades}.`;
      document.getElementById('result').innerHTML = `FAIL`;
      document.getElementById('result').classList.add('glowi');
  }
}
