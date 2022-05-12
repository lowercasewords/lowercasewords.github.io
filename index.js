const nav = window.document.getElementsByTagName("nav")[0];
let navBarClosed = true;
swapNavBar();

function swapNavBar() {
    const navBar = document.createElement('div');
    if (navBarClosed) { // expand the nav
        const toDelete = document.getElementById('nav-box-closed');
        if(toDelete != null) {
            toDelete.remove();
        }
        navBar.id = 'nav-box-opened';
        
        // add it to its 'boder'
        // navBar.setAttribute('ondblclick', 'swapNavBar()');
        const pseudoBorder = navBar.appendChild(document.createElement('div'));
        pseudoBorder.id = 'nav-box-opened-pseudo-border';
        console.log('made opened container');
    }
    else { // shrink nav
        const toDelete = document.getElementById('nav-box-opened');
        if(toDelete != null) {
            toDelete.remove();
        }
        navBar.id = 'nav-box-closed';
        console.log('made closed container');
        navBar.setAttribute('onclick', 'swapNavBar()');
    }
    nav.appendChild(navBar);
    navBarClosed = !navBarClosed;
}