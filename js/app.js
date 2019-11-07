//General Array Function
function MakeArray(n) {
  this.length = n;
  for (var i = 1; i <= n; i++) {
    this[i] = 0;
  }
}

//Day of Week Function
function compute(form) {

  var C = Number(C);
  var As = Number(As);
  var Aw = Number(Aw);
	
  var Wph = Number(Wph);
  var Wt = Number(Wt);


  var C = form.capacity.value;
  var As = form.sleep_c.value;
  var Aw = form.wake_c.value;
	
  var Wph = form.wake_n.value;
  var Wt = form.wake_t.value;
	
  var c = C * 0.85;
  //milliseconds are in an hour
  var msph = 3600000;
  var Twph = Wph * Wt
  var Tsph = msph - Wph
  var Aavg = ((Aw*Twph)+(As*Tsph))/msph
  var days = (c/Aavg)/24
  var years = days/365
  
  form.result1.value = Math.round(days*100)/100;
  form.result2.value = Math.round(years*100)/100;
}

         // end script -->
