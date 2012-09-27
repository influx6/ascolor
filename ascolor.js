AsColor = (function(){

   var generate = function(n){
      if(typeof n !== 'number') return false;
      return "\033["+n+"m";
   };

   return {
      fg: {
         red: generate(31),
         green: generate(32),
         white: generate(37),
         cyan: generate(36),
         margenta: generate(35),
         black: generate(30),
         yellow: generate(33),
         blue: generate(34),
         reset: generate(39),
      },
      bg:{
         red: generate(41),
         green: generate(42),
         white: generate(47),
         cyan: generate(46),
         margenta: generate(45),
         black: generate(40),
         yellow: generate(43),
         blue: generate(44),
         reset: generate(49)
      },
      reset: generate(0),
      reverse: generate(7),
      forward: generate(27),
      extra: {
         boldOn: generate(1),
         italicOn: generate(3),
         underlineOn: generate(4),
         boldoff: generate(22),
         italicOff: generate(23),
         underlineOff: generate(24),
         strikeOn: generate(9),
         strikeOff: generate(29),
      }
   }
})();

module.exports = AsColor;
