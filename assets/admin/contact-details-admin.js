(function () {
    var nodes = document.querySelectorAll('.wingate-anim-enter');
    if (!nodes.length) {
        return;
    }

    nodes.forEach(function (node) {
        var delay = Number(node.getAttribute('data-wingate-delay') || 0);
        window.setTimeout(function () {
            node.classList.add('is-visible');
        }, delay);
    });
})();
