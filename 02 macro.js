macro swap {
  rule { {$a <=> $b} } => {
    var tmp = $a;
    $a = $b;
    $b = tmp;
  }
}

var a = 10;
var b = 20;

swap {a <=> b}

//$ sjs -o 02\ compiled.js 02\ macro.js
