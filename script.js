const taskbar=document.querySelector('.taskbar');

function modifyTaskbar(property, value) {
    const taskbar = document.querySelector('.taskbar');
    let currentColor = getComputedStyle(taskbar).backgroundColor;

    switch (property) {
        case 'color':
            taskbar.style.backgroundColor = value;
            break;
        case 'transparency':
            let rgb = [0, 0, 0];
            if (currentColor.startsWith('rgb')) {
                const parts = currentColor.substring(currentColor.indexOf('(') + 1, currentColor.lastIndexOf(')')).split(',').map(Number);
                rgb = parts.slice(0, 3); 
            } else if (currentColor.startsWith('rgba')) {
                const parts = currentColor.substring(currentColor.indexOf('(') + 1, currentColor.lastIndexOf(')')).split(',').map(Number);
                rgb = parts.slice(0, 3);
            }

            taskbar.style.backgroundColor = `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${value})`;
            break;
        case 'blur':
            taskbar.style.backdropFilter = value === 0 ? 'none' : `blur(${value}px)`;
            break;
        default:
            console.warn(`Invalid property: ${property}. Valid options are 'color', 'transparency', or 'blur'`);
    }
}

function toggleTransparency() {
    const transparencyCheckbox = document.getElementById('transparency');
    if (transparencyCheckbox.checked) {
        modifyTaskbar('transparency', 0.2); // Set transparency to 0.5 when checked
    } else {
        modifyTaskbar('transparency', 1); // Set transparency to 1 (fully opaque) when unchecked
    }
}
function toggleBlur() {
    const blurCheckbox = document.getElementById('blur');
    if (blurCheckbox.checked) {
        modifyTaskbar('blur', 5); // Set blur when checked
    } else {
        modifyTaskbar('blur', blurCheckbox.checked ? 5 : 0); // Remove blur when unchecked
    }
}

function toggleVolumeSlider(){
    const flyInDiv = document.querySelector('.volume-slider');
    flyInDiv.classList.toggle('active');
}
