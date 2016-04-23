
(function(module) {
 var select = {}

 $("#selectAll").change( function(e){
   e.preventDefault();
   $("input:checkbox").prop('checked', $(this).prop("checked"));
   console.log("select all!")
 });

module.select = select;
})(window);
