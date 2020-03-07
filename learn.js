
window.onscroll = () => {
    const nav = document.querySelector('header');
    if(this.scrollY <= 600) nav.className = '';
     else if(this.scrollY<=1300)nav.className = 'scroll';
    else nav.className = 'yo';
  };