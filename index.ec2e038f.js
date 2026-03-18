document.querySelectorAll("form input").forEach(function(e){var l=e.name,t=l.slice(0,1).toUpperCase()+l.slice(1),a=document.createElement("label");a.classList.add("field-label"),a.htmlFor=e.id,e.placeholder=t,e.textContent=l,e.parentElement.append(a)});
//# sourceMappingURL=index.ec2e038f.js.map
