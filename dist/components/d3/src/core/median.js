d3.median=function(e,t){return arguments.length>1&&(e=e.map(t)),e=e.filter(d3_number),e.length?d3.quantile(e.sort(d3.ascending),.5):undefined}