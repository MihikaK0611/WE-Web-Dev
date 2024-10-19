// Handle collapsible sections
document.querySelectorAll('h1, h2').forEach(function(heading) {
    heading.addEventListener('click', function() {
        var content = this.nextElementSibling;
        if (content.classList.contains('show')) {
            content.classList.remove('show');
        } else {
            content.classList.add('show');
        }
    });
});

// Generate Table of Contents
var toc = document.getElementById('toc');
var tocLevel = { 'H1': null, 'H2': null }; // Tracks H1 and H2 levels

document.querySelectorAll('h1, h2').forEach(function(heading) {
    var id = heading.getAttribute('id');
    if (id) {
        var tocEntry = document.createElement('li');
        tocEntry.innerHTML = '<a href="#' + id + '">' + heading.innerText + '</a>';

        if (heading.tagName === 'H1') {
            // Create a new top-level entry for H1 headings
            var ul = document.createElement('ul');
            tocLevel['H1'] = tocEntry;
            tocLevel['H2'] = null;
            toc.appendChild(tocEntry);
            toc.appendChild(ul);
        } else if (heading.tagName === 'H2') {
            // Nested under the last H1 section
            if (tocLevel['H1']) {
                var nestedUl = tocLevel['H1'].nextElementSibling;
                nestedUl.appendChild(tocEntry);
            }
        }
    }
});
