(function(){function translate(literate_code){var regular_kal_lines,last_line,in_code_block,line,ki$1,kobj$1;for(regular_kal_lines=[],last_line="",in_code_block=!1,kobj$1=literate_code.split("\n"),ki$1=0;kobj$1.length>ki$1;ki$1++)line=kobj$1[ki$1],line.match(/^   /)&&(""===last_line||in_code_block)?(in_code_block=!0,regular_kal_lines.push(line.slice(4))):(in_code_block=!1,regular_kal_lines.push("# "+line)),last_line=line;return regular_kal_lines.join("\n")}exports.translate=translate})();