"use strict";
require('traceur-source-maps').install(require('traceur'));
Function.prototype.bind2 = function bind2(that) {
  for (var args = [],
      $__1 = 1; $__1 < arguments.length; $__1++)
    $traceurRuntime.setProperty(args, $__1 - 1, arguments[$traceurRuntime.toProperty($__1)]);
  var $__0 = this;
  return (function() {
    for (var innerArgs = [],
        $__2 = 0; $__2 < arguments.length; $__2++)
      $traceurRuntime.setProperty(innerArgs, $__2, arguments[$traceurRuntime.toProperty($__2)]);
    return $__0.apply(that, args.concat(innerArgs));
  });
};
function foo() {
  console.log(this, arguments);
}
foo.bind2({hell: 'world'}, 1, 2, 3)(4, 5, 6);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc3QuZXM2LmpzIiwiQHRyYWNldXIvZ2VuZXJhdGVkL1RlbXBsYXRlUGFyc2VyLzEwIiwiQHRyYWNldXIvZ2VuZXJhdGVkL1RlbXBsYXRlUGFyc2VyLzkiLCJAdHJhY2V1ci9nZW5lcmF0ZWQvVGVtcGxhdGVQYXJzZXIvMTIiLCJAdHJhY2V1ci9nZW5lcmF0ZWQvVGVtcGxhdGVQYXJzZXIvMTEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQSxNQUFNLEFBQUMsQ0FBQyxxQkFBb0IsQ0FBQyxRQUFRLEFBQUMsQ0FBQyxPQUFNLEFBQUMsQ0FBQyxTQUFRLENBQUMsQ0FBQyxDQUFDO0FBQUMsT0FBTyxVQUFVLE1BQU0sRUFBSSxTQUFTLE1BQUksQ0FBRSxJQUFHLEFBQVM7QUNDckcsTUFBUyxHQUFBLE9BQW9CLEdBQUM7QUFBRyxhQUFvQyxDQUNoRSxPQUFvQixDQUFBLFNBQVEsT0FBTyxDQUFHLE9BQWtCO0FBQzNELEFDSGQsa0JBQWMsWUFBWSxBQUFDLE1ER0ssU0FBb0MsQ0VIcEUsQ0ZHeUUsU0FBUSxDRUgvRCxlQUFjLFdBQVcsQUFBQyxNQUFrQixDQUFDLENEQ2pCLENERXVEO0FBQUE7QURGcEcsU0FBTyxTQUFDLEFBQVc7QUlBUixRQUFTLEdBQUEsWUFBb0IsR0FBQztBQUFHLGFBQW9CLEVBQUEsQ0FDaEQsT0FBb0IsQ0FBQSxTQUFRLE9BQU8sQ0FBRyxPQUFrQjtBQUMzRCxBRkhkLG9CQUFjLFlBQVksQUFBQyxpQkNBM0IsQ0NHcUQsU0FBUSxDREgzQyxlQUFjLFdBQVcsQUFBQyxNQUFrQixDQUFDLENEQ2pCLENFRW1DO0FBQUEsU0pGdkQsQ0FBQSxVQUFTLEFBQUMsQ0FBQyxJQUFHLENBQUcsQ0FBQSxJQUFHLE9BQU8sQUFBQyxDQUFDLFNBQVEsQ0FBQyxDQUFDO0VBQUEsRUFBQTtBQUNqRSxDQUFBO0FBRUEsT0FBUyxJQUFFLENBQUMsQUFBQyxDQUFFO0FBQ2QsUUFBTSxJQUFJLEFBQUMsQ0FBQyxJQUFHLENBQUcsVUFBUSxDQUFDLENBQUE7QUFDNUI7QUFBQSxBQUVBLEVBQUUsTUFBTSxBQUFDLENBQUMsQ0FBQyxJQUFHLENBQUcsUUFBTSxDQUFDLENBQUcsRUFBQSxDQUFFLEVBQUEsQ0FBRSxFQUFBLENBQUMsQUFBQyxDQUFDLENBQUEsQ0FBRSxFQUFBLENBQUUsRUFBQSxDQUFDLENBQUE7QUFBQSIsImZpbGUiOiJyZXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsicmVxdWlyZSgndHJhY2V1ci1zb3VyY2UtbWFwcycpLmluc3RhbGwocmVxdWlyZSgndHJhY2V1cicpKTtGdW5jdGlvbi5wcm90b3R5cGUuYmluZDIgPSBmdW5jdGlvbiBiaW5kMih0aGF0LCAuLi5hcmdzKSB7XG5cdHJldHVybiAoLi4uaW5uZXJBcmdzKSA9PiB0aGlzLmFwcGx5KHRoYXQsIGFyZ3MuY29uY2F0KGlubmVyQXJncykpXG59XG5cbmZ1bmN0aW9uIGZvbygpIHtcblx0Y29uc29sZS5sb2codGhpcywgYXJndW1lbnRzKVxufVxuXG5mb28uYmluZDIoe2hlbGw6ICd3b3JsZCd9LCAxLDIsMykoNCw1LDYpIiwiXG4gICAgICAgICAgICBmb3IgKHZhciAkX19wbGFjZWhvbGRlcl9fMCA9IFtdLCAkX19wbGFjZWhvbGRlcl9fMSA9ICRfX3BsYWNlaG9sZGVyX18yO1xuICAgICAgICAgICAgICAgICAkX19wbGFjZWhvbGRlcl9fMyA8IGFyZ3VtZW50cy5sZW5ndGg7ICRfX3BsYWNlaG9sZGVyX180KyspXG4gICAgICAgICAgICAgICRfX3BsYWNlaG9sZGVyX181WyRfX3BsYWNlaG9sZGVyX182IC0gJF9fcGxhY2Vob2xkZXJfXzddID0gYXJndW1lbnRzWyRfX3BsYWNlaG9sZGVyX184XTsiLCIkdHJhY2V1clJ1bnRpbWUuc2V0UHJvcGVydHkoJF9fcGxhY2Vob2xkZXJfXzAsXG4gICAgICAgICAgJF9fcGxhY2Vob2xkZXJfXzEsICRfX3BsYWNlaG9sZGVyX18yKSIsIiRfX3BsYWNlaG9sZGVyX18wWyR0cmFjZXVyUnVudGltZS50b1Byb3BlcnR5KCRfX3BsYWNlaG9sZGVyX18xKV0iLCJcbiAgICAgICAgICAgIGZvciAodmFyICRfX3BsYWNlaG9sZGVyX18wID0gW10sICRfX3BsYWNlaG9sZGVyX18xID0gMDtcbiAgICAgICAgICAgICAgICAgJF9fcGxhY2Vob2xkZXJfXzIgPCBhcmd1bWVudHMubGVuZ3RoOyAkX19wbGFjZWhvbGRlcl9fMysrKVxuICAgICAgICAgICAgICAkX19wbGFjZWhvbGRlcl9fNFskX19wbGFjZWhvbGRlcl9fNV0gPSBhcmd1bWVudHNbJF9fcGxhY2Vob2xkZXJfXzZdOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==